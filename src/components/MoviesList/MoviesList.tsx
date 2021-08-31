import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Prop = {
  moviesList: Movie[];
};
export const MoviesList: React.FC<Prop> = ({ moviesList }) => (
  <div className="movies">
    {moviesList.map(movie => (
      <MovieCard
        key={movie.imdbId}
        title={movie.title}
        description={movie.description}
        imgUrl={movie.imgUrl}
        imdbUrl={movie.imdbUrl}
      />
    ))}
  </div>
);
