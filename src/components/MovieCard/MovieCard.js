import React from 'react';
import './MovieCard.scss';
import PropTypes from 'prop-types';

export const MovieCard = (
  { movieLogoSrc, movieName, aboutMovie, linkIMDB },
) => (
  <>
    <div className="card-image">
      <figure className="image is-4by3">
        <img
        // eslint-disable-next-line max-len
          src={movieLogoSrc}
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
          <p className="title is-8">{movieName}</p>
        </div>
      </div>

      <div className="content">
        {aboutMovie}
        <br />
        <a href={linkIMDB}>IMDB</a>
      </div>
    </div>
  </>
);

MovieCard.propTypes = {
  movieLogoSrc: PropTypes.string.isRequired,
  movieName: PropTypes.string.isRequired,
  aboutMovie: PropTypes.string,
  linkIMDB: PropTypes.string.isRequired,
};

MovieCard.defaultProps = {
  aboutMovie: 'description movie none :(',
};
