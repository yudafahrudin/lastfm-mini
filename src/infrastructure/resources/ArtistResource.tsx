import HttpClient from "../HttpClient";
import { ArtistsType, ArtistSearchType } from "@/domains/Artist";
import { LASTFM_API_KEY } from "@/configs/api";

const artistAPI =
  "https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=" +
  LASTFM_API_KEY +
  "&format=json";

const artistSearchAPI =
  "https://ws.audioscrobbler.com/2.0/?method=artist.search&api_key=" +
  LASTFM_API_KEY +
  "&format=json";

export const artistTopResource = async (page: number) => {
  return await HttpClient.get<ArtistsType>(artistAPI, `&page=${page}`);
};

export const artisSearchResource = async (key: string = "", page: number) => {
  return await HttpClient.get<ArtistSearchType>(
    artistSearchAPI,
    `&artist=${key}&page=${page}`
  );
};

export default {
  artistTopResource,
  artisSearchResource,
};
