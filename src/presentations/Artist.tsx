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

import ArtistList from "./ArtistList";

import { useArtistCase } from "@/useCases/Artist";

const ArtistPresentation: React.FC = () => {
  const {
    loading,
    artistList,
    handleArtistSearch,
    page,
    total,
    rowPage,
    handleChangePage,
  } = useArtistCase();

  return (
    <Container>
      <Stack
        mb={7}
        mt={2}
        spacing={2}
        direction="row"
        justifyContent="space-between"
      >
        <Typography variant="h2">Top Artist</Typography>
        <Input
          onChange={handleArtistSearch}
          placeholder="find your artist"
          endAdornment={
            <IconButton>
              <Search />
            </IconButton>
          }
        />
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

        {artistList?.map((data, index) => {
          const numberListener = Number(data.listeners);
          const numberPlayCount = Number(data.playcount);

          return (
            <ArtistList
              key={`${data.mbid}-${index}`}
              index={index}
              numberListener={numberListener}
              numberPlayCount={numberPlayCount}
              artist={data}
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

export default ArtistPresentation;
