import React from 'react';

import './MovieCard.scss';
import { Movie } from '../../types/Movie';

type Props = {
  movie: Movie;
};

export const MovieCard: React.FC<Props> = ({ movie }) => {
  const {
    imgUrl,
    title,
    description,
    imdbUrl,
  } = movie;

  return (
    <div className="movie-card" data-cy="Movie">
      <div className="movie-card__image">
        <figure className="image is-4by3">
          <img
            data-cy="MovieImage"
            src={imgUrl}
            alt="Film logo"
          />
        </figure>
      </div>

      <div className="movie-card__content">
        <div className="movie-card__media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="images/imdb-logo.jpeg" alt="imdb" />
            </figure>
          </div>

          <div className="media-content">
            <p className="title is-8" data-cy="MovieTitle">
              {title}
            </p>
          </div>
        </div>

        <div className="movie-card__content">
          <p data-cy="MovieDescription">
            {description}
          </p>

          <a
            href={imdbUrl}
            data-cy="MovieLink"
          >
            IMDB
          </a>
        </div>
      </div>
    </div>
  );
};
