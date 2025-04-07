// App.tsx
import React from 'react';
import { MoviesList } from './components/MoviesList/MoviesList';
import './App.scss';

const moviesFromServer = [
  {
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing.',
    imgUrl:
      // eslint-disable-next-line max-len
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    imdbUrl: 'https://www.imdb.com/title/tt1375666',
  },
  {
    title: 'Love Actually',
    description: 'Stories about love during Christmas in London.',
    imgUrl:
      // eslint-disable-next-line max-len
      'https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg',
    imdbUrl: 'https://www.imdb.com/title/tt0314331',
  },
  {
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years.',
    imgUrl:
      // eslint-disable-next-line max-len
      'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDY2XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
    imdbUrl: 'https://www.imdb.com/title/tt0111161',
  },
  {
    title: 'The Dark Knight',
    description: 'Batman faces the Joker in Gotham City.',
    imgUrl:
      // eslint-disable-next-line max-len
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    imdbUrl: 'https://www.imdb.com/title/tt0468569',
  },
  {
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, and a gangster.',
    imgUrl:
      // eslint-disable-next-line max-len
      'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    imdbUrl: 'https://www.imdb.com/title/tt0110912',
  },
];

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServer} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
