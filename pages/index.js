import Image from "next/image";
import { Inter } from "next/font/google";
import about from "./about";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<>
<about/>
</>
  );
}
