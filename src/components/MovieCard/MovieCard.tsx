import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

type Props = {
  title: string;
  description?: string;
  img: string;
  imdb: string;

};

export const MovieCard: React.FC<Props> = ({
  title,
  description,
  img,
  imdb,
}) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src={img}
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
          <p className="title is-8">{title}</p>
        </div>
      </div>

      <div className="content">
        {description}
        <br />
        <a href={imdb}>IMDB</a>
      </div>
    </div>
  </div>
);

MovieCard.defaultProps = {
  description: '',
};

MovieCard.propTypes = {
  description: PropTypes.string,
};
