import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        {movies.map(movie => (
          <div className="card" data-cy="Movie" key={movie.imdbId}>
            <MovieCard
              {...movie}
              // movie={movie}
              // title={movie.title}
              // description={movie.description}
              // imgUrl={movie.imgUrl}
              // imdbUrl={movie.imdbUrl}
            />
          </div>
        ))}
      </div>
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
