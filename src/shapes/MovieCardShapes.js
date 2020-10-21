import PropTypes from 'prop-types';

export const MovieCardPropTypes = {
  title: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export const MovieCardDefaultProps = {
  description: '',
};
