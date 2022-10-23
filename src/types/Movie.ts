export interface MovieType {

  imgUrl: string | undefined
  description: string
  imdbUrl: string
  title: string
  imdbId: string
}

export type MovieList = {
  movies?: MovieType[]
};

export type MovieCardProps = {
  movie: {
    imgUrl: string | undefined
    description: string
    imdbUrl: string
    title: string
    imdbId: string
  }
};
