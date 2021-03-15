import React from 'react';
import PropTypes from 'prop-types';

import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ data }) => (
  <>
    <div className="movies">
      {data.map(element => (
        <div key={data.imdbId}>
          <MovieCard {...element} />
        </div>
      ))}
    </div>
  </>
);

MoviesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.string,
    }),
  ).isRequired,
};
