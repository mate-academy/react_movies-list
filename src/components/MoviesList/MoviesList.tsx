import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.scss';

import { Movie } from '../types/Movie';

type Props = {
  movies: Movie[];
};

const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movie => (
        <div className="card" key={movie.imdbId}>
          <MovieCard {...movie} />
        </div>
      ))}
    </div>
  </>
);

export default MoviesList;
