import CardProject from "./cardProject";
import projects from "./projects.json";
export default function Projects() {
  return (
    <div className="flex flex-col justify-center items-center pt-20 lg:pt-28">
      <h1 className="font-elMessiri text-7xl ">Portfolio</h1>
      <div className="flex flex-col md:flex-row flex-wrap justify-center w-full gap-5 ">
        {projects.map((p) => (
          <div key={p.preview}>
            <CardProject
              name={p.name}
              tags={p.tags}
              code={p.code}
              picture={p.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
