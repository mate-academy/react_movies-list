import React from 'react';
import './MovieCard.scss';
import PropTypes from 'prop-types';

export const MovieCard = ({ movieCard }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src={movieCard.imgUrl}
          alt="Film logo"
        />
      </figure>
    </div>

    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="/images/imdb-logo.jpeg" alt="imdb" />
          </figure>
        </div>

        <div className="media-content">
          <p className="title is-8">{movieCard.title}</p>
        </div>
      </div>

      <div className="content">
        {movieCard.description}
        <br />
        <a href={movieCard.imdbUrl}>IMDB</a>
      </div>
    </div>
  </div>
);

MovieCard.propTypes = {
  movieCard: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    imdbUrl: PropTypes.string.isRequired,
    imdbId: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};
