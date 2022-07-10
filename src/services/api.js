import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const ROOT_KEY = 'f3ea85ad66a7076fbd3968a20cd79e45';

export async function getTrending() {
  const { data } = await axios.get(
    `trending/movie/day?api_key=${ROOT_KEY}&language=uk`
  );
  return data.results;
}

export async function getSearchMovies(query) {
  const { data } = await axios.get(
    `search/movie?api_key=${ROOT_KEY}&query=${query}&language=uk`
  );
  return data.results;
}

export async function getMovieDetails(movieId) {
  const { data } = await axios.get(
    `movie/${movieId}?api_key=${ROOT_KEY}&language=uk`
  );
  return data;
}

export async function getMovieCredits(movieId) {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${ROOT_KEY}&language=uk`
  );
  return data;
}

export async function getMovieReviews(movieId) {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${ROOT_KEY}`
  );
  return data;
}
