export type ArtistsType = {
  artists: {
    artist: ArtistType[];
  };
};

export type ArtistType = {
  name: string;
  playcount: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: string;
  image: ArtistImageType[];
};

export type ArtistImageType = {
  "#text": string;
  size: string;
};
