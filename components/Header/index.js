import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

import { FiSun, FiMoon, FiGithub } from "react-icons/fi";

export default function Header() {
  const switchTheme = () => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

  useEffect(() => {
    switchTheme();
  }, []);
  return (
    <div>
      <Head>
        <title>Online SQL Editor</title>
        <meta
          name="description"
          content="Run SQL online with this editor and also use their API!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="border-b-[1px] border-darkBGColor/25 dark:border-white/25 w-full px-4">
        <div className="max-w-screen-xl m-auto flex justify-between items-center h-16 text-2xl text-darkBGColor dark:text-darkTextColor">
          <span className="">Online SQL Editor</span>
          <div className="flex gap-4">
            <span className="cursor-pointer" onClick={switchTheme}>
              <FiSun className="hidden dark:block" />
              <FiMoon className="block dark:hidden" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
