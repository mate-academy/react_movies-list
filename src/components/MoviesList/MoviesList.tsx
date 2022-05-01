import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { CardInfo } from '../../types/CardInfo';

type Props = {
  movies: CardInfo[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MovieCard
          title={movie.title}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
          description={movie.description}
        />
      </div>
    ))}
  </div>
);
