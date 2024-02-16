"use client";
import Link from "next/link";
import { Logo } from "../branding/Logo";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const routes = [
  { path: "/about", label: "Over mij" },
  { path: "/projects", label: "Projecten" },
  { path: "/contact", label: "contact" },
];

export const MainNavigation = () => {
  const pathName = usePathname();
  return (
    <nav
      id="main-navigation"
      className="sticky top-0 p-4 flex flex-col items-center gap-y-2 bg-black"
    >
      <Link href={"/#top"}>
        <Logo className="h-20 fill-black dark:fill-white" />
      </Link>
      <div className="flex gap-x-2">
        {routes.map((e, i) => (
          <Link
            key={i}
            href={e.path}
            className={twMerge(
              "pb-1 uppercase",
              pathName === e.path && "border-b-2 border-white"
            )}
          >
            {e.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
