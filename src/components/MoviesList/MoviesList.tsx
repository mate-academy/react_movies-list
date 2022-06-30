import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../types/Movie';

type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movie => (
        <div className="movies" key={movie.imdbId}>
          <MovieCard
            title={movie.title}
            description={movie.description}
            imdbUrl={movie.imdbUrl}
            imgUrl={movie.imgUrl}
            imdbId={movie.imdbId}
          />
        </div>
      ))}
    </div>
  </>
);
