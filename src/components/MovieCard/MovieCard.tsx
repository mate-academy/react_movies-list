import React from 'react';
import { Movie } from '../../types/Movie';
import './MovieCard.scss';

type Props = {
  movie: Movie
};

export const MovieCard: React.FC<Props> = ({ movie }) => {
  const {
    title,
    description,
    imgUrl,
    imdbId,
  } = movie;

  return (
    <div className="card" data-cy="Movie" key={imdbId}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            data-cy="MovieImage"
            src={imgUrl}
            alt="movie poster"
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
            <p className="title is-8" data-cy="MovieTitle">
              {title}
            </p>
          </div>
        </div>

        <div className="content">
          <p data-cy="MovieDescription">
            {description}
          </p>

          <a
            href={imgUrl}
            data-cy="MovieLink"
          >
            IMDB
          </a>
        </div>
      </div>
    </div>
  );
};
