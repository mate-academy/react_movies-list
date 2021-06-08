import PropTypes from 'prop-types';

export const CardType = PropTypes.shape({
  description: PropTypes.string,
  imdbId: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});
