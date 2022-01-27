import React from 'react';
import { Card } from '../../types/Card';
import './MovieCard.scss';

type Props = {
  card: Card;
};

export const MovieCard: React.FC<Props> = ({ card }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          className="card-img"
          src={card.imgUrl}
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
          <p className="title is-8">{card.title}</p>
        </div>
      </div>

      <div className="content">
        {card.description}
        <br />
        <a href={card.imdbUrl}>IMDB</a>
      </div>
    </div>
  </div>
);
