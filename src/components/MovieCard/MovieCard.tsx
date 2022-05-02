import React from 'react';
import './MovieCard.scss';
import { MovieType } from '.';

type Props = {
  movieData: MovieType
};

export const MovieCard: React.FC<Props> = ({ movieData }) => (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={movieData.imgUrl}
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
            <p className="title is-8">{movieData.title}</p>
          </div>
        </div>

        <div className="content">
          {movieData.description}
          <br />
          <a href={movieData.imdbUrl}>IMDB</a>
        </div>
      </div>
    </div>
);
