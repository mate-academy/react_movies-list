import React from 'react';
import './MoviesList.scss';
import { Movie } from '../types/Movie';
import { MovieCard } from '../MovieCard/MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li className="card" key={movie.imdbId}>
        <MovieCard
          title={movie.title}
          description={movie.description}
          url={movie.imdbUrl}
          img={movie.imgUrl}
        />
      </li>
    ))}
  </ul>
);
