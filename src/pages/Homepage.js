import React from "react";
import Infosection from "../pages/Homepage/Infosection";
import Speaketphoto from "../pages/Homepage/Speakerpht";
import VideoHomepage from "./Homepage/VideoHomepage";
import Tickets from "./tickets";

import EventSchedule from "./Homepage/EventTimeline";
import Notify from "./Homepage/EventNotify";

const Homepage = () => {
  return (
    <div className="Homepage">
      <VideoHomepage></VideoHomepage>

      <Tickets></Tickets>

      <Infosection></Infosection>

      <EventSchedule />

      <Notify />
    </div>
  );
};

export default Homepage;
