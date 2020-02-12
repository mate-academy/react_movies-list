import React from 'react';
import './App.scss';

import moviesFromServer from './api/movies';
import { MoviesList } from './components/MoviesList/index';

export const App = () => <MoviesList movies={moviesFromServer} />;
