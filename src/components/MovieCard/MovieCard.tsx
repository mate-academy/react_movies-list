import { FC } from 'react';
import ImdbLogo from '../../images/imdb-logo.jpeg';
import { Movie } from '../../types/Movie';
import './MovieCard.scss';

type Props = Omit<Movie, 'imdbId'>;

export const MovieCard: FC<Props> = ({
  title,
  description,
  imgUrl,
  imdbUrl,
}) => (
  <div
    className="card"
    data-cy="Movie"
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
            <img src={ImdbLogo} alt="imdb" />
          </figure>
        </div>

        <div className="media-content">
          <p className="title is-8" data-cy="MovieTitle">
            {title}
          </p>
        </div>
      </div>

      <div className="content">
        <p data-cy="MovieDescription">
          {description}
        </p>

        <a
          href={imdbUrl}
          data-cy="MovieLink"
          target="_blank"
          rel="noreferrer"
        >
          IMDB
        </a>
      </div>
    </div>
  </div>
);
