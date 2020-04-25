import React from 'react';
import './MovieCard.scss';
import PropType from 'prop-types';

export const MovieCard = ({ title, description, imgUrl, imbdUrl }) => (
  <>
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
              <img src="./images/imdb-logo.jpeg" alt="imdb" />
            </figure>
          </div>

          <div className="media-content">
            <p className="title is-8">{title}</p>
          </div>
        </div>

        <div className="content">
          {description}
          <br />
          <a href={imbdUrl}>IMDB</a>
        </div>
      </div>
    </div>
  </>
);

MovieCard.propTypes = {
  title: PropType.string.isRequired,
  description: PropType.string.isRequired,
  imgUrl: PropType.string.isRequired,
  imbdUrl: PropType.string.isRequired,
};
