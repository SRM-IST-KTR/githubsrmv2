import React from "react";
import Hero from "@/components/OurStory/Hero";
import Head from "next/head";
import Script from 'next/script';


function AboutUs() {
    return (
        <>
        <div className="bg-bg_black text-white">
            <Head>
                {/* Google Tag Manager */}
                <Script
                    id="google-tag-manager"
                    dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TXXTQDRC');`
                }}
                />
                {/* End Google Tag Manager */}
                <title>About Us | GitHub Community SRM</title>
                <meta name="description" content="Discover GitHub Community SRM, a student-led group at SRMIST, promoting open-source collaboration. Join us to explore coding, innovation, and community-driven development." />
                <meta name="keywords" content="GitHub, SRMIST, Open Source, Coding, GitHub Community SRM, Development, Collaboration, SRM Institute of Science and Technology, Tech Community SRM, Student Developers SRMIST, Open Source Projects SRM, Coding Club SRM" />
                <meta name="author" content="GitHub Community SRM" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="canonical" href="https://githubsrmist.tech/about" />

                <meta name="twitter:card" content="/public/logo.png" />
                <meta
                    name="twitter:title"
                    content="About Us - GitHub Community SRM"
                />
                <meta
                    name="twitter:description"
                    content="Discover the story behind GitHub Community SRM, a hub for collaborative open-source projects at SRMIST."
                />
                <meta name="twitter:image" content="/public/logo.png" />
                <meta name="twitter:site" content="@GithubSrm" />
                <meta
                    name="twitter:url"
                    content="https://githubsrmist.tech/about"
                />

                <meta
                    property="og:title"
                    content="About Us - GitHub Community SRM"
                />
                <meta
                    property="og:description"
                    content="GitHub Community SRM is a space for collaboration and open-source innovation at SRMIST. Learn more about our journey."
                />
                <meta
                    property="og:url"
                    content="https://githubsrmist.tech/about"
                />
                <meta property="og:image" content="/public/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="GitHub Community SRM" />
            </Head>
            <Hero />
            <div className="border-gradient filter rounded-xl lg:mx-28 mx-4 font-dmSan">
                <section
                    className={"bg-black relative drop-shadow-glow rounded-xl"}
                >
                    <div className="px-8 py-12 sm:px-12 sm:py-14">
                        <h2 className=" font-bold text-4xl sm:text-5xl mb-8 font-poppins">
                            The{" "}
                            <span className="text-bright_green">GitHub</span>{" "}
                            Story
                        </h2>
                        <div className="lg:text-2xl text-md sm:text-lg text-left font-dmSans">
                            In the hidden corners of SRM, a ragtag group of
                            coders gathered online. United by their passion for
                            unconventional projects. They ditched the usual
                            routines, delved in coding lingos, secret chat
                            channels filled with cryptic clues and inside jokes.
                            Their identities might be lost, but their creations
                            tell a different story. Built with a blend of
                            diverse skills and backgrounds, these quirky
                            projects occasionally emerge from the shadows, like
                            unexpected bursts of confetti in the GitHub world.
                            <br />
                            <br />
                            This underground community thrives on inclusivity
                            and collaboration. Contributions matter, not resume.
                            Fear of failure fades away, replaced by the
                            excitement of discovery and the endless
                            possibilities of experimentation. Equity and
                            collectivity at GitHub Community SRM ensures that
                            every voice shapes the group's direction. SRM's
                            hidden enclave is more than just a coding club; it's
                            a sanctuary for creativity, a place where minds
                            dance freely, unbound by the constraints of online
                            personas and the pressure to chase digital fame.
                            <br />
                            <br />
                            Here at GitHub Community SRM, the focus is on  pure
                            joy of exploration and the magic that unfolds when
                            talented individuals join forces. Forget flashy
                            setups and midnight hacking sprees. These coders
                            huddle in stolen moments between classes, commutes,
                            and day/night jobs. Laptops hum on rickety library
                            tables and cramped coffee shop corners, lit by the
                            harsh glare of overhead lights. The soundtrack is
                            the urban symphony of honking horns and chatter,
                            punctuated by the click-clack of keyboards and the
                            hushed murmur of debate over a cryptic commit
                            message. GitHub becomes their playground, codel logs
                            morphing into treasure maps, documentation of a
                            cryptic language only they understand. Anonymity
                            reigns, liberating them to fail fast and iterate
                            wildly.
                            <br />
                            <br />
                            There's no pressure to impress, no online persona to
                            uphold. It's about the shared thrill of the hunt,
                            the satisfaction of piecing together a puzzle with a
                            ragtag team of digital alchemists. This is the
                            hidden life of GCSRM, a testimony of collaboration
                            that sparks not in some virtual utopia, but in the
                            gritty interstices of everyday life. Every branch is
                            a new opportunity, Every merge is a step towards
                            code enlightenment. Fork your path to success. May
                            the force be with you!
                        </div>
                    </div>
                </section>
            </div>
            <style jsx>{`
                .drop-shadow-glow {
                    box-shadow: 0 0 26px rgba(13, 255, 78, 0.6);
                    transition: box-shadow 0.3s ease-in-out;
                }

                .border-gradient:hover {
                    box-shadow: 0 0 15px 10px rgba(0, 228, 61, 0.5);
                    background: linear-gradient(
                        to bottom,
                        #00e43d,
                        #000000,
                        #00e43d
                    );
                    border-image: linear-gradient(
                        to bottom,
                        #00e43d,
                        #000000,
                        #00e43d
                    );
                    filter: drop-shadow(0 0 26px rgba(13, 255, 78, 0.1));
                    transition: box-shadow 0.3s ease-in-out;
                }
            `}</style>
        </div>
        {/* Google Tag Manager (noscript) */}
        <noscript>
            <iframe 
                src="https://www.googletagmanager.com/ns.html?id=GTM-TXXTQDRC"
                height="0" 
                width="0" 
                style={{ display: 'none', visibility: 'hidden' }}>
            </iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        </>
    );
}

export default AboutUs;
