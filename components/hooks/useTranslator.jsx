import { useRouter } from "next/router";
import en from "../locales/en";
import es from "../locales/es";

export default function useTraslator() {
  const { locale } = useRouter();
  return locale === "en" ? en : es;
}
