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
        imbdUrl,
        imdbId,
      } = movieBlock;

      return (
        <MovieCard
          title={title}
          description={description}
          imgUrl={imgUrl}
          imbdUrl={imbdUrl}
          imdbId={imdbId}
        />
      );
    })}
  </>
);
