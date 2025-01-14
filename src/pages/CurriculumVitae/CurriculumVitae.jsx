import React from "react";
import ButtonDownload from "./components/ButtonDownload";

function CurriculumVitae() {
  return (
    <div className="relative w-full flex justify-center items-center">
      {/* <img src="src\assets\cv.png" alt="Curriculum Vitae" /> */}
      <div className="w-[1000px] h-[1000px] bg-green-700/20"></div>
 
      <ButtonDownload />
    </div>
  );
}

export default CurriculumVitae;