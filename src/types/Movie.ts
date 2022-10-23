export interface MovieType {

  imgUrl: string | undefined
  description: string
  imdbUrl: string
  title: string
  imdbId: string
}

export type MovieCardProps = {
  movie: MovieType
};
