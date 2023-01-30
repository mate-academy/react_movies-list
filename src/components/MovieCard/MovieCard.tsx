import React from 'react';

import './MovieCard.scss';
import { Movie } from '../../types/Movie';

type Props = {
  movie: Movie;
};

export const MovieCard: React.FC<Props> = ({ movie }) => {
  const {
    title,
    description,
    imgUrl,
    imdbUrl,
  };
};
