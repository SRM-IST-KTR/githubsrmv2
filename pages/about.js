import React from "react";
import Hero from "@/components/OurStory/Hero";

function AboutUs() {
    return (
        <div className="bg-bg_black text-white">
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
    );
}

export default AboutUs;
