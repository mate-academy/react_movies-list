import React from 'react';

import './MovieCard.scss';
import Movie from '../../types/Movie';

interface Props {
  card: Movie;
}

const MovieCard: React.FC<Props> = ({ card }) => (
  <>
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={card.imgUrl} alt="movie" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="../images/imdb-logo.jpeg" alt="IMDB" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-8">{card.title}</p>
          </div>
        </div>
        <div className="content">
          <p>{card.description}</p>
          <a href={card.imdbUrl} target="_blank" rel="noreferrer">IMDB</a>
        </div>
      </div>
    </div>
  </>
);

export default MovieCard;
