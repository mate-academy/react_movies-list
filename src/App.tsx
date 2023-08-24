// Movies List

// > [React + Typescript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

// You are given movies loaded from the API and initial markup. Your task is to:

// 1. Create and export a `Movie` interface inside `./src/types/Movie.ts` (all the fields are required)
// 1. Render movies from a given `moviesFromServer` array (for the simplicity, you can do it inside the `App` and split later).
// 1. Extract a `.movies` block to a `MoviesList` component.
// 1. The `App` should pass the `moviesFromServer` to the `MoviesList` as a `movies` prop.
// 1. Extract a `.card` block to a `MovieCard` component.
// 1. The `MoviesList` should pass a `movie` to the `MovieCard`.
// 1. Keep all `data-cy` attributes to pass the tests.

// ## Instructions
// - Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
// - Use the [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
// - Open one more terminal and run tests with `npm test` to ensure your solution is correct.
// - Replace `<your_account>` with your Github username in the [DEMO LINK](https://<your_account>.github.io/react_movies-list/) and add it to the PR description.

/* eslint-disable max-len */
import React from 'react';
import { Movie } from './components/MovieCard/MovieCard';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieCard } from './components/MovieCard';
// import { Movie } from './types/Movie';

interface MovieCardProps {
  movie: Movie;
}

export const App: React.FC<MovieCardProps> = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">

        {moviesFromServer.map((movie: Movie) => (
          <div className="card" key={movie.imdbId}>
            <MovieCard movie={movie} />
          </div>
        ))}

        <div className="card" data-cy="Movie">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                data-cy="MovieImage"
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
                <p className="title is-8" data-cy="MovieTitle">
                  Inception
                </p>
              </div>
            </div>

            <div className="content">
              <p data-cy="MovieDescription">
                Follows the lives of eight very different couples in dealing with
                their love lives in various loosely interrelated tales all set
                during a frantic month before Christmas in London, England.
              </p>

              <a
                href="https://www.imdb.com/title/tt1375666"
                data-cy="MovieLink"
              >
                IMDB
              </a>
            </div>
          </div>
        </div>

        <div className="card" data-cy="Movie">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                data-cy="MovieImage"
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
                <p className="title is-8" data-cy="MovieTitle">
                  Love Actually
                </p>
              </div>
            </div>

            <div className="content">
              <p data-cy="MovieDescription">
                A thief who steals corporate secrets through the use of
                dream-sharing technology is given the inverse task of planting
                an idea into the mind of a C.E.O.
              </p>

              <a
                href="https://www.imdb.com/title/tt0314331"
                data-cy="MovieLink"
              >
                IMDB
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
