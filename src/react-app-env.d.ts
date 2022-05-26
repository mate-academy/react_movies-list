// / <reference types="react-scripts" />

interface MovieCardProps {
  film: Films,
}

interface Films {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
}

interface Props {
  films: Films[]
}
