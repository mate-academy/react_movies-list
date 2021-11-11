import React from 'react';
import { MoviesList } from './components/MoviesList';

import './App.scss';
import moviesFromServer from './api/movies.json';

type Props = {};
interface State {
  query: string;
}

export class App extends React.Component<Props, State> {
  state = {
    query: '',
  };

  updateState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value.toLowerCase(),
    });
  };

  hasSimilarInQuery = (...args: string[]) => {
    return args.some(value => value.toLowerCase().includes(this.state.query));
  };

  render() {
    const visibleMovies = moviesFromServer.filter(movie => {
      const { title, description } = movie;

      return this.hasSimilarInQuery(title, description);
    });

    return (
      <>
        <input
          type="text"
          className="input"
          value={this.state.query}
          onChange={(event) => this.updateState(event)}
        />

        <div className="page">
          <div className="page-content">
            <MoviesList movies={visibleMovies} />
          </div>
          <div className="sidebar">
            Sidebar will be here
          </div>
        </div>
      </>
    );
  }
}
