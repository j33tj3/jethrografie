"use client";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface ImageFrameProps extends React.AllHTMLAttributes<HTMLDivElement> {
  notResponsive?: boolean;
}

export const ImageFrame: React.FC<ImageFrameProps> = ({
  notResponsive = false,
  children,
  className,
}) => {
  const [slideClass, setSlideClass] = useState<string>("");
  useEffect(() => {
    setSlideClass(
      twMerge(
        "border-8 border-black dark:border-white dark:bg-black bg-white p-2 shadow-lg shadow-black/10 [*>img]:shadow-inner",
        !notResponsive && "md:p-4 md:shadow-2xl md:shadow-black/10",
        className,
      ),
    );
  }, [className, notResponsive]);
  return <div className={slideClass}>{children}</div>;
};
