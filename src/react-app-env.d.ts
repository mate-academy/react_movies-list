/// <reference types="react-scripts" />

export interface Card {
  title: string;
  description: string;
  imbdUrl?: string;
  imgUrl: string;
}

export interface List extends Card {
  imdbId: string;
}
