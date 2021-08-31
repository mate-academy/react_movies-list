import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Film {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
}

type Props = {
  moviesDataList: Film[],
};

export const MoviesList: React.FC<Props> = ({ moviesDataList }) => (
  <ul className="moviesList">
    {moviesDataList.map((movie: Film) => (
      <li key={movie.imdbId}>
        <MovieCard {...movie} />
      </li>
    ))}
  </ul>
);
