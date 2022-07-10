import { Link } from 'react-router-dom';
import s from './notFound.module.css';

function NotFoundPage() {
  return (
    <div className={s.wrapper}>
      <h2 className={s.text}>Сторінку не знайдено</h2>
      <Link to="/" className={s.link}>
        Назад
      </Link>
    </div>
  );
}

export default NotFoundPage;
