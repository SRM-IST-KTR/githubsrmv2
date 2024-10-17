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
                <title>Events | Github Community SRM</title>
                <meta name="description" content="Join exciting hackathons, workshops, and speaker sessions hosted by Github Community SRM. Discover upcoming events, register online, and explore past event highlights with certificates." />
                <meta name="keywords" content={`events, Community SRM, hackathons, workshops, ${allEvents.map(event => event.event_name).join(", ")}, ${allEvents.map(event => event.venue).join(", ")}, tech events, student events`} />

                <meta property="og:title" content="Events | Github Community SRM" />
                <meta property="og:description" content="Join exciting hackathons, technical workshops, and speaker sessions organized by Github Community SRM. Register now and explore past event highlights." />
                <meta property="og:image" content="https://githubsrmist.tech/logo.png" />
                <meta property="og:image:alt" content="Community SRM Hackathons and Workshops" />

                <meta name="twitter:title" content="Hackathons, Workshops & Speaker Sessions | Github Community SRM" />
                <meta name="twitter:description" content="Explore upcoming hackathons, workshops, and speaker sessions hosted by Github Community SRM. Register now and check past event highlights." />
                <meta name="twitter:image" content="https://githubsrmist.tech/logo.png" />

                <script type="application/ld+json">
                    {JSON.stringify(
                        {
                            "@context": "https://schema.org",
                            "@type": "Event",
                            "name": "Hackathons, Workshops & Speaker Sessions | Github Community SRM Events",
                            "url": "https://githubsrmist.tech/events",
                            "description": "Discover and register for hackathons, workshops, and speaker sessions hosted by Github Community SRM.",
                            "image": "https://githubsrmist.tech/logo.png",
                            "location": {
                                "@type": "Place",
                                "name": "SRM Institute of Science and Technology",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "SRM Institute of Science and Technology",
                                    "addressLocality": "Chennai",
                                    "addressRegion": "TN",
                                    "postalCode": "600062",
                                    "addressCountry": "IN"
                                }
                            },
                            "event": allEvents.map((event) => ({
                                "@type": "Event",
                                "name": event.event_name,
                                "startDate": event.event_date,
                                "location": {
                                    "@type": "Place",
                                    "name": event.venue
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "url": event.registration_url,
                                    "price": "0",
                                    "priceCurrency": "INR",
                                    "availability": "https://schema.org/InStock"
                                }
                            }))
                        }
                    )}
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
                                                certificate: certificateLink,
                                                slug: event.slug
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
                        title={isModalOpen.slug || ""}
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
