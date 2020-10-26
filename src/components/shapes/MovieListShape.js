import PropTypes from 'prop-types';
import { MovieCardShape } from './MovieCardShape';

export const MovieListShape = PropTypes.shape({
  movies: PropTypes.arrayOf(MovieCardShape).isRequired,
});
