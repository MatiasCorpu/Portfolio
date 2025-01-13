import { React, useState } from "react";
import { IconChevronDown } from '@tabler/icons-react';
import { AnimatePresence, motion } from "framer-motion";


export function ButtonExpandableContainer({ children }) {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full fixed z-50 top-0 left-0">
      <div className="shadow-md shadow-slate-500 dark:shadow-black">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0 }} // Altura inicial
              animate={{ height: "auto" }} // Altura al expandirse
              exit={{ height: 0 }} // Altura al colapsar
              transition={{ duration: 0.25 }}
              className="flex justify-center items-center overflow-hidden"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <button
        className={`mr-4 bg-slate-200  dark:bg-zinc-900 rounded-b-2xl border-b border-white/30 shadow-md shadow-slate-500 dark:shadow-black w-14 flex ml-auto max-sm:w-11`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <IconChevronDown className={`h-full w-full transition-transform duration-500 text-light-tertiary dark:text-light-secondary p-3 ${isExpanded ? "rotate-180" : ""}`} />
      </button>
    </div>
  );
}