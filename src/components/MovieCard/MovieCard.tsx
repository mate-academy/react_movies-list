import React from 'react';
import PropTypes from 'prop-types';
import { MoviesServerData } from '../../types/MoviesServerData';

import './MovieCard.scss';

type MovieData
  = Pick<MoviesServerData, 'title' | 'description' | 'imgUrl' | 'imdbUrl'>;

export const MovieCard: React.FC<MovieData> = ({
  title,
  description,
  imgUrl,
  imdbUrl,
}) => (
  <div className="card">
    <div className="card__image">
      <figure className="image is-4by3">
        <img
          src={imgUrl}
          alt="Film logo"
        />
      </figure>
    </div>

    <div className="card__content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="images/imdb-logo.jpeg" alt="imdb" />
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
);

MovieCard.propTypes = {
  description: PropTypes.string,
};

MovieCard.defaultProps = {
  description: '',
};
