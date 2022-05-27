/// <reference types="react-scripts" />
export interface FilmProp {
  title: string;
  description: string;
  imdbUrl: string;
  imgUrl: string;
  imdbId: string;
}

export interface FilmList {
  movieList: FilmProp[];
}

export interface FilmCard {
  movie: FilmProp;
}
