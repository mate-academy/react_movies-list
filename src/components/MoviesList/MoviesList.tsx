import React from 'react';
import './MoviesList.scss';
import { Movies } from '../../appTypeDefs';

type MoviesProps = {
  movies: Movies[];
};

export const MoviesList: React.FC<MoviesProps> = (
  { movies = [] },
) => {
  return (
    <>
      {movies.map((
        {
          title,
          imdbId,
          imdbUrl,
          imgUrl,
          description,
        },
      ) => (
        <div className="card" data-cy="card" key={imdbId}>
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
      ))}
    </>
  );
};
