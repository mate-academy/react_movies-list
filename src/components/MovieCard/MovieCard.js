import React from 'react';
import './MovieCard.scss';
import { MovieCardShape } from '../../shapes/MovieCardShape';

export const MovieCard = props => (
  <>
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={props.movie.imgUrl}
            alt="Film logo"
          />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="/images/imdb-logo.jpeg" alt="imdb" />
            </figure>
          </div>

          <div className="media-content">
            <p className="title is-8">
              {props.movie.title}
            </p>
          </div>
        </div>

        <div className="content">
          {props.movie.description}
          <br />
          <a href={props.movie.imdbUrl}>IMDB</a>
        </div>
      </div>
    </div>
  </>
);

MovieCard.propTypes = {
  movie: MovieCardShape,
};

MovieCard.defaultProps = {
  movie: {},
};
