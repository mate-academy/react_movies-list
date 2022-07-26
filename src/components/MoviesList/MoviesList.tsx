import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <>
    <div className="movies" >
      {
        movies.map((singleMovie) => (
          <MovieCard
            movie={singleMovie}
            key={singleMovie.imdbId}
          />
        ))
      }
    </div>
  </>
);
