import { useRouter } from "next/router";
export default function LanguageSelector() {
  const router = useRouter();

  const handleChange = (e) => {
    router.push(router.asPath, router.asPath, { locale: e.target.value });
  };

  return (
    <select
      className="md:ml-5 md:hover:cursor-pointer"
      defaultValue={router.locale}
      onChange={handleChange}
    >
      <option value="es">ES</option>
      <option value="en">EN</option>
    </select>
  );
}
