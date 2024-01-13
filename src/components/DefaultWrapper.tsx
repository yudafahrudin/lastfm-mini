import React from "react";
import {
  Stack,
  Typography,
  AppBar,
  Toolbar,
  useTheme,
  Button,
} from "@mui/material";
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
    <Stack spacing={2}>
      <Stack direction="row">
        <ThemeProvider theme={darkTheme}>
          <AppBar color="default" position="static">
            <Toolbar>
              {leftIcon || <Button>SOM</Button>}
              <Typography>let's find out your song</Typography>
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
