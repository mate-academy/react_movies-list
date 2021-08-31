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
              <div className="card" key={imdbId}>
                <MovieCard {...film} />
              </div>
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
