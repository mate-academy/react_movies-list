import React from 'react';
import './MoviesList.scss';
import PropsTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropsTypes.arrayOf(
    PropsTypes.object({
      title: PropsTypes.string.isRequired,
      description: PropsTypes.string,
      imgUrl: PropsTypes.string.isRequired,
      imdbUrl: PropsTypes.string.isRequired,
      imdbId: PropsTypes.string.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  movies: [],
};
