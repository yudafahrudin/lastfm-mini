import React from "react";
import {
  Stack,
  Grid,
  LinearProgress,
  Container,
  Input,
  IconButton,
  Divider,
  Typography,
  TablePagination,
} from "@mui/material";

import { Search } from "@mui/icons-material";

import { useSongCase } from "@/useCases/Song";

import SongList from "./SongList";

const SongPresentation: React.FC = () => {
  const {
    loading,
    songList,
    page,
    total,
    rowPage,
    songKey,
    artistKey,
    handleSongSearchByArtist,
    handleChangePage,
    handleSongSearch,
  } = useSongCase();

  return (
    <Container>
      <Stack
        mb={7}
        mt={2}
        spacing={2}
        direction="row"
        justifyContent="space-between"
      >
        <Typography variant="h2">Top Song</Typography>
        <Stack direction="row">
          <Input placeholder="find your song" onChange={handleSongSearch} />
          <Input
            disabled={!songKey}
            placeholder="by artist"
            onChange={handleSongSearchByArtist}
            defaultValue={artistKey}
            endAdornment={
              <IconButton>
                <Search />
              </IconButton>
            }
          />
        </Stack>
      </Stack>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        rowSpacing={2}
      >
        <Grid item xs={0.5} />
        <Grid item xs={1} />
        <Grid item xs={5.5}>
          Name
        </Grid>
        <Grid item xs={3}>
          Listener
        </Grid>
        <Grid item xs={2}>
          Play Count
        </Grid>

        <Grid item xs={12}>
          {loading ? <LinearProgress /> : <Divider />}
        </Grid>

        {songList?.map((data, index) => {
          const numberListener = Number(data.listeners);
          const numberPlayCount = Number(data.playcount);

          return (
            <SongList
              key={`${data.artist.mbid}-${index}`}
              index={index}
              numberListener={numberListener}
              numberPlayCount={numberPlayCount}
              song={data}
              page={page}
              rowPage={rowPage}
            />
          );
        })}
      </Grid>
      <Grid item xs={12}>
        {loading && <LinearProgress />}
      </Grid>
      <TablePagination
        component="div"
        count={total}
        page={page}
        rowsPerPageOptions={[rowPage]}
        rowsPerPage={rowPage}
        onPageChange={handleChangePage}
      />
    </Container>
  );
};

export default SongPresentation;
