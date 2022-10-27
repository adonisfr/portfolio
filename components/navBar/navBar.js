import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useTranslator from "../hooks/useTranslator";
import LanguageSelector from "../selector/languageSelector";

export default function NavBar() {
  const t = useTranslator();
  const { home, about, project, contact } = t.navbar.links;
  const [open, setOpen] = useState(false);
  const links = [
    { name: home, href: "#home" },
    { name: about, href: "#about" },
    { name: project, href: "#projects" },
    { name: contact, href: "#contact" },
  ];
  return (
    <nav className="fixed z-50 h-16 w-full shadow-md bg-white">
      <div className="h-18 md:h-16 md:flex md:justify-between md:items-center bg-white py-4 px-7 lg:container lg:mx-auto">
        <div className="">
          <span className="font-semibold text-3xl">
            <Link href="/">
              <a>
                {"{"}A2nis F.R{"}"}
              </a>
            </Link>
          </span>
        </div>
        <div className="absolute md:hidden right-8 top-6 ">
          <Image
            src={!open ? "/icon-hamburger.svg" : "/icon-close.svg"}
            alt="icon"
            width={18}
            height={18}
            onClick={() => setOpen(!open)}
          />
        </div>
        <ul
          className={`absolute font-semibold text-xl shadow-md md:shadow-none w-full pb-4  md:flex md:items-center md:pb-0 left-0 
                       md:z-auto z-[-1] md:w-auto md:static bg-white transition-all ease-in duration-300 ${
                         open ? "top-[69px] opacity-100" : "top-[-490px]"
                       }`}
        >
          {links.map((link) => (
            <li key={link.name} className="pl-9 py-3">
              <Link href={link.href}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
          <li>
            <div className="flex justify-center">
              <LanguageSelector />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
