import PropTypes from 'prop-types';
import { MovieCardShape } from './MovieCardShape';

export const MoviesListShape = {
  list: PropTypes.arrayOf(MovieCardShape).isRequired,
};
