import React from 'react';

import './MovieCard.scss';
import { Movie } from '../../types/Movie';

type Props = {
  movie: Movie
};

export const MovieCard: React.FC<Props> = ({ movie }) => (
  <div
    data-cy="Movie"
    className="card"
  >
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          data-cy="MovieImage"
          src={movie.imgUrl}
          alt="Film logo"
        />
      </figure>
    </div>

    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img
              src="images/imdb-logo.jpeg"
              alt="imdb"
            />
          </figure>
        </div>

        <div className="media-content">
          <p
            data-cy="MovieTitle"
            className="title is-8"
          >
            {movie.title}
          </p>
        </div>
      </div>

      <div className="content">
        <p data-cy="MovieDescription">
          {movie.description}
        </p>
        <br />
        <a
          data-cy="MovieLink"
          href={movie.imdbUrl}
        >
          IMDB
        </a>
      </div>
    </div>
  </div>
);
