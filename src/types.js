import PropTypes from 'prop-types';

export const CardShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imdbId: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
});
