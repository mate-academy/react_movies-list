import React from 'react';
import './MoviesList.scss';
import moviesFromServer from '../../api/movies.json';
import { MovieCard } from '../MovieCard';

export const MoviesList: React.FC = () => {
  return (
    <div className="movies">
      {moviesFromServer.map(movie => {
        return (
          <MovieCard
            key={movie.imdbId}
            title={movie.title}
            description={movie.description}
            imgUrl={movie.imgUrl}
            imdbUrl={movie.imdbUrl}
          />
        );
      })}
    </div>
  );
};
