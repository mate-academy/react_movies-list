import React from 'react';
import { Movie } from '../../types/Movie';

import './MovieCard.scss';

const movie = {
  title: 'Movie title',
  description: 'Some description',
  // eslint-disable-next-line max-len
  imgUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
  imdbUrl: 'https://www.imdb.com/title/tt1375666',
  imdbId: 'tt1375666',
};

export const MovieCard: React.FC<Movie> = ({
  title,
  description,
  imgUrl,
  imdbUrl,
}) => (
  <div className="card" data-cy="Movie">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          data-cy="MovieImage"
          src={imgUrl || movie.imgUrl}
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
          <p className="title is-8" data-cy="MovieTitle">
            {title || movie.title}
          </p>
        </div>
      </div>

      <div className="content">
        <p data-cy="MovieDescription">
          {description || movie.description}
        </p>

        <a
          href={imdbUrl || movie.imdbUrl}
          data-cy="MovieLink"
        >
          IMDB
        </a>
      </div>
    </div>
  </div>
);
