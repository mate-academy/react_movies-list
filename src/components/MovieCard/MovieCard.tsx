import React from 'react';
import { Movie } from '../../types/Movie';

import './MovieCard.scss';

type Props = Omit<Movie, 'imdbId'>;

export const MovieCard: React.FC<Props> = ({
  title,
  description = 'No description',
  imgUrl,
  imdbUrl,
}) => (
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

        <h1 className="media-content">
          <p className="title is-8">{title}</p>
        </h1>
      </div>

      <p className="content">
        {description}
        <br />
        <a href={imdbUrl}>IMDB</a>
      </p>
    </div>
  </>
);
