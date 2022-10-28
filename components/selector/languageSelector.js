import { useRouter } from "next/router";
export default function LanguageSelector() {
  const router = useRouter();

  const handleChange = (e) => {
    router.push(router.asPath, router.asPath, { locale: e.target.value });
  };

  return (
    <select
      className="md:ml-5 md:hover:cursor-pointer border-2 border-gray-900 
      dark:border-gray-100 dark:bg-slate-900 dark:text-gray-100
      dark:active:border-gray-100 rounded-lg"
      defaultValue={router.locale}
      onChange={handleChange}
    >
      <option value="es">ES</option>
      <option value="en">EN</option>
    </select>
  );
}
