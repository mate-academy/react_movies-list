import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

export const MovieCard = ({ film }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          // eslint-disable-next-line max-len
          src={film.imgUrl}
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
          <p className="title is-8">{film.title}</p>
        </div>
      </div>

      <div className="content">
        {film.description}
        <br />
        <a href={film.imdbUrl}>IMDB</a>
      </div>
    </div>
  </div>
);

MovieCard.defaultProps = { film: PropTypes.shape({
  description: '',
}) };

MovieCard.propTypes = { film: PropTypes.shape({
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imdbUrl: PropTypes.string.isRequired,
}) };
