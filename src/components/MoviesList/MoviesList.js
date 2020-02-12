import React from 'react';
import './MoviesList.scss';
import propTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ listOfMovies }) => (
  <>
    <div className="movies">
      {listOfMovies.map(movie => (
        <MovieCard
          {...movie}
          key={movie.imdbId}
        />
      ))}
    </div>
  </>
);

MoviesList.propTypes = {
  listOfMovies: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      description: propTypes.string,
      imgUrl: propTypes.string.isRequired,
      imdbUrl: propTypes.string.isRequired,
      imdbId: propTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MoviesList;
