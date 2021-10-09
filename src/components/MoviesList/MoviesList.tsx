import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies?: Movie[],
}

export const MoviesList: React.FC<Props> = (props) => {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard 
          key={movie.imdbId}
          title={movie.title}
          description={movie.description}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
        />
      ))}
    </div>
  )
};

MoviesList.defaultProps = {
  movies: [],
};
