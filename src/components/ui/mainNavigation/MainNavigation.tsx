"use client";
import Link from "next/link";
import { Logo } from "../../branding/Logo";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Links } from "./Links";
import { MenuToggle } from "./MenuToggle";
import { useEffect } from "react";

export const MainNavigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const variants = {
    initial: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    enter: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  };

  useEffect(() => {
    isOpen
      ? document.body.classList.add("h-full", "overflow-hidden")
      : document.body.classList.remove("h-full", "overflow-hidden");
  }, [isOpen]);
  return (
    <>
      <nav
        id="main-navigation"
        className="top-0 z-30 flex w-full justify-center self-start p-4"
      >
        <div className="flex w-full max-w-5xl items-center justify-between">
          <Link href={"/"}>
            <Logo className="h-16 fill-black dark:fill-white" />
          </Link>
          <div className="pr-2 md:hidden">
            <MenuToggle isOpen={isOpen} onClick={() => toggleOpen()} />
          </div>
          <div className="hidden items-center gap-x-2 md:flex">
            <Links />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="absolute left-0 top-0 z-20 flex h-screen w-screen flex-col items-center justify-center gap-y-12 bg-white pt-24 dark:bg-black md:hidden"
          >
            <Links className="text-xl" onClick={() => toggleOpen()} isMobile />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
