import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../appTypeDefs';
import { MovieCard } from '../MovieCard';

type MoviesListProps = {
  movies: Movie[];
};

export const MoviesList: React.FC<MoviesListProps> = (
  { movies },
) => {
  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbId}
          title={movie.title}
          description={movie.description}
          imdbUrl={movie.imdbUrl}
          imgUrl={movie.imgUrl}
        />
      ))}
    </div>
  );
};
