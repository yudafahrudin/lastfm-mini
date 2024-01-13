export type ArtistsType = {
  artists: {
    artist: ArtistType[];
    "@attr": {
      page: string;
      perPage: string;
      total: string;
      totalPages: string;
    };
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

export type ArtistSearchType = {
  results: {
    artistmatches: {
      artist: ArtistType[];
    };
    "opensearch:itemsPerPage": string;
    "opensearch:startIndex": string;
    "opensearch:totalResults": string;
  };
};
