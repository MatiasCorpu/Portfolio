import React from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform, useAnimation } from "framer-motion";

import {
  IconMoon,
  IconSunLow,
} from "@tabler/icons-react";

let prevButton = null;

export default function FloatingNav({ items, className, toggleTheme }) {

  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const body = document.querySelector("body");
  useEffect(() => {
    if (theme === "dark" && body) {
      body.classList.add("dark");
    } else if (body) {
      body.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };


  let mouseX = useMotionValue(Infinity);
  return (
    (
      <footer className="fixed w-full z-50 bottom-0 left-0 right-0 flex justify-center">
        <motion.div
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className={`mx-auto flex h-16 gap-4 max-sm:gap-2 items-end rounded-full px-3 pb-2.5 bg-slate-200  border-t border-slate-50 shadow-xl shadow-slate-600/40 dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-zinc-950/40 ${className}`}>

          {items.map((item) => (
            <IconContainer
              mouseX={mouseX}
              key={item.title}
              {...item}
            />
          ))}

          {toggleTheme && <div
            onClick={handleChangeTheme}
            className="flex rounded-full">
            <IconContainer
              mouseX={mouseX}
              key="toggle-theme"
              title="Toggle Theme"
              icon={theme === "dark" ? <IconSunLow className="h-full w-full text-slate-400 dark:text-zinc-300" /> : <IconMoon className="h-full w-full text-slate-400 dark:text-zinc-300" />}
              href="#"
              internal={false}
              ariaLabel="Toggle Theme"
            />
          </div>}
        </motion.div>
      </footer >
    )
  );
};

function IconContainer({
  mouseX,
  id,
  title,
  icon,
  href,
  internal,
  ariaLabel,
}) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [43, 80, 43]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [43, 80, 43]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [23, 46, 23]);
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [23, 46, 23]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  const controls = useAnimation();

  const handleClick = (e) => {
    controls.start({
      y: [0, -25, 5, -10, 0],
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    });

    const currentButton = e.currentTarget;
    let selectionMark = currentButton.querySelector("span");

    if (internal) {
      selectionMark.classList.remove("hidden");
      selectionMark.classList.add("block");
    }

    if (prevButton === null) {
      prevButton = currentButton;
    } else if (prevButton !== currentButton && internal) {
      selectionMark = prevButton.querySelector("span");
      selectionMark.classList.remove("block");
      selectionMark.classList.add("hidden");
      prevButton = currentButton;
    }

  };

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <Link to={href} id={id} aria-label={ariaLabel} className="rounded-full">
      <motion.div
        ref={ref}
        style={isTouchDevice ? {} : { width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
        animate={controls}
        className="bg-slate-50 aspect-square rounded-full flex items-center justify-center relative shadow-md shadow-slate-500/65 border-t border-slate-50 dark:bg-zinc-800 dark:shadow-zinc-950/60 dark:border-zinc-700"
      >
        <AnimatePresence>
          {hovered && !isTouchDevice && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{
                opacity: 1,
                y: 0,
                x: "-50%",
                transition: {
                  delay: 0.35,
                  duration: 0.2,
                  ease: "easeOut",
                },
              }}
              exit={{
                opacity: 0,
                y: 2,
                x: "-50%",
                transition: {
                  duration: 0.2,
                },
              }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-slate-50 text-slate-500 font-semibold absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs dark:bg-zinc-800 dark:text-zinc-300"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          style={isTouchDevice ? {} : { width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>

        <span className="hidden absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-1.5 h-1 rounded-full bg-slate-50 shadow-sm shadow-slate-600 dark:bg-zinc-800 dark:shadow-zinc-950 dark:border-t dark:border-zinc-600"></span>
      </motion.div>
    </Link>
  );
};