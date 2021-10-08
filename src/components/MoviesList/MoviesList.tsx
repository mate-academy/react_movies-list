import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard/MovieCard';

interface Movie {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movie => (
        <MovieCard {...movie} />
      ))}
    </div>
  </>
);
