import PropTypes, { string } from 'prop-types';

export const MovieTypes = PropTypes.arrayOf(
  PropTypes.shape({
    title: string.isRequired,
    imgUrl: string.isRequired,
    imdbUrl: string.isRequired,
    imdbId: string.isRequired,
    description: string.isRequired,
  }),
);
