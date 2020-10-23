import PropTypes from 'prop-types';

const movieCardShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
}).isRequired;

export default movieCardShape;
