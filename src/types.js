import PropTypes from 'prop-types';

export const MovieType = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  imdbId: PropTypes.string.isRequired,
  description: PropTypes.string,
};
