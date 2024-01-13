import React from "react";
import {
  Stack,
  Typography,
  AppBar,
  Toolbar,
  useTheme,
  Button,
  Box,
} from "@mui/material";
import { MusicNoteOutlined } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

interface Props {
  title?: string;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

const DefaultWrapper: React.FC<Props> = ({ children, leftIcon, rightIcon }) => {
  const theme = useTheme();

  return (
    <Stack spacing={2} mb={5}>
      <Stack direction="row">
        <ThemeProvider theme={darkTheme}>
          <AppBar color="default" position="static">
            <Toolbar>
              {leftIcon || (
                <Box mr={2}>
                  <MusicNoteOutlined />
                </Box>
              )}
              <Button color="inherit" variant="text">
                <Typography>Top Artists</Typography>
              </Button>
              <Button color="inherit" variant="text">
                <Typography>Top Songs</Typography>
              </Button>
              <Stack direction="row" spacing={1} sx={{ marginLeft: "auto" }}>
                <Stack direction="row" spacing={1}>
                  {rightIcon}
                </Stack>
              </Stack>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </Stack>
      <Stack>{children}</Stack>
    </Stack>
  );
};

export default DefaultWrapper;
