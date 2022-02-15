import './MovieCard.scss';
import { FilmWhithId } from '../interface';

type Props = {
  film: FilmWhithId;
};

export const MovieCard: React.FC<Props> = ({ film }) => {
  return (
    <>
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={film.imgUrl}
            alt="Film logo"
          />
        </figure>
      </div>

      <div className="card-content">

        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="images/imdb-logo.jpeg" alt="imdb" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-8">{film.title}</p>
          </div>
        </div>

        <div className="content">
          {film.description}
          <br />
          <a href={film.imdbUrl}>IMDB</a>
        </div>
      </div>
    </>
  );
};
