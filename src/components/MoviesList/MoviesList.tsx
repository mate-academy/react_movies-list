import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

interface FilmWhithId {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
}

type Props = {
  property: FilmWhithId[];
};

export const MoviesList: React.FC<Props> = ({ property = [] }) => (
  <div className="movies">
    {property.map(({
      title,
      description,
      imgUrl,
      imdbUrl,
      imdbId,
    }) => {
      return (
        <div id={imdbId}>
          <MovieCard
            title={title}
            description={description}
            imgUrl={imgUrl}
            imdbUrl={imdbUrl}
          />
        </div>
      );
    })}
  </div>
);
