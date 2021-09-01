// import React from 'react';
import './MoviesList.scss';
import { Movie } from '../Types/Movie';
import { MovieCard } from '../MovieCard/MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <div className="movies">
      {
        movies.map(props => (
          <div className="card" key={props.imdbId}>
            <MovieCard movie={props} />
          </div>
        ))
      }
    </div>
  </>
);
