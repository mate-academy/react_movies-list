import React from 'react';
import propTypes from 'prop-types';
import './MovieCard.scss';

export const MovieCard = ({ Movie }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          // eslint-disable-next-line max-len
          src={Movie.imgUrl}
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
          <p className="title is-8">{Movie.title}</p>
        </div>
      </div>

      <div className="content">
        {Movie.description}
        <br />
        <a href={Movie.imdbUrl}>IMDB</a>
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
  Movie: MovieCardTypes,
};

MovieCard.defaultProps = {
  Movie: propTypes.shape({
    description: '',
  }),
};
