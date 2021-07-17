import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';

import './MoviesList.scss';

function MoviesList({ movies }) {
  return (
    <div className="movies">
      {movies.map(movie => (
        <div className="card" key={movie.imdbId}>
          <MovieCard {...movie} />
        </div>
      ))}
    </div>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.required,
      imdbId: PropTypes.string.required,
      imdbURL: PropTypes.string.required,
      imgURL: PropTypes.string.required,
      title: PropTypes.string.required,
    }),
  ).isRequired,
};

export default MoviesList;
