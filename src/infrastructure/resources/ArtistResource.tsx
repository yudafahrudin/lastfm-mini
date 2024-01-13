import HttpClient from "../HttpClient";
import { ArtistsType } from "@/domains/Artist";

const artistAPI =
  "https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=e098960f4d60afc0a02a841445e08ec5&format=json";

export const artistTopResource = async () => {
  return await HttpClient.get<ArtistsType>(artistAPI);
};

export default {
  artistTopResource,
};
