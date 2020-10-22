import PropTypes from 'prop-types';

export const MovieCardShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string,
  imdbId: PropTypes.string,
}).isRequired;

export const MovieCardDefaultProps = {
  description: '',
};
