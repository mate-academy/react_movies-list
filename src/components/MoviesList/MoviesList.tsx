import React from 'react';
import MoviesFromServer from '../../api/movies.json';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList: React.FC = () => (
  <div className="movies">
    {
      MoviesFromServer.map(({
        title, description, imgUrl, imdbUrl, imdbId,
      }) => (
        <MovieCard
          title={title}
          description={description}
          imgUrl={imgUrl}
          imdbUrl={imdbUrl}
          imdbId={imdbId}
        />
      ))
    }
  </div>
);
