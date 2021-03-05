import PropTypes from 'prop-types';

export const MoviesType = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string,
  imdbId: PropTypes.string.isRequired,
};
