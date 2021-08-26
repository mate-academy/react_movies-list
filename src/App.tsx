import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

interface Card {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

type Props = {
  moviesFromServer?: Card[];
};

export const App: React.FC<Props> = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList cardsOfMovies={moviesFromServer} />
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
