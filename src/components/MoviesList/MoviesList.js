import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import { TypeMovieCard } from '../proptypes';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbId}
          title={movie.title}
          description={movie.description}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
        />
      ))}
    </div>
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(TypeMovieCard),
  ).isRequired,
};
