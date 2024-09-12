/* eslint-disable max-len */
import React from 'react';

import './App.scss';
import { Movie } from './types/Movie';
import moviesFromServer from './api/movies.json';

const MovieCard: React.FC<Movie> = ({
  title,
  description,
  imgUrl,
  imdbUrl,
}) => {
  return (
    <div className="card" data-cy="Movie">
      <div className="card-image">
        <figure className="image is-4by3">
          <img data-cy="MovieImage" src={imgUrl} alt="Film logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="images/imdb-logo.jpeg" alt="imdb" />
            </figure>
          </div>

          <div className="media-content">
            <p className="title is-8" data-cy="MovieTitle">
              {title}
            </p>
          </div>
        </div>

        <div className="content">
          <p data-cy="MovieDescription">{description}</p>

          <a href={imdbUrl} data-cy="MovieLink">
            IMDB
          </a>
        </div>
      </div>
    </div>
  );
};

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        {moviesFromServer.map(movie => {
          return (
            <MovieCard
              key={movie.imdbId}
              title={movie.title}
              description={movie.description}
              imgUrl={movie.imgUrl}
              imdbUrl={movie.imdbUrl}
            />
          );
        })}
      </div>
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
