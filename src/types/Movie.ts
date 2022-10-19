export interface MovieType {
  imgUrl: string,
  description: string,
  imdbUrl: string,
  title: string;
  imdbId: string,
}

export type MovieList = {
  movies: MovieType[]
};
