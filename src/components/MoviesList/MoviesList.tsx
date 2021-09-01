import React from 'react';
import { MovieCard } from '../MovieCard';

interface Film {
  [key: string]: string;
}

type Props = {
  films: Film[];
};

export const MoviesList: React.FC<Props> = ({ films }: Props) => (
  <>
    <div className="page">
      <div className="page-content">
        <div className="movies">
          {films.map(film => {
            const { imdbId } = film;

            return (
              <MovieCard key={imdbId} {...film} />
            );
          })}

        </div>
      </div>

      <div className="sidebar">
        Sidebar will be here
      </div>
    </div>

  </>
);
