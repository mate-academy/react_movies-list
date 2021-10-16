import React from 'react';
import './MoviesList.scss';

import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MovieCard
          title={movie.title}
          imdbUrl={movie.imdbUrl}
          imdbId={movie.imdbId}
          description={movie.description}
          imgUrl={movie.imgUrl}
        />
      </div>
    ))}
  </div>
);
