import React from 'react';
import {
  Card,
  CardMedia,
  makeStyles,
  CardContent,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '95vw',
    margin: '10px',
    // marginTop: '10px',
    justifySelf: 'center',
    // marginBottom: '10px'
  },
  media: {
    height: '50vh'
  },
  content: {
    // marginBottom: '10px'
  }
});

function MediaCard(props) {
  const classes = useStyles();
  const showDescription = ['favourite', 'home']
  const { item, page } = props;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image='https://apod.nasa.gov/apod/image/2008/PerseidBridge_Zhang_1080.jpg'
        title={item.title}
      />
      <CardContent className={classes.content}>
        <Typography variant='h4' component="h4">{item.title}</Typography>
        <Typography variant="body1" component="p">{showDescription.includes(page) && item.description}</Typography>
      </CardContent>
    </Card>
  );
}

export default MediaCard;
