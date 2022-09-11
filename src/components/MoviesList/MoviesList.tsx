import moviesFromServer from '../../api/movies.json';
import { MovieCard } from '../MovieCard';

/* eslint-disable */

export const MoviesList = () => (
  <div className="movies">
    {/* @ts-ignore */}
    {moviesFromServer.length > 0 ? moviesFromServer.map((a, b) => MovieCard(moviesFromServer[b])) : []}
  </div>
);
