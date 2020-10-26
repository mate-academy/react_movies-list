import PropTypes from 'prop-types';
import { CardShape } from './CardShape';

export const ListShape = PropTypes.shape({
  movies: PropTypes.arrayOf(CardShape).isRequired,
}).isRequired;
