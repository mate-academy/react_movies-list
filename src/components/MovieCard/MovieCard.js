import React from 'react';
import './MovieCard.scss';
import { ShapeMovieCard } from '../Shapes';

const MovieCard = ({ ...item }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          alt="Film logo"
          src={item.imgUrl}
        />
      </figure>
    </div>

    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="../images/imdb-logo.jpeg" alt="imdb" />
          </figure>
        </div>

        <div className="media-content">
          <p className="title is-8">{item.title}</p>
        </div>
      </div>

      <div className="content">
        {item.description}
        <br />
        <a href={item.imdbUrl}>IMDB</a>
      </div>
    </div>
  </div>
);

MovieCard.propTypes = ShapeMovieCard.isRequired;

export default MovieCard;
