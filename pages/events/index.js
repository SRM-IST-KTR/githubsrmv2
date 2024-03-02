import React from "react";
import current_event from "@/public/current_event.png";
import PastEvents from "@/components/Events/PastEvents/PastEvents";
import Hero from "@/components/Events/LiveEvents/Hero";
import Image from "next/image";
import heroimg_events from "@/public/heroimg_events.png";

const Events = () => {
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
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3 p-4"
          >
            <PastEvents
              poster={"https://s3-alpha-sig.figma.com/img/ea69/5937/2d0ba426506ee31eb9f73d09f81e8c1e?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FC4aflQ4xaOm8GdnX2JdjhDPY24ywS5cIxZCI4Z7f9Qyz~iWgry9AFIrNF5WUmoT06mZJ16Nk6W866C9oHzApXHzlERE~35qkrvxrp5xzBjr1ESff78WqxcTblOINdu2~2sGtN2XbdplmMVDX79lfzaNGStFhkcN2UnklaYQKK-5zhqIRopGuKEltLlcuRXi4WxT7JLFSXMdoYChOk2ErE6SIzfTBMLzKjLaYOl3nyQyN-1zMeEcSuMTIkyO20rUaqSS1SGmbIPi9Nw0uaRtT~prdDQK4qKljJnqRBoliYic9e~8o8NTqY1DbNc7fnkbMAC3s8~NPlQi5R-utpfrtQ__"}
              title={"hello"}
              certificateLink={"https://youtu.be/dQw4w9WgXcQ?si=wmEcnnmzAuBRZrP9"}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Events;
