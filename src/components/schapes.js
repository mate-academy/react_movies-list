import PropTypes from 'prop-types';

export const ShapeMovieCard = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
});
