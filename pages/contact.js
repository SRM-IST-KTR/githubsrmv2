import Head from "next/head";
import React from "react";
import ContactForm from "@/components/Contact/ContactForm";
import Faq from "@/components/Contact/Faq";
import Script from 'next/script';


const Contact = () => {
    return (
        <>
            <Head>
                {/* Google Tag Manager */}
                <Script
                    id="google-tag-manager"
                    dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TXXTQDRC');`
                }}
                />
                {/* End Google Tag Manager */}
                <title>Contact Us | GitHub Community SRM | Support & Queries</title>
                <meta name="description" content="Need help or have a query? Contact the GitHub Community SRM team for support and assistance. Explore our FAQ section for quick answers to common questions." />
                <meta name="keywords" content="Contact, GitHub Community SRM, support, queries, FAQ, community help, reach out, open source support, SRMIST GitHub, GitHub Community support" />
                <link
                    rel="canonical"
                    href="https://githubsrmist.tech/contact"
                />
                <meta property="og:title" content="Contact Us | GitHub Community SRM | Support & Queries" />
                <meta property="og:description" content="Need help or have a query? Contact the GitHub Community SRM team for assistance. Explore our FAQ section for quick answers." />
                <meta property="og:url" content="https://githubsrmist.tech/contact" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="GitHub Community SRM" />
                <meta property="og:image" content="/public/contact_us_image.png" />

                <meta name="twitter:card" content="/public/Logo.png" />
                <meta name="twitter:title" content="Contact Us | GitHub Community SRM | Support & Queries" />
                <meta name="twitter:description" content="Need help or have a query? Contact the GitHub Community SRM team for support and assistance. Check out our FAQ section for quick answers." />
                <meta name="twitter:image" content="/public/Logo.png" />
                <meta name="twitter:site" content="@GithubSrm" />
                <meta name="twitter:url" content="https://githubsrmist.tech/contact" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "url": "https://githubsrmist.tech/contact",
                        "description": "Contact GitHub Community SRM for support, queries, or assistance. We are here to help with open source and community-related questions.",
                        "contactOption": [
                            {
                                "@type": "ContactPoint",
                                "telephone": "+91-9474182596",
                                "contactType": "Customer Support",
                                "email": "support@githubsrmist.tech"
                            }
                        ]
                    })}
                </script>
            </Head>
            <div className="mt-0 top-0 overflow-x-hidden bg-bg_black">
                <ContactForm />
                <div>
                    <Faq />
                </div>
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

export default Contact;
