import PropTypes from 'prop-types';

export const MovieCardShape = PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
  imdbUrl: PropTypes.string,
});
