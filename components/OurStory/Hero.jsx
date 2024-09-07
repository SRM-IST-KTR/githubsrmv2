import React from "react";
// import aboutUsHero from "@/public/teamPic.png";
import aboutUsHero from "@/public/Group_1.png";
const Hero = () => {
    return (
        <section
            className="mt-0 top-0 overflow-x-hidden h-[100vh] bg-opacity-50 bg-center bg-no-repeat bg-cover relative"
            style={{
                backgroundImage: `url(${aboutUsHero.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center 60%",
                position: "relative",
                backgroundAttachment: "fixed" //fix the background image while scrolling to look good
            }}
        >
            <div className="py-64 md:py-16 lg:py-64 font-poppins h-[80vh] sm:h-[90vh]">
                <div className="flex justify-center items-center relative z-10 h-full">
                    <h1 className="text-5xl sm:text-8xl font-bold font-poppins  px-8 lg:px-60">
                        Our <span className="text-bright_green">Story</span>
                    </h1>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg_black"></div>
            </div>
        </section>
    );
};

export default Hero;
