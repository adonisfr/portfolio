import Image from "next/image";
import picture from "./f.jpg";
import email from "./email.svg";
import linkedin from "./linkedin.svg";

export default function Presentation() {
  return (
    <div className="flex  flex-col w-full lg:justify-between items-center lg:flex-row  h-full gap-8  pb-5">
      <div className="flex flex-col  gap-3 lg:w-full md:pb-12 pt-5 md:pt-10">
        <h1 className="font-serif font-semibold text-2xl">
          Hello! 👋 My name is
        </h1>
        <p className="font-elMessiri text-5xl"> ADONIS A. FERNANDEZ REYES</p>
        <p className="text-3xl font-medium"> {`I'am a Front-end Developer.`}</p>
        <div className="flex flex-row gap-8">
          <Image src={email} alt="email" height={44} width={44} />
          <Image src={linkedin} alt="email" height={48} width={48} />
          <Image src="/skills/github.svg" alt="email" height={44} width={44} />
        </div>
      </div>
      <div className="flex justify-center w-full lg:w-1/2 ">
        <Image src={picture} alt="picture" height={400} width={400} />
      </div>
    </div>
  );
}
