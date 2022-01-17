import React from 'react';

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
    {title}
    {description}
    {imgUrl}
    {imdbUrl}
  </>
);
