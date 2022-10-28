import Education from "./education";
import Skill from "./skill";
import skills from "./skills.json";
import useTranslator from "../hooks/useTranslator";

export default function About() {
  const t = useTranslator();
  return (
    <section
      id="about"
      className="flex flex-col gap-16 pt-32 lg:flex-row dark:text-gray-300"
    >
      <div className="flex flex-col w-full gap-5 lg:w-1/2">
        <h1 className="font-elMessiri text-7xl text-center ">
          {t.about.title}
        </h1>
        <p>{t.about?.summary}</p>
        <div className="hidden lg:flex">
          <Education />
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 gap-8">
        <h1 className="font-elMessiri text-5xl text-center ">
          {t.about.skills}
        </h1>
        <div className="flex flex-row flex-wrap px-5 justify-center gap-6">
          {skills.map((item) => (
            <Skill key={item.name} name={item.name} logo={item.image} />
          ))}
        </div>
      </div>
      <div className="lg:hidden">
        <Education />
      </div>
    </section>
  );
}
