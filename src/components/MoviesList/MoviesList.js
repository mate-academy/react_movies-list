import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

export const MovieList = ({ movies }) => {
  const MoviesArray = movies.map(el => (
    <div className="movies" key={el.imdbId}>
      <MovieCard
        title={el.title}
        description={el.description}
        imgUrl={el.imgUrl}
        imdbUrl={el.imdbUrl}
        imdbId={el.imdbId}
      />
    </div>
  ));

  return (
    MoviesArray
  );
};
