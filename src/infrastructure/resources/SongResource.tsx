import HttpClient from "../HttpClient";
import { SongsType, SongSearchType } from "@/domains/Song";
import { LASTFM_API_KEY } from "@/configs/api";

const songAPI =
  "https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=" +
  LASTFM_API_KEY +
  "&format=json";

const songSearchAPI =
  "https://ws.audioscrobbler.com/2.0/?method=track.search&api_key=" +
  LASTFM_API_KEY +
  "&format=json";

export const songTopTrackResource = async (page: number) => {
  return await HttpClient.get<SongsType>(songAPI, `&page=${page}`);
};

export const songSearchResource = async (
  key: string = "",
  artistKey: string = "",
  page: number
) => {
  return await HttpClient.get<SongSearchType>(
    songSearchAPI,
    `&track=${key}&artist=${artistKey}&page=${page}`
  );
};
export default {
  songTopTrackResource,
  songSearchResource,
};
