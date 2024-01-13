import { useEffect, useState } from "react";

// external component
import { debounce } from "@mui/material";

// resource
import {
  songTopTrackResource,
  songSearchResource,
} from "@/infrastructure/resources/SongResource";
import { SongType } from "@/domains/Song";

export const useSongCase = () => {
  const [loading, setLoading] = useState(false);
  const [songList, setSongList] = useState<SongType[]>();

  const getSongTopList = async () => {
    setLoading(true);
    setSongList((await songTopTrackResource()).tracks.track);
    setLoading(false);
  };

  const handleSongSearch = debounce(async (value) => {
    if (value) {
      setLoading(true);
      setSongList(
        (await songSearchResource(value))?.results?.trackmatches?.track || []
      );
      setLoading(false);
    } else {
      getSongTopList();
    }
  }, 500);

  useEffect(() => {
    getSongTopList();
  }, []);

  return { loading, songList, handleSongSearch };
};
