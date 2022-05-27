import React from 'react';
import { List } from '../../react-app-env';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: List[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movCard => (
      <React.Fragment key={movCard.imdbId}>
        <MovieCard
          title={movCard.title}
          description={movCard.description}
          imdbUrl={movCard.imdbUrl}
          imgUrl={movCard.imgUrl}
        />
      </React.Fragment>
    ))}
  </div>
);
