import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList: React.FC = () => (
  <>
    <div className="page">
      <div className="page-content">
        <div className="movies">
          <MovieCard />
        </div>
      </div>

      <div className="sidebar">
        Sidebar will be here
      </div>
    </div>
  </>
);
