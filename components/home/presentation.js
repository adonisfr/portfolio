import Image from "next/image";
import picture from "./f.jpg";
import Link from "next/link";
import useTraslator from "../hooks/useTranslator";
import LinkedinIcon from "../social/linkedinIcon";
import EmailIcon from "../social/emailIcon";
import GithubIcon from "../social/githubIcon";

export default function Presentation() {
  const t = useTraslator();
  return (
    <section
      id="home"
      className="flex flex-col w-full pt-28 lg:justify-between items-center lg:flex-row  h-screen gap-8  pb-5 dark:bg-slate-900 dark:text-gray-300"
    >
      <div className="flex flex-col  gap-3 lg:w-full md:pb-12 pt-5 md:pt-10">
        <h1 className="font-serif font-semibold text-2xl">
          {t.presentation.greeting}
        </h1>
        <p className="font-elMessiri text-5xl"> ADONIS A. FERNANDEZ REYES</p>
        <p className="text-3xl font-medium"> {t.presentation.profession}</p>
        <div className="flex flex-row gap-8">
          <Link href="mailto:adonisfernandezr@gmail.com">
            <a target="_blank">
              <EmailIcon />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/adonisfr">
            <a target="_blank">
              <LinkedinIcon />
            </a>
          </Link>
          <Link href="https://github.com/adonisfr">
            <a target="_blank">
              <GithubIcon />
            </a>
          </Link>
        </div>
      </div>
      <div className="flex justify-center w-full lg:w-1/2 ">
        <div className="border-x-4 border-y-4 rounded-full bg-gray-400 ">
          <Image
            src={picture}
            alt="picture"
            height={400}
            width={400}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
