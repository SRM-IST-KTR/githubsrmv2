import React from "react";
import PastEvents from "@/components/Events/PastEvents/PastEvents";
import Hero from "@/components/Events/LiveEvents/Hero";
import Image from "next/image";
import heroimg_events from "@/public/heroimg_events.png";

const Events = () => {
  return (
    <>
      <Hero
        title={"hi"}
        date={"date"}
        location={"location"}
        timer={"timer"}
      />
      <div className="flex flex-wrap justify-center gap-4">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3 p-4"
          >
            <PastEvents
              title={"hello"}
              certificateLink={"www.google.com"}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Events;
