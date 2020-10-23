import PropTypes from 'prop-types';

export const MovieCardShape = PropTypes.shape({
  imdbId: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
});
