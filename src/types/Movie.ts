export interface Movie {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

export type Prop = {
  movies: Movie[];
};

export type Props = {
  movie: Movie;
};
