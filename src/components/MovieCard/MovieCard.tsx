import React from 'react';

import './MovieCard.scss';
import { Movie } from '../../types/movie';

type Props = {
  movieInfo: Movie;
};

export const MovieCard: React.FC<Props> = ({ movieInfo }) => (
  <>
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src={movieInfo.imgUrl}
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
          <p className="title is-8">{movieInfo.title}</p>
        </div>
      </div>

      <div className="content">
        {movieInfo.description}
        <br />
        <a href={movieInfo.imdbUrl}>IMDB</a>
      </div>
    </div>
  </>
);
