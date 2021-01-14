import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import MovieCard from '../MovieCard';
import { CardShape } from '../../types';

const MoviesList = ({ movies }) => (
  <>
    {movies.map(film => (
      <div className="card" key={film.imdbId}>
        <MovieCard {...film} />
      </div>
    ))}
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(CardShape).isRequired,
};

export default MoviesList;
