import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Search from './components/Search';
import Favourites from './components/Favourites'
import './App.css'
import Favourite from './components/Favourite';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab'

function App() {
  const [favourites, setFavourites] = useState({ data: [], loading: true })
  const [snackBarData, setSnackBarData] = useState({ open: false, severity: '', text: ''})

  async function updateFavourites() {
    const favourites = await axios.get('http://localhost:3001/item')
    setFavourites({ data: favourites.data, loading: false })
  }

  useEffect(() => {
    updateFavourites()
  }, [])

  async function saveFavouriteToDb(item) {
    setFavourites({ ...favourites, loading: true })
    const itemFromDb = await axios.post('http://localhost:3001/item', { item }).catch(e => e)
    await updateFavourites()
    setSnackBarData({ open: true, severity: 'success', text: 'Saved!'})
    return itemFromDb._id
  }
  
  async function deleteFavouriteFromDb(itemId) {
    setFavourites({ ...favourites, loading: true })
    await axios.delete(`http://localhost:3001/item?id=${itemId}`)
    const favs = [...favourites.data]
    const deletedFavourite = favs.find(f => f._id === itemId) 
    deletedFavourite.deleted = true
    setFavourites({ data: favs, loading: false })
    setSnackBarData({ open: true, severity: 'success', text: 'Deleted!'})
    return
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBarData({...snackBarData, open: false});
  };

  const favouritesActions = { saveFavouriteToDb, deleteFavouriteFromDb }

  return (
    <Router>
      <NavBar />
      <Route exact path='/' render={() => <Home />} />
      <Route exact path='/search' render={() => <Search favouriteList={favourites.data} favouritesActions={favouritesActions} />} />
      <Route exact path='/favourites' render={() => <Favourites favourites={favourites} favouritesActions={favouritesActions} />} />
      <Route exact path='/favourite/:id' render={({ match }) => <Favourite match={match} favourites={favourites} />} />
      <Snackbar open={snackBarData.open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity={snackBarData.severity}>{snackBarData.text}</Alert>
      </Snackbar>
    </Router>
  );
}

export default App;
