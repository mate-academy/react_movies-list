import React from 'react';

import './MovieCard.scss';

type MovieProps = {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
};

const MovieImage: React.FC<{ imgAdr: string }> = ({ imgAdr }) => (
  <div className="card-image">
    <figure className="image is-4by3">
      <img
        data-cy="MovieImage"
        src={imgAdr}
        alt="Film logo"
      />
    </figure>
  </div>
);

const MovieTitle: React.FC<{ title: string }> = ({ title }) => (
  <div className="media-content">
    <p className="title is-8" data-cy="MovieTitle">
      {title}
    </p>
  </div>
);

const MovieDescription: React.FC<{ description: string }>
  = ({ description }) => (
    <p data-cy="MovieDescription">
      {description}
    </p>
  );

const MovieLink: React.FC<{ link: string }> = ({ link }) => (
  <a
    href={link}
  >
    IMDB
  </a>
);

export const MovieCard: React.FC<MovieProps> = ({
  title,
  description,
  imgUrl,
  imdbUrl,
}) => (
  <div className="card" data-cy="Movie">

    <MovieImage imgAdr={imgUrl} />

    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="images/imdb-logo.jpeg" alt="imdb" />
          </figure>
        </div>

        <MovieTitle title={title} />

      </div>

      <div className="content">
        <MovieDescription description={description} />

        <MovieLink link={imdbUrl} />
      </div>
    </div>
  </div>
);
