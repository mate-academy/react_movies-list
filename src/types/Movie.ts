export interface MovieItem {
  title: string;
  description:string;
  imgUrl:string;
  imdbUrl:string;
  imdbId :string;
}

export type MoviesArr = {
  movies:MovieItem[];
}

export type PropMovie = Pick<MovieItem, 'title' | 'description' | 'imgUrl' | 'imdbUrl'>