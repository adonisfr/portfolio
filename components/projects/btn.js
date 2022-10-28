import Link from "next/link";

export default function Btn({ text, href = "" }) {
  return (
    <Link href={href}>
      <a
        target="_blank"
        className="bg-blue-500 dark:bg-gray-900 hover:bg-blue-400 dark:hover:bg-gray-700 px-3 py-1 rounded-md text-white dark:text-gray-200 font-semibold"
      >
        {text}
      </a>
    </Link>
  );
}
