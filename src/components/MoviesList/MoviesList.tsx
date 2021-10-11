import React from 'react';
import { MovieCard } from '../MovieCard';
import moviesFromServer from '../../api/movies.json';
import './MoviesList.scss';
import { Movie } from '../../../src/Types'

export const MoviesList: React.FC = () => (
  <> 
    <ul className="movies">
      {moviesFromServer.map((movie:Movie) => <MovieCard {...movie} />)}
    </ul>
  </>
);
