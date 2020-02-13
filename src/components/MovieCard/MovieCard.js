import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

export const MovieCard = ({ card }) => (
  <>
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={card.imgUrl}
            alt="Film logo"
          />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={card.imdbUrl} alt="imdb" />
            </figure>
          </div>

          <div className="media-content">
            <p className="title is-8">{card.title}</p>
          </div>
        </div>

        <div className="content">
          {card.description}
          <br />

          <a href={`https://www.imdb.com/title/${card.imdbId}`}>IMDB</a>
        </div>
      </div>
    </div>
  </>
);

MovieCard.propTypes = {
  card: PropTypes.shape({
    imgUrl: PropTypes.string,
    imdbUrl: PropTypes.string,
    imdbId: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
