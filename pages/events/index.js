"use client";
import React, { useState, useEffect } from "react";
import PastEvents from "@/components/Events/PastEvents/PastEvents";
import PastEventsSkeleton from "@/components/Events/PastEventsSkeleton/PastEventsSkeleton";
import EmailDialogBox from "@/components/Events/EmailDialogue/EmailDialogue";
import RegisterDialogue from "@/components/Events/Register_dialogue/Registerdialogue";
import Hero from "@/components/Events/LiveEvents/Hero";
import heroimg_events from "@/public/heroimg_events.png";
import Head from "next/head";

const Events = () => {
    const [eventData, setEventData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [selectedEventSlug, setSelectedEventSlug] = useState(null);
    const [fetched, setFetched] = useState(false);

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleRegisterButtonClick = (slug) => {
        setSelectedEventSlug(slug);
        setIsRegisterModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const closeRegisterModal = () => {
        setIsRegisterModalOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("../api/v1/events");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setEventData(data.data);
                setFetched(true);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const allEvents = eventData || [];

    return (
        <div className="bg-bg_black">
            <Head>
                <title>Events | Community SRM</title>
                <meta
                    name="description"
                    content="Explore upcoming and past events organized by Community SRM, including detailed information and registration options."
                />
                <meta
                    name="keywords"
                    content={`events, Community SRM, technical events, corporate events, creative events, past events, ${allEvents
                        .map((event) => event.event_name)
                        .join(", ")}`}
                />

                <meta property="og:title" content="Events | Community SRM" />
                <meta
                    property="og:description"
                    content="Discover upcoming and past events organized by Community SRM."
                />
                <meta property="og:image" content="/public/logo.png" />
                <meta
                    property="og:url"
                    content="https://githubsrmist.tech/events"
                />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Events | Community SRM" />
                <meta
                    name="twitter:description"
                    content="Find out more about the events organized by Community SRM."
                />
                <meta name="twitter:image" content="/public/x_logo.png" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Event",
                        name: "Community SRM Events",
                        url: "https://githubsrmist.tech/events",
                        description:
                            "Upcoming and past events organized by Community SRM.",
                        image: "/public/logo.png",
                        event: allEvents.map((event) => ({
                            "@type": "Event",
                            name: event.event_name,
                            startDate: event.event_date,
                            location: {
                                "@type": "Place",
                                name: event.venue
                            },
                            url: event.registration_url,
                            image: event.poster_url
                        }))
                    })}
                </script>
            </Head>
            <section
                className="relative mt-0 top-0 overflow-x-hidden"
                style={{
                    backgroundImage: `url(${heroimg_events.src})`,
                    position: "relative",
                    backgroundAttachment: "fixed"
                }}
            >
                <div className="bg-black/40 -top-8 lg:top-0 lg:p-8 md:p-12 lg:px-16 lg:py-24 flex justify-center items-center relative">
                    <div className="mt-10 relative z-10">
                        {eventData &&
                        eventData.filter((event) => event.is_active).length >
                            0 ? (
                            eventData.map(
                                (event, index) =>
                                    event.is_active && (
                                        <div key={index}>
                                            <Hero
                                                isActive={event.is_active}
                                                title={event.event_name}
                                                poster={event.poster_url}
                                                date={event.event_date}
                                                location={event.venue}
                                                registrationCloseTime={
                                                    event.event_date
                                                }
                                                registrationLink={
                                                    event.registration_url
                                                }
                                                openRegisterDialogue={() =>
                                                    handleRegisterButtonClick(
                                                        event.slug
                                                    )
                                                }
                                            />
                                        </div>
                                    )
                            )
                        ) : (
                            <Hero />
                        )}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg_black"></div>
                </div>
            </section>

            <p className="pt-10 pb-5 text-center font-extrabold font-poppins text-4xl text-white">
                <span className="text-bright_green">Past</span> Events
            </p>
            <div className="flex flex-wrap justify-center gap-4 items-center">
                {!fetched
                    ? Array.from({ length: 4 }, (_, index) => (
                          <div
                              key={index}
                              className="w-96 sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3 pr-4 lg:pl-10"
                          >
                              <PastEventsSkeleton />
                          </div>
                      ))
                    : allEvents.map(
                          (event, index) =>
                              !event.is_active && (
                                  <div
                                      key={index}
                                      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3 p-4"
                                  >
                                      <PastEvents
                                          poster={event.poster_url}
                                          title={event.event_name}
                                          certificateLink={event.certificate}
                                          onButtonClick={handleButtonClick}
                                          openModal={(certificateLink) =>
                                              setIsModalOpen({
                                                  open: true,
                                                  certificate: certificateLink
                                              })
                                          }
                                      />
                                  </div>
                              )
                      )}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-md z-50">
                    <EmailDialogBox
                        CertiOBJ={isModalOpen.certificate}
                        handelCloseModel={closeModal}
                    />
                </div>
            )}

            {isRegisterModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-md z-50">
                    <RegisterDialogue
                        slug={selectedEventSlug}
                        onRegistrationClose={closeRegisterModal}
                    />
                </div>
            )}
        </div>
    );
};

export default Events;
