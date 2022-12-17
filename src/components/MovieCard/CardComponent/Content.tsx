type Props = {
  description: string;
  imdbUrl: string;
};

export const Content: React.FC<Props> = ({ description, imdbUrl }) => (
  <div className="content">
    <p data-cy="MovieDescription">
      {description}
    </p>

    <a
      href={imdbUrl}
      data-cy="MovieLink"
    >
      IMDB
    </a>
  </div>
);
