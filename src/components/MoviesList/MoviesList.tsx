import { Movie } from '../../react-app-env';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

interface Prop {
  moviesList: Movie[]
}

export const MoviesList: React.FC<Prop> = ({ moviesList }) => (
  <>
    {moviesList.map((move: Movie) => (
      <div key={move.imdbId} className="card">
        <MovieCard
          title={move.title}
          description={move.description}
          imgUrl={move.imgUrl}
          imdbUrl={move.imdbUrl}
        />
      </div>
    ))}
  </>
);
