import propTypes from 'prop-types';

export const MovieCardShape = propTypes.shape({
  title: propTypes.string.isRequired,
  imgUrl: propTypes.string.isRequired,
  imdbUrl: propTypes.string.isRequired,
  imdbId: propTypes.number.isRequired,
  description: propTypes.string,
});
