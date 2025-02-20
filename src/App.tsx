import React from 'react';
import { Movie } from './types/Movie';
import { MoviesList } from './components/MoviesList';

const moviesFromServer: Movie[] = [
  {
    id: 1,
    title: 'Inception',
    description: "A thief who enters people's dreams and steals their secrets.",
    year: 2010,
    genre: 'Sci-Fi',
    rating: 8.8,
    director: 'Christopher Nolan',
    actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt'],
    posterUrl: 'https://via.placeholder.com/150',
  },
  // Add more movies as needed
];

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Movie List</h1>
      <MoviesList movies={moviesFromServer} />
    </div>
  );
};

export default App;
