import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '../../types/Movie';
import './MoviesList.scss';

type Props = {
  moviesFromServer: Movie[]
};

export const MoviesList: React.FC<Props> = ({ moviesFromServer }) => (
  <>
    <div className="movies">
      {moviesFromServer.map((movie: Movie) => (
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
