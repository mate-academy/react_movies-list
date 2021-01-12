import PropTypes from 'prop-types';

export const moviesType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imbdUrl: PropTypes.string.isRequired,
  imbdId: PropTypes.string.isRequired,
});
