import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Tech from "@/components/Tech";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Head from "next/head";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <Head>
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
        </Head>
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Tech />
          <Grid />
          <RecentProjects />
          <Experience />
          <Approach />
          <Footer />
        </div>
      </main>
    </>
  );
}
