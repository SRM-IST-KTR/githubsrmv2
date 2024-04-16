import "@/styles/globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import BodyStory from "@/components/OurStory/BodyStory";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <BodyStory />
      <Footer />
    </>
  );
}

export default MyApp;
