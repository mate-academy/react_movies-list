import React from 'react';

import { Movie } from '../../types/Movie';
import './MovieCard.scss';

const test = '333';

export const MovieCard: React.FC<Movie[]> = (movies = []) => {
  return (
    <div className="card" data-cy="Movie">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            data-cy="MovieImage"
            src={test}
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
              Love Actually
            </p>
          </div>
        </div>

        <div className="content">
          <p data-cy="MovieDescription">
            A thief who steals corporate secrets through the use of
            dream-sharing technology is given the inverse task of planting
            an idea into the mind of a C.E.O.
          </p>

          <a
            href="https://www.imdb.com/title/tt0314331"
            data-cy="MovieLink"
          >
            IMDB
          </a>
        </div>
      </div>
    </div>
  );
};
