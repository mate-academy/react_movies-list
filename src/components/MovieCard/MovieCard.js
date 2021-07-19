import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

export const MovieCard = ({ item }) => (
  <>
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            // eslint-disable-next-line max-len
            src={item.imgUrl}
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
            <p className="title is-8">{item.title}</p>
          </div>
        </div>

        <div className="content">
          {item.description}
          <br />
          <a href={item.imdbUrl}>IMDB</a>
        </div>
      </div>
    </div>
  </>
);

export const typesOfMovieCard = PropTypes.shape({
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imdbUrl: PropTypes.string.isRequired,
  imdbId: PropTypes.string.isRequired,
});

MovieCard.defaultProps = { item: PropTypes.shape({
  description: '',
}) };

MovieCard.propTypes = { item: typesOfMovieCard };
