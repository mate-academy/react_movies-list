import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ dataList }) => (
  <div className="movies">
    {dataList.map(dataItem => (
      <MovieCard key={dataItem.imdbId} {...dataItem} />
    ))}
  </div>
);

MoviesList.propTypes = {
  dataList: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
