import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';
import { FilmProp } from '../../react-app-env';

interface Props {
  movieList: FilmProp[];
}

export const MoviesList: React.FC<Props> = ({ movieList = [] }) => (

  <>
    <div className="movies">
      {movieList.map(film => (
        <div className="card" key={film.imdbId} data-cy="card">
          <MovieCard
            movie={film}
          />
        </div>
      ))}
    </div>
  </>
);
