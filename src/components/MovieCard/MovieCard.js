import React from 'react';
import {
  MovieCardShape,
  MovieCardDefaultProps,
} from '../Shapes/MovieCardShape';

import './MovieCard.scss';

export const MovieCard = ({ title, description, imgUrl, imdbUrl, imdbId }) => (
  <>
    <li className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={imgUrl}
            alt="Film logo"
          />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="./images/imdb-logo.jpeg" alt="imdb" />
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
    </li>
  </>
);

MovieCard.propTypes = MovieCardShape;
MovieCard.defaultProps = MovieCardDefaultProps;
