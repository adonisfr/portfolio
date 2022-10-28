import Link from "next/link";
import { useState } from "react";
import useTranslator from "../hooks/useTranslator";

export default function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const t = useTranslator();
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center w-full gap-4  py-16 dark:text-gray-300"
    >
      <h1 className="font-elMessiri text-7xl">{t.contact.title}</h1>
      <p className="font-sans font-semibold text-lg">{t.contact.text}</p>
      <div className="flex flex-col  items-center gap-3 w-full justify-center">
        <div className="flex flex-col justify-center md:flex-row gap-3 w-full">
          <input
            type="text"
            required
            className="h-10 w-full md:w-80 border-x-2 border-y-2 border-gray-400 rounded-md px-2"
            placeholder={t.contact.fullName}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            required
            className="h-10 w-full md:w-80  border-x-2 border-y-2 border-gray-400 rounded-md px-2"
            placeholder={t.contact.subject}
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
        </div>
        <textarea
          required
          className="h-28 w-full md:w-[652px] border-x-2 border-y-2 border-gray-400 rounded-md px-2"
          placeholder={t.contact.message}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <div className="flex w-full md:w-[652px] justify-end ">
          <Link
            href={`mailto:adonisfernandezr@gmail.com?subject=${subject}&body=My name is ${name}%0A%0A ${message}%0A%0A`}
          >
            <a className="bg-blue-500 hover:bg-blue-400 px-2 py-2 md:py-1 rounded-md text-white font-semibold ">
              {t.contact.textBtn}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
