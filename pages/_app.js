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
                    content="The Official student-led community affiliated with GitHub, Spearheading the open-source revolution at SRMIST"
                />
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
