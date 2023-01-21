import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  filmСollection: Movie[];
};

export const MoviesList: React.FC<Props> = ({ filmСollection }) => (
  <>
    <div className="movies">
      <>
        {filmСollection.map(film => (
          <MovieCard {...film} key={film.imdbId} />
        ))}
      </>
    </div>
  </>
);
