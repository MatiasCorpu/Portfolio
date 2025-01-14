import React from "react";
import { IconDownload } from "@tabler/icons-react";
import { button } from "framer-motion/client";

function ButtonDownload() {
  return (
    <button className="h-14 w-14 fixed bottom-24 right-24 flex items-center justify-center rounded-full bg-green-700 transition-transform duration-300 group hover:scale-110">

      <span className="sr-only">Download Curriculum Vitae</span>
      <a
        href="src\assets\cv.pdf"
        download="CurriculumVitae.pdf"
        className=""
      >
        <IconDownload />
      </a>
    </button>
  );
}


export default ButtonDownload;