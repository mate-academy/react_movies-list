import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

import { Movie } from '../../types/movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul className="movies">
    {movies.map((movie: Movie) => (
      <React.Fragment key={movie.imdbId}>
        <MovieCard
          title={movie.title}
          description={movie.description}
          imdbId={movie.imdbId}
          imdbUrl={movie.imdbUrl}
          imgUrl={movie.imgUrl}
        />
      </React.Fragment>
    ))}
  </ul>
);
