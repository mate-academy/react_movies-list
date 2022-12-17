type Props = {
  title: string;
};

export const Media: React.FC<Props> = ({ title }) => (
  <div className="media">
    <div className="media-left">
      <figure className="image is-48x48">
        <img src="images/imdb-logo.jpeg" alt="imdb" />
      </figure>
    </div>

    <div className="media-content">
      <p className="title is-8" data-cy="MovieTitle">
        {title}
      </p>
    </div>
  </div>
);
