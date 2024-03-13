import Gallery from "@/components/Home/Gallery";
import Image from "next/image";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Gallery/>
  );
}
