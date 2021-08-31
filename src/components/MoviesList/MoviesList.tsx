import React from 'react';
import './MoviesList.scss';
import { CardContent } from '../MovieCard/TypeMovieCard';
import { MovieCard } from '../MovieCard';

interface Props {
  MoviesListArr: CardContent[]
}

export const MoviesList: React.FC<Props> = ({ MoviesListArr }) => (
  <div className="movies">
    {MoviesListArr.map((element => {
      return (
        <>
          <div className="card" key={element.imdbId}>
            <MovieCard {...element} />
          </div>
        </>
      );
    }))}
  </div>
);
