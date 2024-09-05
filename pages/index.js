import React from "react";
import Hero from "@/components/Home/Hero";
import AboutUs from "@/components/Home/About";
import Domains from "@/components/Home/Domains";
import Gallery from "@/components/Home/Gallery";
import ContactForm from "@/components/Contact/ContactForm";

const Index = () => {
    return (
        <div className="bg-bg_black">
            <Hero />
            <AboutUs />
            <Domains />
            <div className="overflow-hidden h-[500px]">
                <Gallery />
            </div>
            <ContactForm />
        </div>
    );
};

export default Index;
