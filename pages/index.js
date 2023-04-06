import Head from "next/head";
import styles from "@/styles/Home.module.css";
import HomeCarousel from "@/components/HomeCarousel";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { AiOutlineMail, AiOutlineGithub } from "react-icons/ai";

export default function Home() {
  return (
    <div className="h-[calc(100vh_-_87px)] w-screen ">
      <Head>
        <title>Levis Nyingi</title>
        <meta name="description" content="Levis Nyingi portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" m-0 pt-20 flex flex-col space-y-10 h-fit w-full ">
        <div className="">
          <HomeCarousel />
        </div>
        <div className="flex gap-6 flex-col md:flex-row md:px-[97px] items-center justify-between w-full mx-auto">
          <div className="order-last md:order-first">Scroll to Navigate</div>
          <div className="flex text-4xl justify-around px-16 sm:px-44 w-full md:w-fit md:text-2xl md:px-0 md: gap-3">
            <FaWhatsapp />
            <AiOutlineMail />
            <AiOutlineGithub />
            <FaFacebookF />
          </div>
        </div>
      </div>
    </div>
  );
}
