import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import MediaCard from './MediaCard'
import axios from 'axios';

function Home() {
  const [pictureOfTheDay, setPictureOfTheDay] = useState({ loading: true });

  useEffect(() => {
    async function getPictureOfTheDay() {
      const pictureData = await axios.get('http://localhost:3001/picture');
      setPictureOfTheDay({ ...pictureData.data, loading: false });
    }
    getPictureOfTheDay();
  }, []);
  return (
    <div>
      {
        pictureOfTheDay.loading
          ? <Loading />
          : <MediaCard item={pictureOfTheDay} page='home' />
      }
    </div>
  );
}

export default Home;
