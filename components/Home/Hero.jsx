import React from "react";
import hero from "@/public/homeHero.png";

const Hero = () => {
    return (
        <section
            className="mt-0 top-0 overflow-x-hidden hero-section"
            style={{
                backgroundImage: `url(${hero.src})`,
                backgroundSize: "cover",
                position: "relative",
                backgroundAttachment: "fixed" //fix the background image while scrolling to look good
            }}
        >
            <div className="bg-black/40 py-8 md:py-16 lg:py-16">
                <div className="flex justify-start items-center relative z-10">
                    <div className="text-left">
                        <h1 className="text-6xl font-bold mt-10 xl:mt-20 md:mt-20 px-8 lg:px-60 text-white">
                            GitHub Community
                            <br />
                            SRM
                        </h1>
                        <br />
                        <p className="lg:text-3xl text-xl font-semibold px-8 lg:px-60 text-justify text-white">
                            The Official student-led community affiliated with
                            GitHub
                        </p>
                        <br />
                        <br />
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg_black"></div>
            </div>
        </section>
    );
};
export default Hero;
