/* eslint-disable max-len */
import React from 'react';
import { CardImg } from './CardComponent/CardImg';
import { Content } from './CardComponent/Content';
import { Media } from './CardComponent/Media';

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
    <CardImg imgUrl={imgUrl} />

    <div className="card-content">
      <Media title={title} />

      <Content
        description={description}
        imdbUrl={imdbUrl}
      />
    </div>
  </>
);
