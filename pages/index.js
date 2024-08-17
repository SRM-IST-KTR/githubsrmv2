import React from "react";
import AboutUs from "@/components/Home/About";
import Domains from "@/components/Home/Domains";
import ContactForm from "@/components/Contact/ContactForm";

const Index = () => {
    return (
        <div className="bg-bg_black">
            <section className="bg-transparent">
                <div className="0px mx-auto p-24 font-family:Inter">
                    <h1 className="text-4xl font-bold">GitHub</h1>
                    <h2 className="text-4xl font-bold">Community SRM</h2>
                    <p className="mt-4 text-lg justify-content: space-evenly">
                        The Official student-led community affiliated with
                        GitHub
                    </p>
                    <p className="text-lg justify-content: space-evenly">
                        spearheading the open-source revolution at SRMIST
                    </p>
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
            <section>
                <ContactForm />
            </section>
        </div>
    );
};

export default Index;
