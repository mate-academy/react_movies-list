import './MovieCard.scss';

type Props = {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
};

export const MovieCard: React.FC<Props> = ({
  title,
  description,
  imgUrl,
  imdbUrl,
}) => (
  <>
    <div className="card-wrap-image">
      <figure className="image is-4by3">
        <img
          className="card-image"
          src={imgUrl}
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
          <p className="title is-8">{title}</p>
        </div>
      </div>

      <div className="content">
        {description}
        <br />
        <a href={imdbUrl}>IMDB</a>
      </div>
    </div>
  </>
);
