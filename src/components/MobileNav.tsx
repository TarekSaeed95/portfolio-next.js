"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { links } from "./Nav";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent>
        <div className="mt-32 mb-40 text-center text-2xl ">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Tarek
              <span className="text-accent ">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, i) => {
            return (
              <Link
                key={i}
                href={link.path}
                className={`text-xl capitalize hover:text-accent transition-all ${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
