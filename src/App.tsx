import React from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { Page } from './components/Page/Page';
// type Props = {
//   movies: Movie[];
// };
export const App: React.FC = () => (
  <Page movies={moviesFromServer} />
);
