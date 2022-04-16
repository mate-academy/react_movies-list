import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type ListOfMovies = {
  movies: Movie[];
};

export const MoviesList: React.FC<ListOfMovies> = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movie => {
        return (
          <div className="card" key={movie.imdbId}>
            <MovieCard {...movie} />
          </div>
        );
      })}
    </div>
  </>
);
