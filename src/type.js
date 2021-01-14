import PropTypes from 'prop-types';

export const TypeFilm = PropTypes.shape({
  title: PropTypes.string.isRquired,
  description: PropTypes.string,
  imgUrl: PropTypes.string.isRquired,
  imdbUrl: PropTypes.string.isRquired,
  imdbId: PropTypes.string.isRquired,
});
