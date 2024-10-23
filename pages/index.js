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
    );
};

export default Index;
