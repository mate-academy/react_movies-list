import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.scss';

export const MoviesList = (props) => {
  const { moviesList } = props;

  return (
    <div className="movies">
      {moviesList.map(move => (
        <MovieCard
          key={move.imdbId}
          description={move.description}
          imgUrl={move.imgUrl}
          imdbUrl={move.imdbUrl}
          title={move.title}
        />
      )) }
    </div>
  );
};

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      imgUrl: PropTypes.string,
      imdbUrl: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

MoviesList.defaultProps = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      description: '',
      imgUrl: '',
      imdbUrl: '',
      title: '',
    }),
  ),
};
