import Image from "next/image";
import Link from "next/link";
import Btn from "./btn";

export default function CardProject({
  picture,
  name,
  code,
  preview,
  tags,
  company,
  link,
}) {
  return (
    <div className="flex flex-col bg-slate-100 dark:bg-slate-800 pb-4 gap-1 rounded-t-lg rounded-b-xl shadow-lg hover:shadow-black/40 dark:hover:shadow-gray-600/40">
      <div className="relative w-80 h-52 ">
        <Image
          src={picture}
          alt="picture"
          layout="fill"
          className="rounded-t-lg"
        />
        <div className="absolute bottom-2 right-0 bg-gray-500 font-semibold text-white px-1">
          {link ? (
            <Link href={link}>
              <a target="_blank">{company}</a>
            </Link>
          ) : (
            company
          )}
        </div>
      </div>
      <div className="px-3 py-2">
        <div className="pb-3">
          <h1 className="font-semibold text-lg dark:text-gray-200">{name}</h1>
          <div className="flex gap-1">
            {tags.map((t) => (
              <div
                key={t}
                className="flex rounded-sm bg-slate-300 px-1 cursor-default"
              >
                <span className="text-xs font-bold text-gray-900/70">{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-x-2 ">
          <Btn text="Preview" href={preview} />
          <Btn text="Code" href={code} />
        </div>
      </div>
    </div>
  );
}
