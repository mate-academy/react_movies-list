import PropTypes from 'prop-types';

export const ShapeMovieCard = PropTypes.object({
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imdbUrl: PropTypes.string.isRequired,
});

ShapeMovieCard.defaultProps = {
  description: 'no description',
};
