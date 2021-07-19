import PropTypes from 'prop-types';

export const moviesShape = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imdbUrl: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imdbId: PropTypes.string.isRequired,
};
