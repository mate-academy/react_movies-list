import React from 'react';
import { Film } from '../../react-app-env';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Film[];
};

const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <ul className="movies">
      {movies.map(film => (
        <li className="card" key={film.imdbId}>
          <MovieCard
            title={film.title}
            description={film.description}
            imdbUrl={film.imdbUrl}
            imgUrl={film.imgUrl}
          />
        </li>
      ))}
    </ul>
  </>
);

export default MoviesList;
