import React from "react";
import AboutUs from "@/components/Home/About";
import Domains from "@/components/Home/Domains";
import Gallery from "@/components/Home/Gallery";
import ContactForm from "@/components/Contact/ContactForm";

const Index = () => {
    return (
        <div className="bg-bg_black">
   <section className="relative bg-transparent ">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute opacity-70 inset-0 object-cover w-full h-screen  pb-[80px]  "
  >
    <source src="/bghero.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="relative mx-auto p-6 md:p-12 lg:p-24 pt-[80px] md:pt-[120px] lg:pt-[160px]">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0DFF4E] leading-tight md:leading-tight lg:leading-tight">
      GitHub
    </h1>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug md:leading-snug lg:leading-snug">
      Community SRM
    </h2>
    <p className="mt-4 text-lg md:text-xl lg:text-xl text-white leading-relaxed md:leading-relaxed lg:leading-relaxed">
      The Official student-led community affiliated with GitHub
    </p>
    <p className="text-lg md:text-xl lg:text-xl text-white leading-relaxed md:leading-relaxed lg:leading-relaxed">
      Spearheading the open-source revolution at SRMIST
    </p>
    <a href="https://www.instagram.com/githubsrm/" target="_blank" rel="noopener noreferrer">
      <button className="text-black bg-[#0DFF4E] font-semibold rounded-full py-2 px-4 w-[15%] max-md:w-[70%] my-8 opacity-95">
        Join Us
      </button>
    </a>
  </div>
</section>



  
  <section class=" flex flex-col lg:mt-0 px-4">
    <div class="AboutUsContainer">
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