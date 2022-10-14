/* eslint-disable max-len */
import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

const imdbImage = 'images/imdb-logo.jpeg';

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div className="movies">
    {movies.map((movie) => (
      <div className="card" data-cy="Movie" key={movie.imdbId}>
        <MovieCard
          title={movie.title}
          description={movie.description}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
          imdbImg={imdbImage}
        />
      </div>
    ))}
  </div>
);
