import React from 'react';
import './MoviesList.scss';
import { Product } from '../type/Product';
import { MovieCard } from '../MovieCard';

type Props = {
  products: Product[];
};

export const MoviesList: React.FC<Props> = ({ products }) => (
  <div className="movies">
    {products.map((product) => (
      <div className="card" key={product.imdbId}>
        <MovieCard {...product} />
      </div>
    ))}
  </div>
);
