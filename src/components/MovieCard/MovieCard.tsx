import React from 'react';
import { Movie } from '../../types/Movie';
import './MovieCard.scss';

export const MovieCard: React.FC<Movie> = (cardMovie) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src={cardMovie.imgUrl}
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
          <p className="title is-8">
            {cardMovie.title}
          </p>
        </div>
      </div>
      <div className="content">
        {cardMovie.description}
        <br />
        <a href={cardMovie.imdbUrl}>IMDB</a>
      </div>
    </div>
  </div>
);
