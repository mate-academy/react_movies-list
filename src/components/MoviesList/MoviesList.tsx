import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => {
  return (
    <ul className="movies">
      {movies.map(movie => {
        const {
          title,
          description,
          imgUrl,
          imdbUrl,
          imdbId,
        } = movie;

        return (
        <li className="card" data-cy="Movie" key={imdbId}>
          <MovieCard
            title={title}
            description={description}
            imgUrl={imgUrl}
            imdbUrl={imdbUrl}
          />
        </li>
      )})}
    </ul>
  );
};
