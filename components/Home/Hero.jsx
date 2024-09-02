import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full h-[80vh] overflow-hidden">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/bghero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-bg_black"></div>

            {/* Updated to vertically center the content */}
            <div className="relative z-10 flex flex-col h-full px-6 md:px-12 lg:px-24 justify-center items-start lg:pl-48">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins text-[#0DFF4E]">
                    GitHub
                </h1>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white">
                    Community SRM
                </h2>
                <p className="mt-4 text-lg md:text-xl lg:text-xl text-white font-dmSans">
                    The Official student-led community affiliated with GitHub
                </p>
                <p className="text-lg md:text-xl lg:text-xl text-white font-dmSans">
                    Spearheading the open-source revolution at SRMIST
                </p>
                <a href="https://www.instagram.com/githubsrm/" target="_blank" rel="noopener noreferrer">
                    <button className="mt-8 text-black bg-[#0DFF4E] font-extrabold rounded-full py-2 px-4 w-48 max-w-xs opacity-95 hover:opacity-100 transition-opacity duration-300">
                        Join Us
                    </button>
                </a>
            </div>
        </section>
    );
};

export default Hero;