import React from 'react';
import './MovieCard.scss';
import { shapeOfCard } from '../../cardShape';

export const MovieCard = ({ movieItem }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          // eslint-disable-next-line max-len
          src={movieItem.imgUrl}
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
          <p className="title is-8">{ movieItem.title }</p>
        </div>
      </div>

      <div className="content">
        {movieItem.description || 'No description'}
        <br />
        <a href={movieItem.imdbUrl}>IMDB</a>
      </div>
    </div>
  </div>
);

MovieCard.propTypes = {
  movieItem: shapeOfCard.isRequired,
};
