import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(({
      title,
      description,
      imgUrl,
      imdbUrl,
      imdbId,
    }) => (
      <MovieCard
        title={title}
        description={description}
        imgUrl={imgUrl}
        imdbUrl={imdbUrl}
        key={imdbId}
      />
    ))}
  </div>
);
