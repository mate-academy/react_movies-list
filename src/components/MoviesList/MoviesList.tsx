import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Movie {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

interface Props {
  moviesList: Movie[];
}

export const MoviesList: React.FC<Props> = ({ moviesList }) => (
  <ul>
    {moviesList.map(({
      title,
      description,
      imgUrl,
      imdbUrl,
      imdbId,
    }) => (
      <li key={imdbId}>
        <MovieCard
          cardTitle={title}
          description={description}
          imgUrl={imgUrl}
          imdbUrl={imdbUrl}
        />
      </li>
    ))}
  </ul>
);
