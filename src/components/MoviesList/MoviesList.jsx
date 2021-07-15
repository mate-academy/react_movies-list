import React from 'react';
import moviesFromServer from '../../api/movies.json';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

export const MoviesList = () => (
  <>
    <div className="movies">
      {moviesFromServer.map(movie => (
        <MovieCard
          key={movie.imdbId}
          title={movie.title}
          description={movie.description}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
        />
      ))}
    </div>
  </>
);
