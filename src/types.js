import PropTypes, { string } from 'prop-types';

export const MovieType = PropTypes.shape({
  title: string.isRequired,
  imgUrl: string.isRequired,
  imdbUrl: string.isRequired,
  imdbId: string.isRequired,
  description: string.isRequired,
});

export const MoviesType = PropTypes.arrayOf(MovieType);
