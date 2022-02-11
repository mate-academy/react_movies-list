import React from 'react';
import moviesFromServer from './api/movies.json';
import { Page } from './components/Page/Page';

export const App: React.FC = () => (
  <Page movies={moviesFromServer} />
);
