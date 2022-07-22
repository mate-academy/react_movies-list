import React from 'react';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/movie';

type Props = {
  movie: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movie }) => (
  <>
    <div className="movies">
      {movie.map(item => (
        <MovieCard
          title={item.title}
          description={item.description}
          imgUrl={item.imgUrl}
          imdbUrl={item.imdbUrl}
          imdbId={item.imdbId}
        />
      ))}
    </div>
  </>
);
