import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

interface List {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

type Props = {
  datafromServer: List[]
};

export const MoviesList: React.FC<Props> = ({ datafromServer = [] }) => (
  <div className="movies">
    {datafromServer.map(movie => (
      <div key={movie.imdbId} className="card">
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);
