import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  moviesList: Movie[];
};

export const MoviesList: React.FC<Props> = ({ moviesList }) => (
  <>
    <div className="movies">
      {moviesList.map(movie => (
        <div key={movie.imdbId} className="card" data-cy="Movie">
          <MovieCard
            title={movie.title}
            description={movie.description}
            imageSource={movie.imgUrl}
            imageBSource={movie.imdbUrl}
          />
        </div>
      ))}
    </div>
  </>
);
