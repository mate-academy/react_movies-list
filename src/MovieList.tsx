import { MovieCard } from './MovieCard';

interface Movie {
  'title': string,
  'description': string,
  'imgUrl': string,
  'imdbUrl': string,
  'imdbId': string,
}

type Props = {
  movies: Movie[];
};

export const MovieList: React.FC<Props> = ({ movies = [] }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li className="card" key={movie.imdbId}>
        <MovieCard {...movie} />
      </li>
    ))}
  </ul>
);
