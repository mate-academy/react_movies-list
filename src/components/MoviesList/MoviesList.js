import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.scss';

export default function MoviesList(props) {
  return props.filmsList.map((item) => {
    const { title, description, imgUrl, imdbUrl, imdbId } = item;

    return (
      <MovieCard
        title={title}
        description={description}
        imgUrl={imgUrl}
        imdbUrl={imdbUrl}
        key={imdbId}
      />
    );
  });
}
