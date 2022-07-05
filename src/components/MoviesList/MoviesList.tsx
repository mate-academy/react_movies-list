import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.scss';

export interface Films {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string
}

type Props = {
  movies: Films[];
};

const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <ul className="movies">
      {movies.map(film => (
        <li className="card" key={film.imdbId}>
          <MovieCard
            title={film.title}
            description={film.description}
            url={film.imdbUrl}
            imgUrl={film.imgUrl}
          />
        </li>
      ))}
    </ul>
  </>
);

export default MoviesList;
