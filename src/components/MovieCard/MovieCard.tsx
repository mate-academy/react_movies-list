import React from 'react';

import './MovieCard.scss';

type Props = {
  title: string;
  description?: string;
  imgURL: string;
  imdbURL: string;
};

export const MovieCard: React.FC<Props> = ({
  title,
  description,
  imgURL,
  imdbURL,
}) => (
  <>
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src={imgURL}
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
        <a href={imdbURL}>IMDB</a>
      </div>
    </div>
  </>
);

MovieCard.defaultProps = {
  description: 'No description',
};
