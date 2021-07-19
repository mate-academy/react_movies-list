import PropTypes from 'prop-types';

export const MovieCardType = PropTypes.shape({
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  imdbId: PropTypes.string.isRequired,
});
