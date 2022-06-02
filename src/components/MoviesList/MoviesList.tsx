import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../Types';
import { MovieCard } from '../MovieCard/MovieCard';

interface Props {
  movies: Movie[];
}

export const MoviesList: React.FC<Props> = ({ movies }) => (
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
