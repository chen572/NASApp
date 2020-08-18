import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function NavBarLinks(props) {
  const { link } = props;

  return (
    <Grid key={link.path} item xs={3}>
      <Typography variant="h6">
        <Link style={{ textDecoration: "none", color: "white" }} to={link.path}>
          {link.text}
        </Link>
      </Typography>
    </Grid>
  );
}

export default NavBarLinks;
