import Head from "next/head";
import React from "react";
import ContactForm from "@/components/Contact/ContactForm";
import Faq from "@/components/Contact/Faq";

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact | GitHub Community SRM</title>
                <meta
                    name="description"
                    content="Have a query? Contact the GitHub Community SRM team and we will get back to you shortly. Explore frequently asked questions to find instant answers."
                />
                <meta
                    name="keywords"
                    content="Contact, GitHub Community SRM, queries, FAQ, support"
                />
                <link
                    rel="canonical"
                    href="https://githubsrmist.tech/contact"
                />
                <meta
                    property="og:title"
                    content="Contact Us | GitHub Community SRM"
                />
                <meta
                    property="og:description"
                    content="Need help? Contact the GitHub Community SRM for support and queries. Check out our FAQ section for instant answers."
                />
                <meta
                    property="og:url"
                    content="https://githubsrmist.tech/contact"
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="GitHub Community SRM" />
            </Head>
            <div className="mt-0 top-0 overflow-x-hidden bg-bg_black">
                <ContactForm />
                <div>
                    <Faq />
                </div>
            </div>
        </>
    );
};

export default Contact;
