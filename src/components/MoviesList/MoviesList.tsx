import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Movie {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
}
 type Props = {
   serverData: Movie[];
 };

export const MoviesList: React.FC<Props> = ({ serverData = [] }) => {
  return (
    <div className="page-content">
      <div className="movies">
        {serverData.map(e => <MovieCard {...e} />)}
      </div>
    </div>
  );
};
