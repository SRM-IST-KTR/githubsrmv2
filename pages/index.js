import React from "react";
import AboutUs from "@/components/Home/About";
import Domains from "@/components/Home/Domains";
import Gallery from "@/components/Home/Gallery";
import ContactForm from "@/components/Contact/ContactForm";

const Index = () => {
    return (
        <div className="bg-bg_black">
    <section className="relative bg-transparent">
    <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/Figma%20video.mp4"
        autoPlay
        muted
        loop
    ></video>
    <div className="relative mx-auto p-24 font-family: Inter">
        <h1 className="text-4xl font-bold text-white">GitHub</h1>
        <h2 className="text-4xl font-bold text-white">Community SRM</h2>
        <p className="mt-4 text-lg text-white">
            The Official student-led community affiliated with GitHub
        </p>
        <p className="text-xl text-white">
            Spearheading the open-source revolution at SRMIST
        </p>
        <a href="https://www.instagram.com/githubsrm/" target="_blank" rel="noopener noreferrer">
            <button className="text-black bg-[#0DFF4E] font-semibold rounded-full py-2 px-4 w-[15%] max-md:w-[70%] my-8 opacity-95">
                Join Us
            </button>
        </a>
    </div>
</section>


    <section>
        <div className="AboutUsContainer">
            <AboutUs />
        </div>
    </section>

    <section>
        <Domains />
    </section>

    <section className="overflow-hidden h-[400px]">
        <Gallery />
    </section>

    <section>
        <ContactForm />
    </section>
</div>

    );
};

export default Index;
