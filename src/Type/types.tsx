export type MovieType = {
  title: string,
  description?: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
};

export type Props = {
  movies: MovieType[];
};
