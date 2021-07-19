import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(card => (
      <div key={card.imdbId} className="card">
        <MovieCard
          title={card.title}
          description={card.description}
          imgUrl={card.imgUrl}
          imdbUrl={card.imdbUrl}
          imdbId={card.imdbId}
        />
      </div>
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
