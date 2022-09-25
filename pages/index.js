import Head from "next/head";
import Image from "next/image";
import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Footer from "../components/footer";
import Presentation from "../components/home/presentation";
import NavBar from "../components/navBar/navBar";
import Projects from "../components/projects/projects";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Profesional portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="px-6 h-full lg:container mx-auto space-y-10">
        <Presentation />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
