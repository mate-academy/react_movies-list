import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { MovieCardItem } from '../types/MovieCardItem';

type Props = {
  movies: MovieCardItem[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MovieCard
          title={movie.title}
          description={movie.description}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
        />
      </div>
    ))}
  </div>
);
