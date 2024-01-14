import {
  Grid,
  Divider,
  ListItemAvatar,
  Avatar,
  Link,
  Typography,
} from "@mui/material";

import { ArtistType } from "@/domains/Artist";

interface Props {
  artist: ArtistType;
  page: number;
  index: number;
  rowPage: number;
  numberListener: number;
  numberPlayCount: number;
}

const ArtistListPresentation: React.FC<Props> = ({
  artist,
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
          <Avatar alt="Remy Sharp" src={artist.image[0]["#text"]} />
        </ListItemAvatar>
      </Grid>
      <Grid item xs={5.5}>
        <Link href={artist.url} target="_blank" underline="none">
          {artist.name}
        </Link>
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

export default ArtistListPresentation;
