import React from "react";
import { AppBar, Toolbar, Box, useTheme, useMediaQuery } from "@mui/material";
import NavBarItems from "./NavBarItems";

const NavBar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#0d1117",
          zIndex: 1400,
          paddingX: isSmallScreen ? 1 : 3, // horizontal padding on small screens
        }}
        component="nav"
        aria-label="primary navigation"
      >
        <Toolbar sx={{ justifyContent: "flex-start" }}>
          <NavBarItems />
        </Toolbar>
      </AppBar>
      {/* Spacer to offset fixed AppBar height */}
      <Box
        sx={{ height: 64, [theme.breakpoints.down("sm")]: { height: 56 } }}
      />
    </>
  );
};

export default NavBar;
