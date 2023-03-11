import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import MovieCard from '../MovieCard/MovieCard';

interface Props {
  movies: Movie[];
}

const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
