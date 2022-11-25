import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

import './MoviesList.scss';

type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div className="movies">
    {movies.map(movie => (
      <div key={movie.imdbId} className="card" data-cy="Movie">
        <MovieCard
          title={movie.title}
          description={movie.description}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
        />
      </div>
    ))}
  </div>
);
