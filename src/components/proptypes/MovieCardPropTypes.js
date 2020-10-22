import propTypes from 'prop-types';

export const MovieCardPropType = {
  title: propTypes.string.isRequired,
  imgUrl: propTypes.string.isRequired,
  imdbUrl: propTypes.string.isRequired,
  imdbId: propTypes.number.isRequired,
  description: propTypes.string,
};
