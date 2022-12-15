import React from "react";
import ActorCard from "../../components/actorFiles/actorCard";
import SampleActor from "./sampleData";

export default {
  title: "Home Actor Page/ActorCard",
  component: ActorCard,
};

export const Basic = () => {
  return (
    <ActorCard
      actor={SampleActor}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleActor, poster_path: undefined };
  return (
    <ActorCard
      actor={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";