import PropTypes from 'prop-types';

const MovieCardShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
}).isRequired;

export default MovieCardShape;
