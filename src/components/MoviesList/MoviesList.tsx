import React from 'react';
import './MoviesList.scss';

// import { type } from 'os';

import { MovieCard } from '../MovieCard';

interface Movie {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
}

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(({
        title,
        description,
        imgUrl,
        imdbUrl,
        imdbId,
      }) => (
        <div className="card" key={imdbId}>
          <MovieCard
            title={title}
            description={description}
            imdbUrl={imdbUrl}
            imgUrl={imgUrl}
          />
        </div>
      ))}
    </div>
  </>
);
