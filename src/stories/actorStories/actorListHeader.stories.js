import React from "react";
import ActorListHeader from "../components/headerMList";

export default {
  title: "Home Page/Header",
  component: ActorListHeader,
};

export const Basic = () => <ActorListHeader title={'Discover Actors'} />;

Basic.storyName = "Default";