import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = prop => (
  <>
    <div className="movies">
      {prop.filmInfoList.map(filminfo => (
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
