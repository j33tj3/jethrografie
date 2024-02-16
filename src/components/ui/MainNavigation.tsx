"use client";
import Link from "next/link";
import { Logo } from "../branding/Logo";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const routes = [
  { path: "/", label: "Thuis" },
  { path: "/about", label: "Over mij" },
  { path: "/projects", label: "Projecten" },
  { path: "/contact", label: "contact" },
];

export const MainNavigation = () => {
  const pathName = usePathname();
  return (
    <nav
      id="main-navigation"
      className="top-0 z-10 flex w-full justify-center self-start p-4"
    >
      <div className="flex w-full max-w-5xl justify-between">
        <Link href={"/#top"}>
          <Logo className="h-16 fill-black dark:fill-white" />
        </Link>
        <div className="flex items-center gap-x-2">
          {routes.map((e, i) => (
            <Link
              key={i}
              href={e.path === "/" ? "/#top" : e.path}
              className={twMerge(
                "pb-1 uppercase",
                pathName === e.path && "border-b-2 border-black",
              )}
            >
              {e.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
