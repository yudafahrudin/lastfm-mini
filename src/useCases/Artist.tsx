import { useEffect, useState } from "react";

// resource
import {
  artistTopResource,
  artisSearchResource,
} from "@/infrastructure/resources/ArtistResource";

// domain type
import { ArtistType } from "@/domains/Artist";
import { debounce } from "@mui/material";

export const useArtistCase = () => {
  const [artistList, setArtistList] = useState<ArtistType[]>();
  const [loading, setLoading] = useState(false);

  const getArtistTopList = async () => {
    setLoading(true);
    setArtistList((await artistTopResource()).artists.artist);
    setLoading(false);
  };

  const handleArtistSearch = debounce(async (value) => {
    if (value) {
      setLoading(true);
      setArtistList(
        (await artisSearchResource(value))?.results?.artistmatches?.artist || []
      );
      setLoading(false);
    } else {
      getArtistTopList();
    }
  }, 500);

  useEffect(() => {
    getArtistTopList();
  }, []);

  return {
    loading,
    artistList,
    handleArtistSearch,
  };
};
