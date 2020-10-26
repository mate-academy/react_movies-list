import PropTypes from 'prop-types';
import { MovieCardShape } from './MovieCardShape';

export const MoviesListShape = {
  movies: PropTypes.arrayOf(MovieCardShape).isRequired,
};
