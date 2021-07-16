import propTypes from 'prop-types';

export const moviesType = propTypes.arrayOf(
  propTypes.shape({
    imdbId: propTypes.string.isRequired,
  }),
);
