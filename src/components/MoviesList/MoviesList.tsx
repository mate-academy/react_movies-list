import React from 'react';
import './MoviesList.scss';
import MovieCard from '../MovieCard/MovieCard';
import moviesFromServer from '../../api/movies.json';

const MoviesList: React.FC = () => (
  <>
    <div className="movies">
      {moviesFromServer
        .map((card) => <MovieCard card={card} key={card.imdbId} />)}
    </div>
  </>
);

export default MoviesList;
