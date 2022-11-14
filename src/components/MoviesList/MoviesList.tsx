import React from "react";
import { Props } from "../../types/Movie";
import { MovieCard } from "../MovieCard";

import "./MoviesList.scss";

export const MoviesList: React.FC<Props> = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.map((movie) => (
      <MovieCard
        key={movie.title}
        title={movie.title}
        description={movie.description}
        imdbId={movie.imdbId}
        imdbUrl={movie.imdbUrl}
        imgUrl={movie.imgUrl}
      />
    ))}
  </div>
);

// moviesList функциональный компонент типа props
// то есть movieslist будет принимать пропсы типа movie, массив объектов типа movie
// props в свою очередь имеет moviesFromServer , что является массивом объектов типа movie
//
