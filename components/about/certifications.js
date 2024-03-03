import useTranslator from "../hooks/useTranslator";
export default function Certifications() {
  const t = useTranslator();
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div>
        <h1 className="font-elMessiri text-4xl mb-3">
          {t.about.certificationsLicenses.title}
        </h1>
      </div>
      <ul className="list-disc pl-6">
        {t.about.certificationsLicenses.certifications.map((i, idx) => {
          return (
            <li key={idx}>
              {`${i.date} - `}
              <a href={i.link} target="_blank">
                {i.title}
              </a>
              {` - `} <span className="underline pl-2">Coursera.org</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
