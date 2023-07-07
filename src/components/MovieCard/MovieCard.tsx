import React from 'react';
import { Movie } from '../../types/Movie';
import './MovieCard.scss';

type Props = {
  movie: Movie;
};

const urlImage = 'https://m.media-amazon.com/images/'
  + 'M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg';

export const MovieCard: React.FC<Props> = (
  {
    movie: {
      title,
      description,
      imgUrl,
      imdbUrl,
    },
  },
) => (
  <>
    <div className="card" data-cy="Movie">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            data-cy="MovieImage"
            src={imgUrl || urlImage}
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
              {title || 'Movie title'}
            </p>
          </div>
        </div>

        <div className="content">
          <p data-cy="MovieDescription">
            {description || 'Movie description'}
          </p>

          <a
            href={imdbUrl || 'https://www.imdb.com/title/tt1375666'}
            data-cy="MovieLink"
          >
            IMDB
          </a>
        </div>
      </div>
    </div>
  </>
);
