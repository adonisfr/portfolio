import Link from "next/link";

export default function Btn({ text, href = "" }) {
  return (
    <Link href={href}>
      <a className="bg-blue-500 hover:bg-blue-400 px-3 py-1 rounded-md text-white font-semibold">
        {text}
      </a>
    </Link>
  );
}
