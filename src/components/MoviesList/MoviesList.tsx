import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/index';
import { Movie } from '../../types/Movie';

type Movies = {
  movies: Movie[];
};

export const MoviesList: React.FC<Movies> = ({ movies = [] }) => (
  <ul className="Movies">
    {movies.map(movie => (
      <li className="Movies__list" key={movie.imdbId}>
        <MovieCard
          title={movie.title}
          description={movie.description}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
          imdbId={movie.imdbId}
        />
      </li>
    ))}
  </ul>
);
