import PropTypes from 'prop-types';

export const MovieType = PropTypes.shape({
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
});
