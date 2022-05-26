import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

interface FilmProp {
  title: string;
  description: string;
  imbdUrl: string;
  imgUrl: string;
  imdbId: string;
}

interface FilmList {
  movieList: FilmProp[];
}

export const MoviesList: React.FC<FilmList> = ({ movieList = [] }) => (

  <>
    <div className="movies">
      {movieList.map(film => (
        <MovieCard
          title={film.title}
          description={film.description}
          imbdUrl={film.imbdUrl}
          imgUrl={film.imgUrl}
          imdbId={film.imdbId}
        />
      ))}
    </div>
  </>
);
