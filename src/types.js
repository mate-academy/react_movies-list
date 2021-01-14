import PropTypes from 'prop-types';

export const TypeMovies = PropTypes.shape({
  imdbId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
});
