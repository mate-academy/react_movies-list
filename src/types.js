import PropTypes from 'prop-types';

export const type = PropTypes.shape({
  description: PropTypes.string,
  imdbUrl: PropTypes.string.isRequired,
  imdbId: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});
