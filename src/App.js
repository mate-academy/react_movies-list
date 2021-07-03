import React from 'react';
import './App.scss';
import { MovieCard } from './components/MovieCard/MovieCard';
import { MoviesList } from './components/MoviesList/MoviesList';
// import moviesFromServer from './api/movies';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        {MoviesList().map(movie => (
          <div className="card" key={movie.id}>
            <MovieCard
              {...movie}
            />
          </div>
        ))}
      </div>
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
