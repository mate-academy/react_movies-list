import React from 'react';
import { MovieCard } from '../MovieCard';

import { Film } from '../../types/Film';

type Props = {
  films: Film[];
};

export const MoviesList: React.FC<Props> = (props) => {
  const { films } = props;

  return (
    <div className="page">
      <div className="page-content">
        <div className="movies">
          {films.map(film => {
            const { imdbId } = film;

            return (
              <MovieCard key={imdbId} film={film} />
            );
          })}

        </div>
      </div>

      <div className="sidebar">
        Sidebar will be here
      </div>
    </div>
  );
};
