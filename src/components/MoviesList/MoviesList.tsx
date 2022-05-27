import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';
import { FilmList } from '../../react-app-env';

export const MoviesList: React.FC<FilmList> = ({ movieList = [] }) => (

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
