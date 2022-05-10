import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Cards } from '../../types/Movie';

type Props = {
  movies: Cards[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(({
        title, description, imgUrl, imdbUrl, imdbId,
      }) => (
        <MovieCard
          title={title}
          description={description}
          imgUrl={imgUrl}
          imdbUrl={imdbUrl}
          imdbId={imdbId}
        />
      ))}
  </div>
);
