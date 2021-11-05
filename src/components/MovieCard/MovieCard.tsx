import React from 'react';
import { Movie } from '../../types/Movie';
import './MovieCard.scss';

interface Props {
  movies: Movie,
}

export const MovieCard: React.FC<Props> = ({ movies }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img className="image-movie"
          src={movies.imgUrl}
          alt="Film logo"
        />
      </figure>
    </div>

    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img
              className="image-movie"
              src="images/imdb-logo.jpeg"
              alt="imdb"
            />
          </figure>
        </div>

        <div className="media-content">
          <p className="title is-8">{movies.title}</p>
        </div>
      </div>

      <div className="content">
        {movies.description}
        <br />
        <a href={movies.imdbUrl}>IMDB</a>
      </div>
    </div>
  </div>
);
