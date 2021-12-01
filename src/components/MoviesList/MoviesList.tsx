import React from 'react';
import { Movie } from '../../types/Movies';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  listOfMovies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ listOfMovies }) => (
  <>
    <div className="movies">
      {listOfMovies.map(({
        title, description, imgUrl, imdbUrl, imdbId,
      }) => {
        return (
          <MovieCard
            key={imdbId}
            imgUrl={imgUrl}
            title={title}
            description={description}
            imdbUrl={imdbUrl}
          />
        );
      })}
    </div>
  </>
);
