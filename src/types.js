import PropTypes from 'prop-types';

export const MovieType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imdbPath: PropTypes.string.isRequired,
  imdbId: PropTypes.number,
});
