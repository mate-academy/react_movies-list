import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Movie {
  title: string,
  description?: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string
}

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(({
      title, description, imgUrl, imdbUrl, imdbId,
    }) => (
      <MovieCard
        key={imdbId}
        title={title}
        description={description}
        imgUrl={imgUrl}
        imdbUrl={imdbUrl}
      />
    ))}
  </div>
);
