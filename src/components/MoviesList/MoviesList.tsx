import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../react-app-env';
import './MoviesList.scss';

interface Props {
  movies: Movie[];
}

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div
        className="card"
        data-cy="card"
        key={movie.imdbId}
      >
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
