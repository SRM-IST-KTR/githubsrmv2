import "@/styles/globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import Scroll from "@/components/Shared/Scroll";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>GitHub Community SRM</title>
                <meta
                    name="description"
                    content="The Official student-led community affiliated with GitHub, spearheading the open-source revolution at SRMIST."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="keywords"
                    content="GitHub, Open Source, SRMIST, GitHub Community SRM, Coding, Development, Tech Community"
                />
                <meta name="author" content="GitHub Community SRM" />

                <meta name="twitter:card" content="/public/x_logo.png" />
                <meta name="twitter:title" content="GitHub Community SRM" />
                <meta
                    name="twitter:description"
                    content="The Official student-led community affiliated with GitHub, spearheading the open-source revolution at SRMIST."
                />
                <meta name="twitter:image" content="/public/x_logo.png" />
                <meta name="twitter:site" content="@GithubSrm" />
                <meta
                    name="twitter:url"
                    content="https://www.twitter.com/GithubSrm"
                />

                <meta property="og:title" content="GitHub Community SRM" />
                <meta
                    property="og:description"
                    content="Join GitHub Community SRM, an official student-led group affiliated with GitHub, promoting open-source projects at SRMIST."
                />
                <meta property="og:url" content="https://githubsrmist.tech" />
                <meta property="og:image" content="/public/Logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="GitHub Community SRM" />
                <meta
                    property="og:see_also"
                    content="https://www.linkedin.com/company/githubsrm"
                />

                <meta property="og:title" content="GitHub Community SRM" />
                <meta
                    property="og:description"
                    content="Discover GitHub Community SRM on Instagram, where we promote coding, tech, and open-source collaborations."
                />
                <meta
                    property="og:url"
                    content="https://www.instagram.com/githubsrm/"
                />
                <meta
                    property="og:image"
                    content="/public/instagram_logo.png"
                />

                <meta
                    property="og:title"
                    content="GitHub Community SRM on GitHub"
                />
                <meta
                    property="og:description"
                    content="Contribute to open-source projects with GitHub Community SRM. Explore repositories, collaborate, and grow with us."
                />
                <meta
                    property="og:url"
                    content="https://github.com/SRM-IST-KTR"
                />
                <meta property="og:image" content="/public/github_logo.png" />

                <link rel="canonical" href="https://githubsrmist.tech" />

                <link rel="icon" href="/public/favicon.ico" />
            </Head>
            <Navbar />
            <Component {...pageProps} />
            <div className="z-500">
                <Scroll />
            </div>
            <Footer />
        </>
    );
}

export default MyApp;
