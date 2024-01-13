import { useEffect, useState } from "react";

// resource
import { artistTopResource } from "@/infrastructure/resources/ArtistResource";

// domain type
import { ArtistType } from "@/domains/Artist";

export const useArtistCase = () => {
  const [artistList, setArtistList] = useState<ArtistType[]>();

  const getArtistTopListResource = async () => {
    setArtistList((await artistTopResource()).artists.artist);
  };

  useEffect(() => {
    getArtistTopListResource();
  }, []);

  return {
    artistList,
  };
};
