import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';
import { Movie } from '../MovieCard/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  // <>Put the list here</>
  <>
    <div className="movies">
      {movies.map(film => (
        <div className="movies__movie">
          <MovieCard
            title={film.title}
            description={film.description}
            imgUrl={film.imgUrl}
            imdbUrl={film.imdbUrl}
          />
        </div>
      ))}
    </div>
  </>
);
