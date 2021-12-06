import React from 'react';
import { Movie } from '../../api/types/index';
import { MovieCard } from '../MovieCard';

import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <div className="movies">
      {
        movies.map(movie => (
          <MovieCard
            key={movie.imdbId}
            title={movie.title}
            imgUrl={movie.imgUrl}
            imdbUrl={movie.imdbUrl}
            description={movie.description}
          />
        ))
      }
    </div>
  </>
);
