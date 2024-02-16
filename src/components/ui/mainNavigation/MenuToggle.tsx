import { motion, easeIn, easeOut, SVGMotionProps } from "framer-motion";
import { RefAttributes } from "react";

interface MenuToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ isOpen, onClick }) => {
  return (
    <button onClick={onClick}>{isOpen ? <CloseIcon /> : <MenuIcon />}</button>
  );
};

export const MenuIcon = () => {
  return (
    <motion.svg
      id="menu"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 42.83 42.83"
      width="48"
      height="48"
      className="h-8 w-8"
    >
      <Line
        x1="1.41"
        y1="9.41"
        x2="41.41"
        y2="9.41"
        transition={{ duration: 0.1, ease: easeIn }}
      />
      <Line
        x1="41.41"
        y1="21.41"
        x2="1.41"
        y2="21.41"
        transition={{ duration: 0.1, delay: 0.1, ease: easeIn }}
      />
      <Line
        x1="1.41"
        y1="33.41"
        x2="41.41"
        y2="33.41"
        transition={{ duration: 0.2, delay: 0.2, ease: easeOut }}
      />
    </motion.svg>
  );
};

export const CloseIcon = () => {
  return (
    <svg
      id="close"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 42.83 42.83"
      width="48"
      height="48"
      className="h-8 w-8"
    >
      <Line
        x1="3.41"
        y1="3.41"
        x2="39.41"
        y2="39.41"
        transition={{ duration: 0.1, ease: easeIn }}
      />
      <Line
        x1="3.41"
        y1="39.41"
        x2="39.41"
        y2="3.41"
        transition={{ duration: 0.2, delay: 0.1, ease: easeOut }}
      />
    </svg>
  );
};

const Line = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGLineElement> &
    RefAttributes<SVGLineElement>,
) => {
  return (
    <motion.line
      style={{
        fill: "none",
        stroke: "#000",
        strokeMiterlimit: "10",
        strokeWidth: "4px",
      }}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      {...props}
    />
  );
};
