import React from 'react';
import './MoviesList.scss';
// import moviesFromServer from '../../api/movies.json';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type MoviesListProps = {
  movies: Movie[];
};

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(movie => {
        return <MovieCard key={movie.imdbId} movie={movie} />;
      })}
    </div>
  );
};
