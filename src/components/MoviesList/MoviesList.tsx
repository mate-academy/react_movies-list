import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../Types/Movie';

import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(({
        description, imdbUrl, imgUrl, title, imdbId,
      }) => {
        return (
          <MovieCard
            key={imdbId}
            title={title}
            description={description}
            imgUrl={imgUrl}
            imdbUrl={imdbUrl}
          />
        );
      })}
    </div>
  );
};
