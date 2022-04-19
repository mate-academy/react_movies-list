import React from 'react';
import './MoviesList.scss';
import { MovieType } from '../../types/MovieType';
import { MovieCard } from '../MovieCard';

type Props = {
  movies : MovieType[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbId}
          filmTitle={movie.title}
          filmDescription={movie.description}
          filmImgUrl={movie.imgUrl}
          filmImdbUrl={movie.imdbUrl}
          filmImdbId={movie.imdbId}
        />
      ))}
    </div>
  </>
);
