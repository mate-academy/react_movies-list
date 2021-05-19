import React from 'react';
import './MoviesList.scss';
import MovieCard from '../MovieCard/MovieCard';
import movies from '../../api/movies.json';

export const MoviesList = () => (
  movies.map(({title, description, imgUrl, imdbUrl, imbdId}) => {
   return (
    <MovieCard
        title={title}
        description={description}
        imgUrl={imgUrl}
        imdbUrl={imdbUrl}
        imbdId={imbdId}
      />)
  })
);
