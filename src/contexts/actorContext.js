import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
    const [favourites, setFavourites, myReviews, setMyReviews] = useState( [] ) 

  const addToFavourites = (actor) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(actor.id)) {
      newFavourites.push(actor.id);
    }
    setFavourites(newFavourites);
  };


  const removeFromFavourites = (actor) => {
    setFavourites( favourites.filter(
      (mId) => mId !== actor.id
    ) )
  };

  const addReview = (actor, review) => {
    setMyReviews( {...myReviews, [actr.id]: review } )
  };

 return (
    <ActorsContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
      }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default MoviesContextProvider;