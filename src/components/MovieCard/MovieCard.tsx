/* eslint-disable max-len */
import React from 'react';
import { CardImg } from './CardComponent/CardImg';
import { Content } from './CardComponent/Content';
import { Media } from './CardComponent/Media';

import './MovieCard.scss';

type Props = {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
};

export const MovieCard: React.FC<Props> = ({
  title,
  description,
  imgUrl,
  imdbUrl,
}) => (
  <>
    <CardImg imgUrl={imgUrl} />

    {/* <div className="card-image">
      <figure className="image is-4by3">
        <img
          data-cy="MovieImage"
          src={imgUrl}
          alt="Film logo"
        />
      </figure>
    </div> */}

    <div className="card-content">
      <Media title={title} />
      {/* <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="images/imdb-logo.jpeg" alt="imdb" />
          </figure>
        </div>

        <div className="media-content">
          <p className="title is-8" data-cy="MovieTitle">
            {title}
          </p>
        </div>
      </div> */}
      <Content
        description={description}
        imdbUrl={imdbUrl}
      />
      {/* <div className="content">
        <p data-cy="MovieDescription">
          {description}
        </p>

        <a
          href={imdbUrl}
          data-cy="MovieLink"
        >
          IMDB
        </a>
      </div> */}
    </div>
  </>
);
