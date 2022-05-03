import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Item {
  title: string,
  description?: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string
}

type Items = {
  props: Item[]
};

export const MoviesList: React.FC<Items> = ({ props }) => (
  <div className="movies">
    {props.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MovieCard
          title={movie.title}
          description={movie.description}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
        />
      </div>
    ))}
  </div>
);
