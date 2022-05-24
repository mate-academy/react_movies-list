import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { List } from '../types/ListType';

type Props = {
  datafromServer: List[]
};

export const MoviesList: React.FC<Props> = ({ datafromServer = [] }) => (
  <div className="movies">
    {datafromServer.map(movie => (
      <div key={movie.imdbId} className="card" data-cy="card">
        <MovieCard
          title={movie.title}
          description={movie.description}
          imdbUrl={movie.imdbUrl}
          imgUrl={movie.imgUrl}
        />
      </div>
    ))}
  </div>
);
