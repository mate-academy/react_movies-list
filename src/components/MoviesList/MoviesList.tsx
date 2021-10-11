import React from 'react';
import { Movie } from '../../types/Movie';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
);

export default MoviesList;
