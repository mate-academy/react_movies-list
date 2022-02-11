import React from 'react';
import { MoviesList } from '../MoviesList';
import { Sidebar } from '../Sidebar/Sidebar';
import { Movie } from '../MovieCard';

type Props = {
  movies: Movie[];
};
export const Page: React.FC<Props> = (props) => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={props.movies} />
    </div>
    <Sidebar />
  </div>
);
