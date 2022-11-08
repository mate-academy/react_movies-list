import React from 'react';
import Movie from '../../types/movie';

import './MovieCard.scss';

type Props = {
  movie : Movie;
};

export const MovieCard: React.FC<Props> = ({
  movie,
}) => (
  <>
    <div className="movies">
      {/* <div className="card" data-cy="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              // eslint-disable-next-line max-len
              src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
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
              <p className="title is-8">Inception</p>
            </div>
          </div>

          <div className="content">
            Follows the lives of eight very different couples in dealing with
            their love lives in various loosely interrelated tales all set
            during a frantic month before Christmas in London, England.
            <br />
            <a href="https://www.imdb.com/title/tt1375666">IMDB</a>
          </div>
        </div>
      </div>

      <div className="card" data-cy="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              // eslint-disable-next-line max-len
              src="https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg"
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
              <p className="title is-8">Love Actually</p>
            </div>
          </div>

          <div className="content">
            A thief who steals corporate secrets through the use of
            dream-sharing technology is given the inverse task of planting
            an idea into the mind of a C.E.O.
            <br />
            <a href="https://www.imdb.com/title/tt0314331">IMDB</a>
          </div>
        </div>
      </div> */}

      <div className="card" data-cy="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={movie.imgUrl}
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
              <p className="title is-8">{movie.title}</p>
            </div>
          </div>

          <div className="content">
            {movie.description}
            <br />
            <a href={movie.imdbUrl}>IMDB</a>
          </div>
        </div>
      </div>

    </div>
  </>
);
