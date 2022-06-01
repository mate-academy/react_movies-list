import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

interface Keys {
  title: string;
  description: string;
  imdbId: string;
  imgUrl: string;
  imdbUrl: string;
}

interface Movie {
  movies: Keys[];
}

export const MoviesList: React.FC<Movie> = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movie => (
        <div className="card" data-cy="card" key={movie.imdbId}>
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
