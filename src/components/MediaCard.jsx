import React, { useEffect, useState } from 'react';
import {
  Card,
  CardMedia,
  makeStyles,
  CardContent,
  Typography,
  Icon,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { compareItems } from '../utils/utils';

const useStyles = makeStyles({
  root: {
    minWidth: '95vw',
    maxWidth: '50vw',
    margin: 'auto',
    marginTop: '10px',
    marginBottom: '10px',
    justifySelf: 'center',
    textAlign: 'center',
    padding: '5px',
  },
  media: {
    height: '40vh',
  },
  button: {
    padding: '15px',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
});

function MediaCard(props) {
  const classes = useStyles();
  const showDescription = ['favourite', 'home'];
  const showLikeButton = ['favourites', 'search'];
  const { item, page, favouritesActions, favouriteList } = props;

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (page === 'search' || page === 'favourites') {
      const itemInFavourites = favouriteList.find((favouriteItem) =>
        compareItems(favouriteItem, item)
      );
      debugger
      if (itemInFavourites && !itemInFavourites.deleted) {
        item._id = itemInFavourites._id;
        setSaved(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onClickHandler() {
    if (page === 'search' || page === 'favourites') {
      const { saveFavouriteToDb, deleteFavouriteFromDb } = favouritesActions;
      if (saved) {
        deleteFavouriteFromDb(item._id);
      } else {
        saveFavouriteToDb(item);
      }
    }
  }

  return (
    <Card className={classes.root}>
      {page === 'favourites' ? (
        <Link className={classes.link} to={`/favourite/${item._id}`}>
          <Typography variant='h5'>{item.title}</Typography>
        </Link>
      ) : page === 'favourite' ? (
        <Link className={classes.link} to={`/favourites`}>
          <Typography variant='h5'>{item.title}</Typography>
        </Link>
      ) : (
        <Typography variant='h5'>{item.title}</Typography>
      )}
      <CardMedia
        className={classes.media}
        image={item.imgUrl}
        title={item.title}
      />
      <CardContent>
        <Typography variant='body1' component='p'>
          {showDescription.includes(page) && item.description}
        </Typography>
      </CardContent>
      {showLikeButton.includes(page) && (
        <Button
          className={classes.button}
          onClick={() => onClickHandler()}
          variant='outlined'
        >
          <Icon
            id={saved ? 'saved' : ''}
            className='fas fa-thumbs-up save-icon'
          />
        </Button>
      )}
    </Card>
  );
}

export default MediaCard;
