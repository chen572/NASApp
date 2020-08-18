import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MediaCard from './MediaCard';
import Loading from './Loading';

function Favourite(props) {
  const [favourite, setFavourite] = useState({ data: {}, loading: true });
  const { favourites, match } = props;
  const { id } = match.params;

  useEffect(() => {
    async function getFavourite() {
      favourites.loading
        ? setFavourite({
            data: (await axios.get(`http://localhost:3001/item?id=${id}`)).data || {title: 'Not Found'},
            loading: false,
          })
        : setFavourite({
            data: favourites.data.find((i) => i._id === id) || {title: 'Not Found'},
            loading: false,
          });
    }
    getFavourite();
  }, []);

  return favourite.loading ? (
    <Loading />
  ) : (
    <MediaCard item={favourite.data} page='favourite' />
  );
}

export default Favourite;
