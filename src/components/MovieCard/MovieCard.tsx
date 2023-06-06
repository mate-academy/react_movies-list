import React from 'react';

import './MovieCard.scss';

type Props = {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string
};

export const MovieCard: React.FC<Props> = ({
  title,
  description,
  imgUrl,
  imdbUrl,
}) => (
  <div
    data-cy="Movie"
    className="card"
  >
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          data-cy="MovieImage"
          src={imgUrl}
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
            {title}
          </p>
        </div>
      </div>

      <div className="content">
        <p data-cy="MovieDescription">
          {description}
        </p>
        <br />
        <a
          data-cy="MovieLink"
          href={imdbUrl}
        >
          IMDB
        </a>
      </div>
    </div>
  </div>
);
