import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const routes = [
  { path: "/", label: "Thuis" },
  { path: "/about", label: "Over mij" },
  { path: "/projects", label: "Projecten" },
  { path: "/contact", label: "contact" },
];

export const Links = ({
  className,
  onClick,
  isMobile = false,
}: {
  className?: string;
  onClick?: () => void;
  isMobile?: boolean;
}) => {
  const pathName = usePathname();

  const variants = {
    initial: {
      opacity: 0,
      scale: 1.5,
      //   y: -20,
    },
    enter: {
      opacity: 1,
      scale: 1,
      //   y: 0,
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      //   y: 20,
    },
  };

  return routes.map((route, key) => (
    <MotionWrapper
      key={key}
      condition={isMobile}
      wrapper={(children) => (
        <motion.div variants={variants}>{children}</motion.div>
      )}
    >
      <Link
        href={route.path === "/" ? "/" : route.path}
        className={twMerge("relative pb-0.5 uppercase", className)}
        onClick={onClick}
      >
        {route.label}
        {pathName === route.path && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 hidden h-0.5 bg-black dark:bg-white md:block"
            layoutId="underline"
          />
        )}
      </Link>
    </MotionWrapper>
  ));
};

const MotionWrapper = ({
  condition,
  wrapper,
  children,
}: {
  condition: boolean;
  wrapper: (_children: React.ReactElement) => React.ReactElement;
  children: React.ReactElement;
}) => (condition ? wrapper(children) : children);
