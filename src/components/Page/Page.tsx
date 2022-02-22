import React from 'react';
import { MoviesList, Props } from '../MoviesList';
import { Sidebar } from '../Sidebar/Sidebar';
import './Page.scss';

export const Page: React.FC<Props> = (props) => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={props.movies} />
    </div>
    <Sidebar />
  </div>
);
