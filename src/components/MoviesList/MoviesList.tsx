import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Movie {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
}

type Props = {
  movies: Movie[],
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div className="movies">
    {movies.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MovieCard
          imgUrl={movie.imgUrl}
          title={movie.title}
          description={movie.description}
          imdbUrl={movie.imdbUrl}
        />
      </div>
    ))}
  </div>
);
