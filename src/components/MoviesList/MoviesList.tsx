import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';

interface Movie {
  title: string,
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

type Movies = {
  movies: Movie [];
};

export const MoviesList: React.FC <Movies> = ({ movies = [] }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li className="card" key={movie.imdbId}>
        <MovieCard
          description={movie.description}
          title={movie.title}
          imdbId={movie.imdbId}
          imdbUrl={movie.imdbUrl}
          imgUrl={movie.imgUrl}
        />
      </li>
    ))}
  </ul>
);

export default MoviesList;
