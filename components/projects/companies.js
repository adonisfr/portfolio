import useTraslator from "../hooks/useTranslator";

export default function Companies() {
  const t = useTraslator();
  return (
    <div className="flex flex-col items-center  w-full dark:text-gray-300">
      <h1 className="font-serif text-4xl py-3">{t.jobs.title}</h1>
      <div className="flex flex-col justify-center gap-3">
        <h1 className="font-sans font-semibold self-center text-xl">
          {t.jobs.companies.first.name}
          <span className="bg-slate-300 px-1 ml-1 underline dark:bg-gray-700">
            {t.jobs.companies.first.rol}
          </span>
        </h1>
        <div className="flex flex-row gap-3 md:gap-5 mb-10">
          <div className="flex flex-col justify-center items-center">
            <div className="border-x-2 border-y-2 px-1 border-gray-500">
              <p className="font-serif text-xl font-semibold">2021</p>
            </div>
            <div className="h-full bg-gray-500 w-1" />
            <div className="border-x-2 border-y-2 px-1 border-gray-500">
              <p className="font-serif text-xl font-semibold">2014</p>
            </div>
          </div>
          <ul className="list-disc text-lg px-3 space-y-4">
            <li>{t.jobs.companies.first.projects.project7}</li>
            <li>{t.jobs.companies.first.projects.project6}</li>
            <li>{t.jobs.companies.first.projects.project5}</li>
            <li>{t.jobs.companies.first.projects.project4}</li>
            <li>{t.jobs.companies.first.projects.project3}</li>
            <li>{t.jobs.companies.first.projects.project2}</li>
            <li>{t.jobs.companies.first.projects.project1}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
