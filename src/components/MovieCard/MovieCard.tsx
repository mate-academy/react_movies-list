import React from 'react';
import cm from 'classnames';
import './MovieCard.scss';

interface MovieCardProps {
  title: string;
  imdbUrl: string;
  imgUrl: string;
  description: string;
  active: boolean;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  title,
  description,
  imdbUrl,
  imgUrl,
  active = true,
}) => (
  <>
    <div
      className={cm('card', {
        hightlight: active,
      })}
      data-cy="card"
    >
      <div className="card-image">
        <figure className="image is-4by3">
          <img
          // eslint-disable-next-line
            src={ imgUrl }
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
            <p className="title is-8">{ title }</p>
          </div>
        </div>

        <div className="content">
          { description }
          <br />
          <a href={`${imdbUrl}`}>IMDB</a>
        </div>
      </div>
    </div>
  </>
);
