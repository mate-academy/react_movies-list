import PropTypes from 'prop-types';

export const MovieCardShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
}).isRequired;

export const defaultProps = {
  description: 'No description for this movie',
};
