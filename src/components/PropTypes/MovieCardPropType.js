import PropTypes from 'prop-types';

export const MovieCardPropType = PropTypes.shape(
  {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    imdbUrl: PropTypes.string.isRequired,
  },
);

MovieCardPropType.defaultProps = {
  description: 'no description',
};
