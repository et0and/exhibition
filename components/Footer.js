import Link from "next/link";
import SingleColumn from "./SingleColumn";
import Section from "./Section";
import { contact } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="mt-20 layout px-4 md:px-8 flex justify-between items-center pt-8 md:pt-10 lg:pt-12 pb-10 md:pb-12 lg:pb-24">
        <Link href="/">
          <a className="type-ui">Exhibitions</a>
        </Link>

        <nav className="flex">
        {/* <Link href="/faq">
          <a className="type-ui mr-4">FAQ</a>
        </Link> */}
        <a className="type-ui flex" href="https://tewahi.com" target="_blank">Te Wāhi Auaha <div className="font-sans w-8 h-8 rounded-full bg-wall-600 dark:bg-antiwall-600 ml-2 text-wall-100 dark:text-antiwall-100 flex items-center justify-center"><p className="leading-none pt-0.5">{'↗'}</p></div></a>
        </nav>
    </footer>
  );
}
