import React from "react";

import { Stack, AppBar, Toolbar, Link } from "@mui/material";
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
  return (
    <Stack spacing={2} mb={5}>
      <Stack direction="row">
        <ThemeProvider theme={darkTheme}>
          <AppBar color="default" position="static">
            <Toolbar>
              {leftIcon || (
                <Stack direction="row" p={1} mr={2}>
                  <Link href="/" underline="none" color="primary">
                    <strong>SONG OF ME</strong>
                  </Link>
                </Stack>
              )}
              <Stack direction="row" spacing={2}>
                <Link href="/" underline="none" color="inherit">
                  Top Songs
                </Link>
                <Link href="/artist" underline="none" color="inherit">
                  Top Artists
                </Link>
              </Stack>
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
