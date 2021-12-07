import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import { Movie } from '../MovieCard/MovieType';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({
  movies,
}) => (
  <div className="movies">
    {movies.map(({
      title,
      description,
      imgUrl,
      imdbUrl,
      imdbId,
    }) => (
      <div key={imdbId}>
        <MovieCard
          title={title}
          description={description}
          imgUrl={imgUrl}
          imdbUrl={imdbUrl}
        />
      </div>
    ))}
  </div>
);
