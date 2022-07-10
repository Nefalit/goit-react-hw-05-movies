import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { getMovieReviews } from '../../services/api';
import s from './reviews.module.css';

function Reviews() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function getCast() {
      try {
        setLoading(true);
        setError(false);
        const movieReviews = await getMovieReviews(movieId);
        setReviews(movieReviews);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <div className={s.wrapper}>
      {loading && <ThreeDots color="#ff6b08" height={80} width={80} />}
      {error && <p className={s.error}>Щось пішло не так : {error}</p>}
      {reviews && (
        <ul>
          {reviews.results.length > 0 ? (
            reviews.results.map(({ author, content, id }) => (
              <li key={id}>
                <p>Автор: {author}</p>
                <p>{content}</p>
              </li>
            ))
          ) : (
            <p className={s.notifocation}>Поки що немає відгуків про фільм</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default Reviews;
