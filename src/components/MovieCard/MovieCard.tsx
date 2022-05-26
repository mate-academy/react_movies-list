import React from 'react';
import { Card } from '../../react-app-env';

import './MovieCard.scss';

type Props = {
  moviesCardAPI: Card,
};

export const MovieCard: React.FC<Props> = ({ moviesCardAPI }) => {
  const {
    title,
    description,
    imbdUrl,
    imgUrl,
  } = moviesCardAPI;

  return (
    <>
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
              <img src="images/imdb-logo.jpeg" alt="imdb" />
            </figure>
          </div>

          <div className="media-content">
            <p className="title is-8">
              {title}
            </p>
          </div>
        </div>

        <div className="content">
          {description}
          <br />
          <a href={imbdUrl}>
            IMDB
          </a>
        </div>
      </div>
    </>
  );
};
