import React from 'react';
import PropTypes from 'prop-types';
import { movieType } from '../../types';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <>
    {movies.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieType).isRequired,
};

MoviesList.defaulfProps = {
  description: 'here should be a description',
};
