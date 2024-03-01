import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';


type MoviesListProps = {
  movies: Movie[]
};

export const MoviesList: React.FC <MoviesListProps> = ({ movies }) => (

  <div className="movies">
    {movies.map((movie) => (
      <div className="card" data-cy="Movie" key={movie.imdbId}>
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
);

export const MoviesList: React.FC = () => <>Put the list here</>;

