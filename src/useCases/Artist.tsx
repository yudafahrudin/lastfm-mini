import { useEffect, useState } from "react";
import { debounce } from "@mui/material";

// resource
import {
  artistTopResource,
  artisSearchResource,
} from "@/infrastructure/resources/ArtistResource";

// domain type
import { ArtistType } from "@/domains/Artist";

export const useArtistCase = () => {
  // data logic
  const [artistList, setArtistList] = useState<ArtistType[]>();
  const [loading, setLoading] = useState(false);
  const [artistKey, setArtistKey] = useState("");

  // pagination
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [rowPage, setRowPage] = useState(0);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 500);
  };

  const getArtistTopList = async () => {
    setLoading(true);
    const data = await artistTopResource(page + 1);
    const artists = data.artists.artist;
    const attribute = data.artists["@attr"];

    // set data logic
    setArtistList(artists);

    // set attribute pagination
    setTotal(Number(attribute.total));
    setRowPage(Number(attribute.perPage));
    setLoading(false);
  };

  const handleArtistSearch = debounce(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPage(0);
      setArtistKey(e.target.value);
    },
    500
  );

  const searcArtistList = async () => {
    setLoading(true);
    const data = await artisSearchResource(artistKey, page + 1);
    const artist = data?.results?.artistmatches?.artist || [];
    const pageIndex = data.results["opensearch:startIndex"];
    const perPage = data.results["opensearch:itemsPerPage"];
    const total = data.results["opensearch:totalResults"];

    // set data logic
    setArtistList(artist);

    // set attribute pagination
    setTotal(Number(pageIndex));
    setRowPage(Number(perPage));
    setTotal(Number(total));
    setLoading(false);
  };

  useEffect(() => {
    if (artistKey) {
      searcArtistList();
    } else {
      getArtistTopList();
    }
  }, [page, artistKey]);

  return {
    loading,
    artistList,
    handleArtistSearch,
    page,
    total,
    rowPage,
    handleChangePage,
  };
};
