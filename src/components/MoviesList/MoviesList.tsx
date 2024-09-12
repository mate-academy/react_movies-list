import React from 'react';
import './MoviesList.scss';
// import moviesFromServer from '../../api/movies.json';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type MoviesListProps = {
  moviesFromServer: Movie[];
};

export const MoviesList: React.FC<MoviesListProps> = ({ moviesFromServer }) => {
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
