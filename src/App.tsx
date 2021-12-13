import React, { useState } from 'react';

import './App.scss';

import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = moviesFromServer.filter(movie => {
    const queryInLower = query.toLowerCase();
    const titleInLower = movie.title.toLowerCase();
    const decriptionInLower = movie.description.toLowerCase();

    return (
      titleInLower.includes(queryInLower) || decriptionInLower.includes(queryInLower)
    );
  });

  return (
    <div className="page">
      <div className="page-content">
        <div className="searchMovieBlock">
          <h5 className="subtitle is-5">What do you want to watch?</h5>
          <input
            type="text"
            className="input"
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
        </div>
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar will be here
      </div>
    </div>
  );
};
