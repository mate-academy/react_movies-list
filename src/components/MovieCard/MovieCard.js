import React from 'react';
import './MovieCard.scss';
import PropTypes from 'prop-types';

export const MovieCard = ({ movie }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={movie.imgUrl} alt="Film logo" />
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
          <p className="title is-8">{movie.title}</p>
        </div>
      </div>

      <div className="content">
        {movie.description || 'No description'}
        <br />
        <a href={`https://www.imdb.com/title/${movie.imdbId}`}>IMDB</a>
      </div>
    </div>
  </div>
);

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    imdbUrl: PropTypes.string.isRequired,
    imdbId: PropTypes.string.isRequired,
  }),
};
