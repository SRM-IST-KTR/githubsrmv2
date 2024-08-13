import React from 'react'
// import aboutUsHero from "@/public/teamPic.png";
import aboutUsHero from "@/public/teamPic2.jpg";
const Hero = () => {
    return (
        <section
            className="mt-0 top-0 overflow-x-hidden h-[60vh]"
            style={{
                backgroundImage: `url(${aboutUsHero.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center 60%",
                position: "relative",
                backgroundAttachment: "fixed", //fix the background image while scrolling to look good
            }}>
            <div className=' py-8 md:py-16 lg:py-16'>
                <div className="flex justify-start items-center relative z-10">
                    <div className="text-left">
                        <h1 className="lg:text-7xl text-4xl font-bold mt-10 xl:mt-20 md:mt-20 px-8 lg:px-60 text-bright_green">
                            Our Story
                        </h1>
                        <br />
                        <div className="lg:text-7xl text-2xl font-semibold px-8 lg:px-60 text-white">
                            Github Community SRM
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg_black"></div>
            </div>
        </section>
    )
}

export default Hero
