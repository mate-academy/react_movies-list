import React from 'react';
import './MovieCard.scss';

type Props = {
  filmTitle: string;
  filmDescription: string;
  filmImgUrl: string;
  filmImdbUrl: string;
  filmImdbId: string;
};

export const MovieCard: React.FC<Props> = ({
  filmDescription,
  filmImdbId,
  filmImdbUrl,
  filmImgUrl,
  filmTitle,
}) => (
  <>
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={filmImgUrl}
            alt="Film logo"
          />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={filmImdbUrl} alt="imdb" />
            </figure>
          </div>

          <div className="media-content">
            <p className="title is-8">{filmTitle}</p>
          </div>
        </div>

        <div className="content">
          {filmDescription}
          <br />
          <a href={filmImdbId}>IMDB</a>
        </div>
      </div>
    </div>
  </>
);
