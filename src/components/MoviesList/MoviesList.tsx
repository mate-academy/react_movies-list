import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../type/Movie';
import './MoviesList.scss';

type Movies = {
  movies: Movie[];
};

export const MoviesList: React.FC<Movies> = ({ movies }) => (
  <>
    <ul className="movies">
      {movies.map((movie) => (
        <li className="card" key={movie.imdbId}>
          <MovieCard {...movie} />
        </li>
      ))}
    </ul>
  </>
);
