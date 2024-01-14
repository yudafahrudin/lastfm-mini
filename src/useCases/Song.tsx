import { useEffect, useState } from "react";
import { debounce } from "@mui/material";

// resource
import {
  songTopTrackResource,
  songSearchResource,
} from "@/infrastructure/resources/SongResource";

// domain type
import { SongType } from "@/domains/Song";

export const useSongCase = () => {
  const [loading, setLoading] = useState(false);
  const [songList, setSongList] = useState<SongType[]>();
  const [songKey, setSongKey] = useState("");
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

  const getSongTopList = async () => {
    setLoading(true);
    const data = await songTopTrackResource(page + 1);
    const songs = data.tracks.track;
    const attribute = data.tracks["@attr"];

    // set data logic
    setSongList(songs);

    // set attribute pagination
    setTotal(Number(attribute.total));
    setRowPage(Number(attribute.perPage));
    setLoading(false);
  };

  const handleSongSearch = debounce(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPage(0);
      setSongKey(e.target.value);
      if (!e.target.value) setArtistKey("");
    },
    500
  );

  const handleSongSearchByArtist = debounce(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPage(0);
      setArtistKey(e.target.value);
    },
    500
  );

  const searcSongList = async () => {
    setLoading(true);
    const data = await songSearchResource(songKey, artistKey, page + 1);
    const songs = data?.results?.trackmatches?.track || [];
    const pageIndex = data.results["opensearch:startIndex"];
    const perPage = data.results["opensearch:itemsPerPage"];
    const total = data.results["opensearch:totalResults"];

    // set data logic
    setSongList(songs);

    // set attribute pagination
    setTotal(Number(pageIndex));
    setRowPage(Number(perPage));
    setTotal(Number(total));
    setLoading(false);
  };

  useEffect(() => {
    if (songKey || artistKey) {
      searcSongList();
    } else {
      getSongTopList();
    }
  }, [page, songKey, artistKey]);

  return {
    loading,
    songList,
    page,
    total,
    rowPage,
    songKey,
    artistKey,
    handleSongSearch,
    handleSongSearchByArtist,
    handleChangePage,
  };
};
