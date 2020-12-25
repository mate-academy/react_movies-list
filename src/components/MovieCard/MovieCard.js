import React from 'react';
import './MovieCard.scss';

export const MovieCard = movie => (
  <>
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={movie.movie[0].imgUrl}
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
            <p className="title is-8">{ movie.movie[0].title }</p>
          </div>
        </div>

        <div className="content">
          { movie.movie[0].description }
          <br />
          <a href="https://www.imdb.com/title/tt1375666">IMDB</a>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={movie.movie[1].imgUrl}
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
            <p className="title is-8">{ movie.movie[1].title }</p>
          </div>
        </div>

        <div className="content">
          { movie.movie[1].description }
          <br />
          <a href="https://www.imdb.com/title/tt0314331">IMDB</a>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={movie.movie[2].imgUrl}
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
            <p className="title is-8">{ movie.movie[2].title }</p>
          </div>
        </div>

        <div className="content">
          { movie.movie[2].description }
          <br />
          <a href="https://www.imdb.com/title/tt0319262">IMDB</a>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={movie.movie[3].imgUrl}
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
            <p className="title is-8">{ movie.movie[3].title }</p>
          </div>
        </div>

        <div className="content">
          { movie.movie[3].description }
          <br />
          <a href="https://www.imdb.com/title/tt3748528">IMDB</a>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={movie.movie[4].imgUrl}
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
            <p className="title is-8">{ movie.movie[4].title }</p>
          </div>
        </div>

        <div className="content">
          { movie.movie[4].description }
          <br />
          <a href="https://www.imdb.com/title/tt0457939">IMDB</a>
        </div>
      </div>
    </div>
  </>
);
