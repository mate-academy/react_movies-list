import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/typedef';
import './MoviesList.scss';

interface MovieList {
  movies: Movie[]
}

export const MoviesList: React.FC<MovieList> = ({ movies }) => (
  <>
    <div className="movies">
      {
        movies.map(movie => (
          <MovieCard
            title={movie.title}
            description={movie.description}
            imgUrl={movie.imgUrl}
            imdbUrl={movie.imdbUrl}
            imdbId={movie.imdbId}
          />
        ))
      }
    </div>
  </>
);
