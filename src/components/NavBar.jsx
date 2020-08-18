import React from "react";
import { AppBar, Grid, Typography } from "@material-ui/core";
import NavBarLinks from "./NavBarLinks";

function NavBar() {
  const links = [
    { text: "Home", path: "/" },
    { text: "Search", path: "/search" },
    { text: "Favourites", path: "/favourites" },
  ];

  return (
    <AppBar style={{ background: "#352535" }} position="sticky">
      <Grid
        container
        spacing={3}
        style={{ width: "100%" }}
        justify="center"
        alignItems="center"
        wrap="nowrap"
      >
        {links.map((link) => (
          <NavBarLinks key={link.path} link={link} />
        ))}
        <Grid item xs={2}>
          <img
            src="https://api.nasa.gov/assets/footer/img/favicon-192.png"
            alt="NASA Logo"
            style={{ width: "60px", position: "relative", left: "10px" }}
          />
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default NavBar;
