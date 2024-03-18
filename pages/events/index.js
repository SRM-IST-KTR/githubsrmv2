"use client";
import React, { useState, useEffect } from "react";
import current_event from "@/public/current_event.png";
import PastEvents from "@/components/Events/PastEvents/PastEvents";
import Hero from "@/components/Events/LiveEvents/Hero";
import Image from "next/image";
import heroimg_events from "@/public/heroimg_events.png";
// import events from "../../components/Events/constants";

const Events = () => {

  // const { upcoming_events, past_events } = events; // DESTRUCTURING EVENTS OBJECT FROM "constants.js"
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    // Fetch data from your API
    const fetchData = async () => {
      try {
        const response = await fetch("../api/v1/events"); // Assuming your API endpoint is '/api/events'
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setEventData(data.data); // Assuming the API response has a 'data' property containing the events
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

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
            {eventData && eventData.filter(event => event.is_active).length > 0 ? (
              eventData.map((event, index) => (
                event.is_active && (
                  <div key={index}>
                    <Hero
                      isActive={event.is_active}
                      title={event.event_name}
                      poster={event.poster_url}
                      date={event.event_date}
                      location={event.venue}
                      registrationCloseTime={event.event_date} // Assuming this is the registration close time
                      registrationLink={event.registration_url}
                    />
                  </div>
                )
              ))
            ) : (
              <Hero />
            )}
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>
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
        {eventData &&
          eventData.map((event, index) => (
            !event.is_active && (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3 p-4"
              >
                <PastEvents
                  poster={event.poster_url}
                  title={event.event_name}
                  certificateLink={event.registration_url}
                />
              </div>
            )
          ))}
      </div>
    </>
  );
};

export default Events;
