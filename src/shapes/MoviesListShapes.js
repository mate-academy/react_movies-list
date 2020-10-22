import PropTypes from 'prop-types';
import { MovieCardShape } from './MovieCardShapes';

export const MoviesListShape = {
  movies: PropTypes.arrayOf(MovieCardShape).isRequired,
};
