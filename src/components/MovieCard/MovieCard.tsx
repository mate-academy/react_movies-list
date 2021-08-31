import React from 'react';

import './MovieCard.scss';

type Props = {
  title: string,
  description?: string,
  imgUrl: string,
  imdbUrl: string,
};

export const MovieCard: React.FC<Props> = (props) => (
  <>
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={props.imgUrl}
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
            <p className="title is-8">{props.title}</p>
          </div>
        </div>

        <div className="content">
          {props.description ? props.description : ''}
          <br />
          <a href={props.imdbUrl}>IMDB</a>
        </div>
      </div>
    </div>
  </>
);

MovieCard.defaultProps = {
  description: '',
};
