import Skill from "./skill";
import skills from "./skills.json";

export default function About() {
  return (
    <div className="flex flex-col gap-16 lg:flex-row">
      <div className="flex flex-col w-full gap-5 lg:w-1/2">
        <h1 className="font-elMessiri text-7xl text-center ">About Me</h1>
        <p>
          Bachelor of Computer Science, with experience working in web
          application development. Ability to prioritize and perform multiple
          tasks in a relatively complex environment. Ability to communicate
          effectively with internal IT staff and company staff. Entrepreneur and
          fast learner who enjoys solving problems.
        </p>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 gap-8">
        <h1 className="font-elMessiri text-7xl text-center ">
          Technical Skills
        </h1>
        <div className="flex flex-row flex-wrap px-5 justify-center gap-6">
          {skills.map((item) => (
            <Skill key={item.name} name={item.name} logo={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
