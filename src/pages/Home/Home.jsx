import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { getTrending } from '../../services/api';
import s from './home.module.css';

function Home() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const movies = await getTrending();
        setState(movies);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  const elements = state.map(({ id, title, poster_path }) => (
    <li className={s.item} key={id}>
      <Link className={s.link} to={`/movies/${id}`}>
        <img
          className={s.img}
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        ></img>
        <p className={s.text}> {title}</p>
      </Link>
    </li>
  ));
  return (
    <div className={s.wrapper}>
      {loading && <ThreeDots color="#ff6b08" height={80} width={80} />}
      {error && <p className={s.error}>Щось пішло не так : {error}</p>}
      <h1 className={s.title}>Популярні сьогодні</h1>
      <ul className={s.list}>{elements}</ul>
    </div>
  );
}

export default Home;
