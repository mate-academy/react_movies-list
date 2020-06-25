import PropTypes from 'prop-types';

export const MovieCardShape = PropTypes.shape({
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

export const MovieListShape = PropTypes.shape({
  movies: PropTypes.arrayOf(MovieCardShape).isRequired,
});
