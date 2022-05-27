import React from 'react';
import './MoviesList.scss';
import { MoviCard } from '../../react-app-env';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: MoviCard[];
}

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <React.Fragment key={movie.imdbId}>
        <MovieCard
          imdbId={movie.imdbId}
          title={movie.title}
          description={movie.description}
          imdbUrl={movie.imdbUrl}
          imgUrl={movie.imgUrl}
        />
      </React.Fragment>
    ))}
  </div>
);
