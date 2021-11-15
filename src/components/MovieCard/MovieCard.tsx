import React from 'react';

import './MovieCard.scss';

interface Movies {
  title: string,
  description?: string,
  imgUrl: string,
  imdbUrl: string,
}

type Props = {
  mov: Movies;
};

export const MovieCard: React.FC<Props> = ({ mov }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src={mov.imgUrl}
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
          <p className="title is-8">
            {mov.title}
          </p>
        </div>
      </div>

      <div className="content">
        {mov.description}
        <br />
        <a href={mov.imdbUrl}>IMDB</a>
      </div>
    </div>
  </div>
);
