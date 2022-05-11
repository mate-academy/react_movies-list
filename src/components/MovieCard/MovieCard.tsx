import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

type Props = {
  imgUrl: string;
  title: string;
  description?: string;
  imdbUrl: string;
};

export const MovieCard: React.FC<Props> = ({
  imgUrl,
  title,
  description,
  imdbUrl,
}) => (
  <div className="card">
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
            <img src="../images/imdb-logo.jpeg" alt="imdb" />
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
  imdbUrl: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

MovieCard.defaultProps = {
  description: 'What do you know about description?',
};
