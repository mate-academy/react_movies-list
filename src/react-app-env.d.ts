/// <reference types="react-scripts" />
export interface Film {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId : string;
}

export interface MovList {
  movies: Film[];
}

export interface MovCard {
  movie: Film;
}
