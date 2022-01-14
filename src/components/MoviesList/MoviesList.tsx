import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <ul className="movies">
      {movies.map(movie => (
        <li className="card" key={movie.imdbId}>
          <MovieCard
            title={movie.title}
            description={movie.description}
            imgUrl={movie.imgUrl}
            imdbUrl={movie.imdbUrl}
          />
        </li>
      ))}
    </ul>
  </>
);
