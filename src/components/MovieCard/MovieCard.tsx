import React from 'react';

import './MovieCard.scss';

type Props = {
  title: string,
  description?: string,
  imageLink: string,
  imbdLink: string,
};

export const MovieCard: React.FC<Props> = (
  {
    title,
    description = '',
    imageLink,
    imbdLink,
  },
) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src={imageLink}
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
        <a href={imbdLink}>IMDB</a>
      </div>
    </div>
  </div>
);
