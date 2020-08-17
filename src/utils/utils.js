export const compareItems = (itemInFavourites, item) => {
  return itemInFavourites.title === item.title
    && itemInFavourites.imgUrl === item.imgUrl
    && itemInFavourites.description === item.description
}