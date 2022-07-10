import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { getMovieCredits } from '../../services/api';
import noImgActor from '../../img/noImgActor.jpg';
import s from './cast.module.css';

function Cast() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  useEffect(() => {
    async function getCast() {
      try {
        setLoading(true);
        setError(false);
        const movieActors = await getMovieCredits(movieId);
        setActors(movieActors);
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
      {actors?.cast.length < 1 && (
        <p className={s.notifocation}>Поки що немає інформації про акторів</p>
      )}
      {actors && (
        <ul className={s.list}>
          {actors.cast.map(({ id, profile_path, name, character }) => (
            <li className={s.item} key={id}>
              <img
                className={s.img}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : noImgActor
                }
                alt={name}
              />
              <p>Ім'я: {name}</p>
              <p>Роль: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cast;
