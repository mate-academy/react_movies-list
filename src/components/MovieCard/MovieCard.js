import React from 'react';
import propTypes from 'prop-types';
import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src={movie.imgUrl}
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
            {movie.title}
          </p>
        </div>
      </div>

      <div className="content">
        {movie.description}
        <br />
        <a href={movie.imdbUrl}>IMDB</a>
      </div>
    </div>
  </div>
);

export const MovieCardTypes = propTypes.shape({
  imgUrl: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string,
  imdbUrl: propTypes.string.isRequired,
  imdbId: propTypes.string.isRequired,
});

MovieCard.propTypes = {
  movie: MovieCardTypes,
};

MovieCard.defaultProps = {
  movie: propTypes.shape({
    description: '',
  }),
};
