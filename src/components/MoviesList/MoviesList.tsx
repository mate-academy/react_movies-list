import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Movies {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}
type Props = {
  moviesCard: Movies[];
};

export const MoviesList: React.FC<Props> = ({ moviesCard }) => (
  <>
    <div className="movies">
      {moviesCard.map(movieCard => (
        <div key={movieCard.imdbId} className="card">
          <MovieCard {...movieCard} />
        </div>
      ))}
    </div>
  </>
);
