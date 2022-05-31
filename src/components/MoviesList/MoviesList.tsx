import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movies } from '../../react-app-env';
import './MoviesList.scss';

type Props = {
  movies: Movies[]
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <>
    {movies.map(movieBlock => {
      const {
        title,
        description,
        imgUrl,
        imdbUrl,
        imdbId,
      } = movieBlock;

      return (
        <MovieCard
          title={title}
          description={description}
          imgUrl={imgUrl}
          imdbUrl={imdbUrl}
          imdbId={imdbId}
        />
      );
    })}
  </>
);
