import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../api/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul className="movies">
    {movies.map(({
      title, description, imgUrl, imdbUrl, imdbId,
    }) => (
      <li key={imdbId}>
        <MovieCard
          key={imdbId}
          title={title}
          description={description}
          imgUrl={imgUrl}
          imdbUrl={imdbUrl}
        />
      </li>
    ))}
  </ul>
);
