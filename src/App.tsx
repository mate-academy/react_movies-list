import React from 'react';
import { Page } from './components/Page/Page';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => (
  <Page movies={moviesFromServer} />
);
