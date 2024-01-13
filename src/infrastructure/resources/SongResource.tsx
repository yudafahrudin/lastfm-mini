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

export const songTopTrackResource = async () => {
  return await HttpClient.get<SongsType>(songAPI);
};

export const songSearchResource = async (key: string = "") => {
  return await HttpClient.get<SongSearchType>(songSearchAPI, `&track=${key}`);
};
export default {
  songTopTrackResource,
  songSearchResource,
};
