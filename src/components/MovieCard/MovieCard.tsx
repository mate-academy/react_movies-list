import React from 'react';

import './MovieCard.scss';
import { Movie } from '../MoviesList/Movie';

type Props = Pick<Movie,
'title' |
'description' |
'imgUrl' |
'imdbUrl' |
'imdbId'>;

export const MovieCard: React.FC<Props> = ({
  title, description, imgUrl, imdbUrl, imdbId,
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

        <div className="media-content">
          <p className="title is-8">{title}</p>
        </div>
      </div>

      <div className="content">
        {description}
        <br />
        <a href={imdbUrl}>{imdbId}</a>
      </div>
    </div>
  </>
);
