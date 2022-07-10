import { NavLink } from 'react-router-dom';
import s from './navigation.module.css';

function Navigation() {
  return (
    <header className={s.header}>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.link)}
          to="/"
        >
          Домашня сторінка
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.link)}
          to="/movies"
        >
          Пошук фільмів
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
