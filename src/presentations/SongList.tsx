import React from "react";
import {
  Stack,
  Grid,
  Divider,
  ListItemAvatar,
  Avatar,
  Link,
} from "@mui/material";

import { SongType } from "@/domains/Song";

interface Props {
  song: SongType;
  page: number;
  index: number;
  rowPage: number;
  numberListener: number;
  numberPlayCount: number;
}

const SongListPresentation: React.FC<Props> = ({
  song,
  page,
  index,
  rowPage,
  numberListener,
  numberPlayCount,
}) => {
  const pageCount = index + 1 + (page === 0 ? 0 : page * rowPage);
  return (
    <>
      <Grid item xs={0.5}>
        {pageCount}
      </Grid>
      <Grid item xs={1}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={song.image[0]["#text"]} />
        </ListItemAvatar>
      </Grid>
      <Grid item xs={5.5}>
        <Stack>
          <Link
            href={song.url}
            target="_blank"
            underline="none"
            fontWeight="bold"
          >
            {song.name}
          </Link>
          <Link
            href={song.artist.url}
            fontSize={13}
            target="_blank"
            sx={{ color: "gray" }}
          >
            {song.artist.name || String(song.artist)}
          </Link>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        {numberListener.toLocaleString()}
      </Grid>
      <Grid item xs={2}>
        {numberPlayCount ? numberPlayCount.toLocaleString() : "-"}
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </>
  );
};

export default SongListPresentation;
