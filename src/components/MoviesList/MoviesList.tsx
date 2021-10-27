import React from 'react';
import { Movies } from '../../types/Movies';
import { MovieCard } from '../MovieCard';

import './MoviesList.scss';

type Props = {
  movies: Movies[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {
      movies.map(movie => {
        return (
          <MovieCard
            key={movie.imdbId}
            title={movie.title}
            description={movie?.description}
            imgUrl={movie.imgUrl}
            imdbUrl={movie.imdbUrl}
          />
        );
      })
    }
  </div>
);
