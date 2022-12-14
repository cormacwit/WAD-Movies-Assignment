import React from "react";
import { getActors } from "../api/tmdb-api";
import ActorListPageTemplate from "../../components/actorFiles/templateActorListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIconActor from '../components/cardIcons/addToFavouriteActor'

const ActorPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favourites = actors.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (actorId) => true 

  return (
    <PageTemplate
      title="Discover actors"
      actors={actors}
      action={(actor) => {
        return <AddToFavouritesIcon actor={actor} />
      }}
    />
);
};
export default ActorPage;