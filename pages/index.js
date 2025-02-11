import React from "react";
import Hero from "@/components/Home/Hero";
import AboutUs from "@/components/Home/About";
import Domains from "@/components/Home/Domains";
import Gallery from "@/components/Home/Gallery";
import Sponsors from "@/components/Home/Sponsors";
import ContactForm from "@/components/Contact/ContactForm";
import Head from "next/head";

const Index = () => {
    return (
        <>
        <Head>
            {/* Google Tag Manager */}
            <script
            dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TXXTQDRC');`
            }}/>
            {/* End Google Tag Manager */}
        </Head>
        <div className="bg-bg_black">
<<<<<<< HEAD
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



  
  <section class=" mt-[100px] flex flex-col lg:mt-0">
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

=======
            <Hero />
            <AboutUs />
            <Domains />
            <Sponsors />
            <div className="overflow-hidden h-[500px]">
                <Gallery />
            </div>
            <ContactForm />
        </div>
        {/* Google Tag Manager (noscript) */}
        <noscript>
            <iframe 
                src="https://www.googletagmanager.com/ns.html?id=GTM-TXXTQDRC"
                height="0" 
                width="0" 
                style={{ display: 'none', visibility: 'hidden' }}>
            </iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        </>
>>>>>>> 5369fea20d9b4a91aefe1d253850f160c0521c73
    );
};

export default Index;