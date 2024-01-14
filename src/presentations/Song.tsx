import React from "react";
import {
  Stack,
  Grid,
  LinearProgress,
  Container,
  Input,
  IconButton,
  Divider,
  ListItemAvatar,
  Avatar,
  Typography,
  TablePagination,
  Link,
} from "@mui/material";

import { Search } from "@mui/icons-material";

import { useSongCase } from "@/useCases/Song";

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
          <Input
            placeholder="find your song"
            onChange={(e) => handleSongSearch(e.target.value)}
          />
          <Input
            disabled={!songKey}
            placeholder="by artist"
            value={artistKey}
            onChange={(e) => handleSongSearchByArtist(e.target.value)}
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
          <b>Name</b>
        </Grid>
        <Grid item xs={3}>
          <b>Listener</b>
        </Grid>
        <Grid item xs={2}>
          <b>Play Count</b>
        </Grid>

        <Grid item xs={12}>
          {loading ? <LinearProgress /> : <Divider />}
        </Grid>

        {songList?.map((data, index) => {
          const numberListener = Number(data.listeners);
          const numberPlayCount = Number(data.playcount);

          return (
            <>
              <Grid item xs={0.5}>
                {index + 1 + (page === 0 ? 0 : page * rowPage)}
              </Grid>
              <Grid item xs={1}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={data.image[0]["#text"]} />
                </ListItemAvatar>
              </Grid>
              <Grid item xs={5.5}>
                <Stack>
                  <Link
                    href={data.url}
                    target="_blank"
                    underline="none"
                    fontWeight="bold"
                  >
                    {data.name}
                  </Link>
                  <Link
                    href={data.artist.url}
                    fontSize={13}
                    target="_blank"
                    sx={{ color: "gray" }}
                  >
                    {data.artist.name || String(data.artist)}
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
