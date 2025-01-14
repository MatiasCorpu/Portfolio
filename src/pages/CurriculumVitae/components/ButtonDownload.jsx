import { button } from "framer-motion/client";
import React from "react";

function ButtonDownload() {
  return (
    <button>
      <a
        href="src\assets\cv.pdf"
        download="CurriculumVitae.pdf"
        className=" bg-red-700 fixed bottom-24 right-2 rounded-full p-1"
      >
        <span className="">Download</span>
      </a>
    </button>
  );
}


export default ButtonDownload;