export type SongsType = {
  tracks: {
    track: SongType[];
    "@attr": {
      page: string;
      perPage: string;
      total: string;
      totalPages: string;
    };
  };
};

export type SongType = {
  artist: ArtistType;
  image: SongImageType[];
  streamable: StreamableType;
  duration: string;
  listeners: string;
  mbid: string;
  name: string;
  playcount: string;
  url: string;
};

export type ArtistType = {
  mbid: string;
  name: string;
  url: string;
};

export type SongImageType = {
  "#text": string;
  size: string;
};

export type StreamableType = {
  "#text": string;
  fulltrack: string;
};

export type SongSearchType = {
  results: {
    trackmatches: {
      track: SongType[];
    };
    "opensearch:itemsPerPage": string;
    "opensearch:startIndex": string;
    "opensearch:totalResults": string;
  };
};
