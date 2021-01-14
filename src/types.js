import PropTypes from 'prop-types';

export const MovieCardShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  description: PropTypes.string,
});
