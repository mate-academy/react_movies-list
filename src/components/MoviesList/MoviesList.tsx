import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

type Props = {
  movieListData: Movie[],
};

export const MoviesList: React.FC<Props> = (props) => {
  const { movieListData } = props;

  return (
    <ul className="movies-list">
      {
        movieListData.map(movie => (
          <li>
            <MovieCard key={movie.imdbId} movieCard={movie} />
          </li>
        ))
      }
    </ul>
  );
};
