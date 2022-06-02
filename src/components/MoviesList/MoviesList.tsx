import React from 'react';
import { Movie } from '../../app.typrdefs';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

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
        imbdUrl={movie.imdbUrl}
        imgUrl={movie.imgUrl}
      />
    ))}
  </div>
);
