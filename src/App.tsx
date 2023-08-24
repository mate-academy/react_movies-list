import React from 'react';
import './App.scss';
import { MovieCard } from './components/MovieCard';
import moviesFromServer from './api/movies.json';
import { Movie } from './types/Movie';

interface MoviesListProps {
  movies: Movie[];
}

const MoviesList: React.FC<MoviesListProps> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie: Movie) => (
      <div className="card" key={movie.imdbId}>
        <MovieCard
          title={movie.title}
          description={movie.description}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
          imdbId={movie.imdbId}
        />
      </div>
    ))}
  </div>
);

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServer} />
    </div>
    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
