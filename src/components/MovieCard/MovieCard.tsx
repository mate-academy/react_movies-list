import React from 'react';

import './MovieCard.scss';

import { Movie } from '../../types/Movies';

type Movies = {
  currentMovie: Movie,
};

export const MovieCard: React.FC<Movies> = ({ currentMovie }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src={currentMovie.imgUrl}
          alt="Film logo"
        />
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
          <p className="title is-8">{currentMovie.title}</p>
        </div>
      </div>

      <div className="content">
        {currentMovie.description}
        <br />
        <a href={currentMovie.imdbUrl}>IMDB</a>
      </div>
    </div>
  </div>
);
