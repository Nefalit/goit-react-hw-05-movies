import {
  useParams,
  useLocation,
  Link,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { getMovieDetails } from '../../services/api';
import noImg from '../../img/noImgMovie.jpg';
import s from './movieDetails.module.css';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const goBack = location?.state?.from ?? '/';

  useEffect(() => {
    async function getDetails() {
      try {
        setLoading(true);
        setError(false);
        const movieDetails = await getMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    getDetails();
  }, [movieId]);

  return (
    <div className={s.wrapper}>
      <Link className={s.goBack} to={goBack}>
        На попередню
      </Link>

      {loading && <ThreeDots color="#ff6b08" height={80} width={80} />}
      {error && <p className={s.error}>Щось пішло не так : {error}</p>}
      {movie && (
        <div>
          <h2 className={s.title}>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <div className={s.box}>
            <img
              className={s.img}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : noImg
              }
              alt={movie.title}
            />
            <div className={s.info}>
              <h3 className={s.titleTwo}>Огляд</h3>
              {movie?.overview && <p className={s.text}>{movie.overview}</p>}
              <h3 className={s.titleTwo}>Жанри</h3>
              {movie.genres.length > 0 && (
                <p className={s.text}>
                  {movie.genres.map(({ name }) => name).join(', ')}
                </p>
              )}
              {movie?.vote_average && (
                <p className={s.text}>Рейтинг: {movie.vote_average}</p>
              )}

              <p className={s.text}>Додаткова інформація</p>
              <NavLink
                className={({ isActive }) => (isActive ? s.active : s.link)}
                to="cast"
                state={{ from: goBack }}
              >
                Актори
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? s.active : s.link)}
                to="reviews"
                state={{ from: goBack }}
              >
                Відгуки
              </NavLink>
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default MovieDetails;
