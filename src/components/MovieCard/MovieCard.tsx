import React from 'react';

import './MovieCard.scss';

type SingleMovie = {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
};

export const MovieCard: React.FC<SingleMovie> = (
  {
    title,
    description,
    imgUrl,
    imdbUrl,
  },
) => (
  <>
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={imgUrl} alt="film logo" />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="images/imdb-logo.jpeg" alt="imdb" />
          </figure>
        </div>
      </div>
      <div className="media-content">
        <p className="title is-8">{title}</p>
      </div>
      <div className="content">
        {description}
        <br />
        <a href={imdbUrl}>IMDB</a>
      </div>
    </div>
  </>
);
