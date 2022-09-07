import React from 'react';
import { MovieType } from '../../types/MovieType';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Films = {
  movies: MovieType[]
};

export const MoviesList: React.FC<Films> = ({ movies = [] }) => (
  <>
    <div className="movies">
      {movies.map(movie => (
        <div className="card" data-cy="Movie">
          <MovieCard
            key={movie.imdbId}
            title={movie.title}
            description={movie.description}
            imgUrl={movie.imgUrl}
            imdbId={movie.imdbId}
          />
        </div>
      ))}
    </div>
  </>
);
