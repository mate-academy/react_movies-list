import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  // eslint-disable-next-line react/require-default-props
  movies?: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <ul className="movies">
    {movies.map(({
      imdbId,
      title,
      description,
      imgUrl,
      imdbUrl,
    }) => (
      <li key={imdbId}>
        <MovieCard
          title={title}
          description={description}
          imgUrl={imgUrl}
          imdbUrl={imdbUrl}
        />
      </li>
    ))}
  </ul>
);
