import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList: React.FC<Movie[]> = (props) => (
  <>
    {Object.values(props).map(el => <MovieCard key={el.imdbId} {...el} />)}
  </>
);
