import React, { useState } from "react";
import axios from "axios";
import {
  makeStyles,
  Paper,
  IconButton,
  InputBase,
  Grid,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MediaCard from "./MediaCard";
import Loading from "./Loading";

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState({
    results: [],
    loading: false,
  });
  const classes = useStyles();

  async function getSearchResults() {
    setSearchResults({ ...searchResults, loading: true });
    const results = await axios.get(
      `http://localhost:3001/search?q=${searchTerm}`
    );
    setSearchResults({ results: results.data, loading: false });
  }

  return (
    <>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search Nasa's Pictures"
          inputProps={{ "aria-label": "search Nasa's pictures" }}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <IconButton
          className={classes.iconButton}
          aria-label="search"
          onClick={getSearchResults}
        >
          <SearchIcon />
        </IconButton>
      </Paper>

      <Grid container direction="column" wrap="nowrap">
        {searchResults.loading ? (
          <Loading />
        ) : (
          searchResults.results.map((r) => (
            <MediaCard
              key={Math.random() * 100000}
              item={r}
              favouritesActions={props.favouritesActions}
              favouriteList={props.favouriteList}
              page="search"
            />
          ))
        )}
      </Grid>
    </>
  );
}

export default Search;
