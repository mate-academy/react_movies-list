import PropTypes from 'prop-types';

const MoviesCardShape = PropTypes.shape({
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  imdbId: PropTypes.string.isRequired,
}).isRequired;

export default MoviesCardShape;
