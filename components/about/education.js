import useTranslator from "../hooks/useTranslator";
export default function Education() {
  const t = useTranslator();
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-elMessiri text-5xl mb-3">
        {t.about.education.title}
      </h1>
      <ul className="list-disc pl-6">
        <li>
          {t.about.education.degree}
          <span className="underline pl-2">{t.about.education.university}</span>
        </li>
      </ul>
    </div>
  );
}
