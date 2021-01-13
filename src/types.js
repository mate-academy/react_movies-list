import PropTypes from 'prop-types';

export const MovieCardType = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  imdbId: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export const MoviesListType = {
  movies: PropTypes.arrayOf(
    MovieCardType,
  ).isRequired,
};
