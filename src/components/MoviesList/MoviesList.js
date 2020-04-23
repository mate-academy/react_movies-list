import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ filmInfoList }) => (
  <>
    <div className="movies">
      {filmInfoList.map(filminfo => (
        <div key={filminfo.imdbId}>
          <MovieCard
            imgUrl={filminfo.imgUrl}
            title={filminfo.title}
            ImdbUrl={filminfo.ImdbUrl}
            description={filminfo.description}
          />
        </div>
      ))}
    </div>
  </>
);

MoviesList.propTypes = {
  filmInfoList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
