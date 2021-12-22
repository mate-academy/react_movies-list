import React from 'react';
import { PropTypes } from '../types/PropTypes';
import './MovieCard.scss';

type Props = Omit<PropTypes, 'imdbId'>;

export const MovieCard: React.FC<Props> = ({
  title,
  description,
  imgUrl,
  imdbUrl,
}) => (
  <>
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={imgUrl} alt="Film logo" />
      </figure>
    </div>

    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src={imdbUrl} alt="imdb" />
          </figure>
        </div>

        <div className="media-content">
          <p className="title is-8">{title}</p>
        </div>
      </div>

      <div className="content">
        {description || 'No description for this movie'}
        <br />
        <a href={imdbUrl}>IMDB</a>
      </div>
    </div>
  </>
);
