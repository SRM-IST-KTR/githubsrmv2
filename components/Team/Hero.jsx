import React from 'react'
import heroimg_events from "@/public/heroimg_events.png";
const Hero = () => {
    return (
        <section
            className="mt-0 top-0 overflow-x-hidden"
            style={{
                backgroundImage: `url(${heroimg_events.src})`,
                backgroundSize: "cover",
                position: "relative",
                backgroundAttachment: "fixed", //fix the background image while scrolling to look good
            }}>
            <div className='bg-black/40 py-8 md:py-16 lg:py-16'>
                <div className="flex justify-start items-center relative z-10">
                    <div className="text-left">
                        <h1 className="text-6xl font-bold mt-10 xl:mt-20 md:mt-20 px-8 lg:px-60">
                            Our <span className="text-bright_green">Team</span>
                        </h1>
                        <br />
                        <p className="lg:text-3xl text-xl font-semibold px-8 lg:px-60 text-justify">
                            The GitHub Community SRM introduces you to the dynamic and collaborative ecosystem of our diverse teams. Discover passionate individuals driving innovation in areas ranging from open-source contributions to cutting-edge tech projects. Meet our dedicated team members, explore their expertise, and learn about the exciting projects they're working on. Whether you're interested in coding, design, or community engagement, find your niche and connect with like-minded enthusiasts on our Teams page. Join us in shaping the future of technology at GitHub SRM!
                        </p>
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
