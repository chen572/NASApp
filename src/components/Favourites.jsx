import React from "react";
import MediaCard from "./MediaCard";
import Loading from "./Loading";
import { Typography } from "@material-ui/core";

function Favourites(props) {
  const { favourites, favouritesActions } = props;

  return (
    <div>
      {favourites.loading ? (
        <Loading />
      ) : (
        <div>
          <Typography style={{ textAlign: "center" }} variant="h2">
            Favourites
          </Typography>
          {favourites.data.length ? (
            favourites.data.map((i) => (
              <MediaCard
                key={i._id}
                item={i}
                page="favourites"
                favouritesActions={favouritesActions}
                favouriteList={favourites.data}
              />
            ))
          ) : (
            <Typography style={{ textAlign: "center" }} variant="h4">
              No Favourites yet go get some!
            </Typography>
          )}
        </div>
      )}
    </div>
  );
}

export default Favourites;
