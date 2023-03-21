// import { title } from 'process';
import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <>
    <div className="movies">
      <div className="card" data-cy="Movie">
        {movies.map(movie => (
          <MovieCard {...movie} />
        ))}
      </div>
    </div>
  </>
);
