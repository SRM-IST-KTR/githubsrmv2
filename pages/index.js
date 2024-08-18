import React from "react";
import AboutUs from "@/components/Home/About";
import Domains from "@/components/Home/Domains";
import Gallery from "@/components/Home/Gallery";
import ContactForm from "@/components/Contact/ContactForm";

const Index = () => {
    return (
        <div className="bg-bg_black">
            <section className="bg-transparent">
                <div className="0px mx-auto p-24 font-family:Inter">
                    <h1 className="text-7xl font-bold text-[#0DFF4E]">GitHub</h1>
                    <h2 className="text-7xl font-bold text-white">Community SRM</h2>
                    <p className="mt-4 text-lg justify-content: space-evenly text-white">
                        The Official student-led community affiliated with
                        GitHub
                    </p>
                    <p className="text-xl justify-content: space-evenly text-white">
                        spearheading the open-source revolution at SRMIST
                    </p>
                    <a href="https://www.instagram.com/githubsrm/" target=" ">
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
