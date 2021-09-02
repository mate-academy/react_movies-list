import React from 'react';
import './MovieCard.scss';

type Props = {
  movieCard: Movie,
};

export const MovieCard: React.FC<Props> = (props) => {
  const { movieCard } = props;

  return (
    <div className="movie-card">
      <div className="movie-card-image">
        <figure className="card-image">
          <img
            src={movieCard.imgUrl}
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
            <p className="title is-8">{movieCard.title}</p>
          </div>
        </div>
        <div className="content">
          {movieCard.description}
          <br />
          <a href="https://www.imdb.com/title/tt1375666">IMDB</a>
        </div>
      </div>
    </div>
  );
};
