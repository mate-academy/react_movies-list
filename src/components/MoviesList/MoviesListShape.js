import PropTypes from 'prop-types';

export const MoviesListShape = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    imdbUrl: PropTypes.string.isRequired,
    imdbId: PropTypes.string.isRequired,
  }).isRequired),
};
