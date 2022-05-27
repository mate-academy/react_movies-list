import React from 'react';
import { Movie } from '../../react-app-env';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(film => (
      <div className="card" data-cy="card" key={film.imdbId}>
        <MovieCard
          title={film.title}
          description={film.description}
          imgUrl={film.imgUrl}
          imdbUrl={film.imdbUrl}
        />
      </div>
    ))}
  </div>
);
