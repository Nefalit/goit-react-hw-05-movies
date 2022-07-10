import { useEffect, useState } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import SearchForm from '../../components/SearchForm/SearchForm';
import { getSearchMovies } from '../../services/api';
import noImg from '../../img/noImgMovie.jpg';
import s from './movies.module.css';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    async function searchMovies() {
      if (!searchQuery) {
        return;
      }
      try {
        setLoading(true);
        setError(false);
        const movie = await getSearchMovies(searchQuery);
        setMovies(movie);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    searchMovies();
  }, [searchQuery]);

  const handleSubmit = querySearch => {
    setSearchParams({ query: querySearch });
  };

  const elements = movies.map(({ id, title, poster_path }) => (
    <li className={s.item} key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }} className={s.link}>
        <img
          className={s.img}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : noImg
          }
          alt={title}
        ></img>
        <p>{title}</p>
      </Link>
    </li>
  ));

  return (
    <div className={s.wrapper}>
      <SearchForm onSubmit={handleSubmit} />
      {loading && <ThreeDots color="#ff6b08" height={80} width={80} />}
      {error && <p className={s.error}>Щось пішло не так : {error}</p>}
      {movies.length > 0 && <ul className={s.list}>{elements}</ul>}
      {!loading && searchQuery && movies.length < 1 && (
        <p className={s.notification}>
          Не знайдено фільмів по такому запиту, спробуй ще...
        </p>
      )}
    </div>
  );
}

export default Movies;
