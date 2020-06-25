import PropTypes from 'prop-types';

export const ShapeMovieCard = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  imdbId: PropTypes.string.isRequired,
});

export const ShapeMoviesList = PropTypes.shape({
  movies: PropTypes.arrayOf(ShapeMovieCard).isRequired,
});
