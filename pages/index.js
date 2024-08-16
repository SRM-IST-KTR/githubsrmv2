import React from "react";
import Hero from "@/components/Home/Hero";
import AboutUs from "@/components/Home/About";
import Domains from "@/components/Home/Domains";

const Index = () => {
    return (
        <div className="bg-bg_black">
            <section>
                <Hero />;
            </section>
            <section>
                <div className="AboutUsContainer">
                    <AboutUs />
                </div>
            </section>
            <section>
                <Domains />
            </section>
        </div>
    );
};

export default Index;
