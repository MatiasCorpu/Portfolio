import React from "react";
import ButtonDownload from "./components/ButtonDownload";

function CurriculumVitae() {
  return (
    <div className="relative w-full flex justify-center items-center">
      <img src="src\assets\cv.png" alt="Curriculum Vitae" />

      <ButtonDownload />
    </div>
  );
}

export default CurriculumVitae;