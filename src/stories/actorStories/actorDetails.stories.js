import React from "react";
import ActorDetails from "../../components/actorFiles/actorDetails";
import SampleActor from "./sampleData";

export default {
  title: "Actor Details Page/ActorDetails",
  component: ActorDetails,
};

export const Basic = () => <ActorDetails actor={SampleActor} />;
Basic.storyName = "Default";