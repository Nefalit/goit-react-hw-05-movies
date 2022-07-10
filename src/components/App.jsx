import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Navigation = lazy(() => import('./Navigation/Navigation'));
const Home = lazy(() => import('pages/Home/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));

function App() {
  return (
    <div className='container'>
      <Suspense fallback="">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
