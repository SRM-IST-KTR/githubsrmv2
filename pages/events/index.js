import React from "react";
import current_event from "@/public/current_event.png";
import PastEvents from "@/components/Events/PastEvents/PastEvents";
import Hero from "@/components/Events/LiveEvents/Hero";
import Image from "next/image";
import heroimg_events from "@/public/heroimg_events.png";
import events from "../../components/Events/constants";

const Events = () => {

  const { upcoming_events, past_events } = events; // DESTRUCTURING EVENTS OBJECT FROM "constants.js"

  return (
    <>
      <section
        className="relative mt-0 w-screen top-0"
        style={{
          backgroundImage: `url(${heroimg_events.src})`,
          backgroundSize: "cover",
          position: "relative",
          backgroundAttachment: "fixed", //fix the background image while scrolling to look good
        }}
      >
        {/* {upcoming_events.length > 0 && ( */}
        <div className="bg-black/40 p-8 md:p-12 lg:px-16 lg:py-24 flex justify-center items-center relative">
          <div className="mt-10 relative z-10">
            <Hero
              title={"hi"} // IF TITLE IS EMPTY, IT WILL RENDER NO EVENT DIV ELSE HERO COMPONENT
              poster={current_event}
              date={"date"}
              location={"location"}
              timer={"timer"}
              certificateLink={"https://youtu.be/dQw4w9WgXcQ?si=wmEcnnmzAuBRZrP9"}
            />
            {/* <Hero //PASSING THE FORST UPCOMING EVENT OBJECT TO HERO COMPONENT
              {...upcoming_events[0]}
            /> */}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>
        {/* )} */}
      </section>


      {/* <Hero
        title={"hi"} // IF TITLE IS EMPTY, IT WILL RENDER COMPONENT DIV ELSE HERO COMPONENT
        poster={current_event}
        date={"date"}
        location={"location"}
        timer={"timer"}
      /> */}

      {/* PAST EVENTS */}
      <div className="flex flex-wrap justify-center gap-4">
        {past_events.map((event, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3 p-4"
          >
            <PastEvents
              poster={event.poster}
              title={event.title}
              certificateLink={"https://youtu.be/dQw4w9WgXcQ?si=wmEcnnmzAuBRZrP9"}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Events;
