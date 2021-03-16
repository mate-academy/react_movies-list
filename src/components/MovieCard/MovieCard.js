import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

export const MovieCard = ({ movieInfo }) => (
  <>
    {movieInfo.map(movie => (
      <div
        className="card"
        key={movie.imdbId}
      >
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
                <img src="/images/imdb-logo.jpeg" alt="test" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-8">{movie.title}</p>
            </div>
          </div>
          <div className="content">
            {movie.description}
            <br />
            <a href={movie.imdbUrl}>IMDB</a>
          </div>
        </div>
      </div>
    ))}
  </>
);

MovieCard.propTypes = {
  movieInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};
