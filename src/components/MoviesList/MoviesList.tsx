import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface MovieCards {
  title: string;
  description: string;
  imdbUrl: string;
  imgUrl: string;
}

type Props = {
  movies: MovieCards[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <ul>
    <div className="movies">
      {movies.map(({
        title, description, imdbUrl, imgUrl,
      }) => (
        <li key={title}>
          <MovieCard
            title={title}
            description={description}
            imdbUrl={imdbUrl}
            imgUrl={imgUrl}
          />
        </li>
      ))}
    </div>
  </ul>
);
