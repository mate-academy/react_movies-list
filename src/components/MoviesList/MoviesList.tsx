import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <div className="movies">
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbId}>
            <MovieCard
              title={movie.title}
              description={movie.description}
              imgUrl={movie.imgUrl}
              imdbUrl={movie.imdbUrl}
            />
          </li>
        ))}
      </ul>
    </div>
  </>
);
