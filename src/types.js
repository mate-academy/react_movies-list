import PropTypes from 'prop-types';

export const TypesMovie = PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
});
