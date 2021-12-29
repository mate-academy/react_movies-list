import React from 'react';
import { MovieCard } from '../MovieCard';

import './MoviesList.scss';

// interface ValidMovies {
//   title: string;
//   description?: string;
//   imgUrl: string;
//   imdbUrl: string;
//   imdbId: string;
// }

export const MoviesList: React.FC<any> = ({ movies }) => (
  <>
    <ul className="movies">
      {movies.map((movie: any) => (
        <li className="card" key={movie.id}>
          <MovieCard {...movie} />
        </li>
      ))}
    </ul>
  </>
);
