import PropTypes from 'prop-types';

export const MovieCardTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
});

export const MoviesListTypes = PropTypes({
  movies: PropTypes.arrayOf(MovieCardTypes).isRequired,
});
