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

type Props = {
  list: SingleMovie[];
};

export const MoviesList: React.FC<Props> = ({ list }) => (

  <div className="movies">
    {list.map((el : SingleMovie) => (
      <div key={el.imdbId} data-cy="card" className="card">
        <MovieCard
          title={el.title}
          description={el.description}
          imgUrl={el.imgUrl}
          imdbUrl={el.imdbUrl}
        />
      </div>
    ))}
  </div>

);
