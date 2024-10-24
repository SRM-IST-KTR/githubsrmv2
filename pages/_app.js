import "@/styles/globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import Scroll from "@/components/Shared/Scroll";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
    return (
        <>
        <Analytics/>
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
                <title>GitHub Community SRM | Open Source | SRM Institute of Science & Technology</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="language" content="English" />
                <meta name="geo.region" content="US;IN" />
                <meta name="geo.placename" content="New York;Mumbai" />
                <meta name="theme-color" content="#000000" />
                <meta name="revisit-after" content="7 days" />
                <meta name="rating" content="General" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="bingbot" content="index, follow" />
                <meta name="msnbot" content="index, follow" />
                <meta name="alexabot" content="index, follow" />
                <meta name="slurp" content="index, follow" />
                <meta name="yahoobot" content="index, follow" />
                <meta name="webcrawlers" content="index, follow" />
                <meta name="spiders" content="index, follow" />
                <meta name="google" content="index, follow" />
                <meta name="google-site-verification" content="google-site-verification= " />
                <meta property="og:site_name" content="GitHub Community SRM - The Official student-led community affiliated with GitHub, spearheading the open-source revolution at SRMIST." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://githubsrmist.tech" />
                <link rel="canonical" href="https://githubsrmist.tech" />

                <meta property="image" content="../public/favicon.ico" />
                <meta
                    name="description"
                    content="GitHub Community SRMIST: The official student-led group promoting Open Source at SRM Institute of Science and Technology. Join us for coding, development, and more."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="keywords" content="GitHub, Open Source, SRMIST, SRM Institute of Science and Technology, GitHub SRM, Developer Community SRM, GitHub SRMIST, Open Source Projects, GitHub Student Programs, SRMIST Open Source Contributions" />
                <meta name="author" content="GitHub Community SRM" />

                <meta name="twitter:card" content="/public/logo.png" />
                <meta name="twitter:title" content="GitHub Community SRM - Open Source at SRMIST" />
                <meta
                    name="twitter:description"
                    content="The Official student-led community affiliated with GitHub, spearheading the open-source revolution at SRMIST."
                />
                <meta name="twitter:image" content="/public/logo.png" />
                <meta name="twitter:site" content="@GithubSrm" />
                <meta
                    name="twitter:url"
                    content="https://www.twitter.com/GithubSrm"
                />

                <meta property="og:site_name" content="GitHub Community SRM" />
                <meta property="og:title" content="GitHub Community SRMIST | Open Source at SRMIST" />
                <meta property="og:description" content="GitHub Community SRM is the student-led open-source community at SRM Institute of Science and Technology." />
                <meta property="og:url" content="https://githubsrmist.tech" />
                <meta property="og:image" content="/public/Logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:see_also" content="https://github.com/SRM-IST-KTR" />
                <meta property="og:see_also" content="https://www.instagram.com/githubsrm/" />
                <meta property="og:see_also" content="https://www.linkedin.com/company/githubsrm" />

                <link rel="canonical" href="https://githubsrmist.tech" />

                <link rel="icon" href="/favicon.ico" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "GitHub Community SRM",
                            "url": "https://githubsrmist.tech",
                            "logo": "https://githubsrmist.tech/logo.png",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "email": "community@githubsrmist.tech",
                                "contactType": "Customer Support",
                                "url": "https://githubsrmist.tech/contact"
                            },
                            "sameAs": [
                                "https://www.instagram.com/githubsrm/",
                                "https://github.com/SRM-IST-KTR",
                                "https://www.linkedin.com/company/githubsrm"
                            ],
                            "description": "GitHub Community SRM is a student-led open-source community at SRM Institute of Science and Technology, promoting open-source development and collaboration.",
                            "location": {
                                "@type": "Place",
                                "name": "SRM Institute of Science and Technology",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "SRM Nagar",
                                    "addressLocality": "Kattankulathur",
                                    "addressRegion": "TN",
                                    "postalCode": "603203",
                                    "addressCountry": "IN"
                                }
                            }
                        })
                    }}
                />
            </Head>
            <Navbar />
            <Component {...pageProps} />
            <div className="z-500">
                <Scroll />
            </div>
            <Footer />
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
}

export default MyApp;
