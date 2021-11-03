import React from 'react';
import './MoviesList.scss';
import { cardContent } from '../MovieCard/TypeMovieCard';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: cardContent[]
}

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map((element => {
      return (
        <div className="card" key={element.imdbId}>
          <MovieCard {...element} />
        </div>
      );
    }))}
  </div>
);
