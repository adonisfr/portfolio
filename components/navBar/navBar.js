import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed z-50 h-16 w-full shadow-md bg-white">
      <div className="h-18 md:h-16 md:flex md:justify-between md:items-center bg-white py-4 px-7 lg:container lg:mx-auto">
        <div className="">
          <span className="font-semibold text-3xl">
            {"{"}A2nis F.R{"}"}
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
        </ul>
      </div>
    </nav>
  );
}
