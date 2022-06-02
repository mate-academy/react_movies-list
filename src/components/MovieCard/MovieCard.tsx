import React from 'react';
// import { MoviesList } from '../MoviesList';
// import { Movies } from '../../appTypeDefs';
import './MovieCard.scss';

interface MovieCardProps {
  title: string;
  imdbUrl: string;
  imgUrl: string;
  description: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  title,
  description,
  imdbUrl,
  imgUrl,
}) => {
  return (
    <>
      <div className="card" data-cy="card">
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
};
