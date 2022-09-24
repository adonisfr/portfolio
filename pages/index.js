import Head from "next/head";
import About from "../components/about/about";
import Contact from "../components/contact/contact";
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
      <main className="px-6 h-screen lg:container mx-auto space-y-10">
        <Presentation />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* <footer className="">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
