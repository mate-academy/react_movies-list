import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

interface Movie {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <>
    <div className="page">
      <div className="page-content">
        <div className="movies">
          {movies.map(movie => (
            <div className="card" key={movie.imdbId}>
              <MovieCard {...movie} />
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar">
        Sidebar will be here
      </div>
    </div>
  </>
);
