import React, { useState } from 'react';
import { AppBar, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

function NavBar() {
  const links = [
    { text: 'Home', path: '/home' },
    { text: 'Search', path: '/search' },
    { text: 'Favourites', path: '/favorite' },
  ];

  return (
    <>
      <AppBar position='sticky'>
        <Grid
          container
          spacing={3}
          style={{ width: '100%' }}
          justify='space-evenly'
          alignItems='center'
        >
          {links.map((l) => (
            <Grid item>
              <Link key={l.path} to={l.path}>
                {l.text}
              </Link>
            </Grid>
          ))}
          <Grid item>
            <img
              src='https://api.nasa.gov/assets/footer/img/favicon-192.png'
              alt='NASA Logo'
              style={{ width: '50px' }}
            />
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
}

export default NavBar;
