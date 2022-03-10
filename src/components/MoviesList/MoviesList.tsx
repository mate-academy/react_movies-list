import React from 'react';

import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

interface Movies {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

type Props = {
  movies: Movies[]
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        {movies.map(movie => (
          <MovieCard {...movie} key={movie.imdbId} />
        ))}
      </div>
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
