import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface MoviesCard {
  title:string;
  description?:string;
  imgUrl:string;
  imdbUrl:string;
  imdbId:string;
}

type Props = {
  moviesData: MoviesCard[]
};

export const MoviesList: React.FC<Props> = ({ moviesData }) => {
  const keyId = 0;

  return (
    <div className="movies">

      {
        moviesData.map(moviesItem => (
          <div className="card" key={keyId + 1}>
            <MovieCard {...moviesItem} />
          </div>
        ))
      }

    </div>
  );
};
