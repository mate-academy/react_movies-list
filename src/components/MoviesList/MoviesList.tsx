import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';

type List = {
  title: string,
  description?: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
};

type Props = {
  movies: List[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movie => (
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
  </>
);
