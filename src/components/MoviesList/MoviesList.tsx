import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface SingleMovie {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
}

type Mov = {
  list: SingleMovie[];
};

export const MoviesList: React.FC<Mov> = ({ list }) => (

  <div className="movies">
    {list.map((el : SingleMovie) => (
      <div key={el.imdbId} data-cy="card" className="card">
        <MovieCard {...el} />
      </div>
    ))}
  </div>

);
