import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

interface Movie {
  title: string,
  description?: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string
}

type MovieList = {
  movies: Movie[]
};

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
