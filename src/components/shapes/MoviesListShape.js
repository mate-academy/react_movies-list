import PropTypes from 'prop-types';
import { MovieCardShape } from './MovieCardShape';

export const MoviesListShape = PropTypes.shape({
  movies: PropTypes.arrayOf(MovieCardShape).isRequired,
});
