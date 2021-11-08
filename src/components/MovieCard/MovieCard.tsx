import React from 'react';
import { Movie } from '../../types/typedef';

import './MovieCard.scss';

export const MovieCard: React.FC<Movie> = ({
  title,
  description = '',
  imgUrl,
  imdbUrl,
  imdbId,
}) => (
  <>
    <div className="card" key={imdbId}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            className="logo"
            src={imgUrl}
            alt="Film logo"
          />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                className="logo"
                src="images/imdb-logo.jpeg"
                alt="imdb"
              />
            </figure>
          </div>

          <div className="media-content">
            <p className="title is-8">{title}</p>
          </div>
        </div>

        <div className="content">
          {description}
          <br />
          <a href={imdbUrl}>IMDB</a>
        </div>
      </div>
    </div>
  </>
);
