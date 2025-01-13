import { React, useState } from "react";
import Card from "../../../components/Card";
import Button from "./Button";
import items from "../../../data/programing-languages.json";
import { IconBrandGithub, IconWorldWww, IconExternalLink, IconFileDescription } from "@tabler/icons-react";

function CardProject({ image, altImage, title, backgroundTitle, idLanguages, description, urlPage, urlGithub }) {

  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Card className={"flex flex-col gap-1 relative p-1"} hoverScaleAnimation={false}>
      <section className="z-10">
        <div className="relative z-20">
          <header
            className={`absolute flex justify-between items-center w-full py-2 px-3
          ${backgroundTitle === "dark" && !isVisible ? "text-light-secondary" : ""}
          ${backgroundTitle !== "dark" && !isVisible ? "text-dark-secondary" : ""}
          ${isVisible ? "text-dark-secondary dark:text-light-secondary" : ""}
          `
            } >
            <h1>{title}</h1>
            <div className="flex gap-2">
              {
                idLanguages.map((language) => (
                  items.map((item) => (
                    item.id === language ?
                      <img key={item.id} src={item.icon} alt={item.alt} className="w-6" />
                      : null
                  ))
                ))
              }
            </div>
          </header>
        </div>

        <div className="relative">
          <img className={`overflow-hidden rounded-xl w-full ${isVisible ? "blur-3xl opacity-25" : ""}`} src={`src/assets/${image}`} alt={altImage} />
          <div
            className={`absolute top-0 w-full h-full rounded-xl ${isVisible ? "bg-light-secondary/50 dark:bg-dark-secondary/90" : ""}`}
          >
            <div className="relative flex w-full h-full pt-12 text-dark-primary dark:text-dark-tertiary">
              {isVisible &&
                <div className="w-full h-full overflow-y-auto">
                  <p className="pl-3 mb-4 text-base">
                    {description}
                  </p>
                </div>
              }
              <Button className={"ml-auto mt-auto m-3 py-2 border-2 border-light-primary dark:border-dark-primary text-light-tertiary dark:text-dark-tertiary"} onClick={handleButtonClick} >
                <IconFileDescription />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full gap-1 text-light-tertiary dark:text-dark-tertiary z-10">
        <Button className={"w-full group"} >
          <a className="flex justify-center items-center w-full h-full" href={urlGithub} target="_blank" rel="noreferrer">
              <IconBrandGithub />
              <IconExternalLink className="w-4 opacity-0 -translate-x-6 group-hover:translate-x-2 group-hover:opacity-60 duration-200" />
          </a>
        </Button>
        {urlPage ?
          <Button className={"w-full group"} >
            <a className="flex justify-center items-center w-full h-full" href={urlPage} target="_blank" rel="noreferrer">
              <IconWorldWww />
              <IconExternalLink className="w-4 opacity-0 -translate-x-6 group-hover:translate-x-2 group-hover:opacity-60 duration-200" />
            </a>
          </Button>
          : null}
      </section>

      <img className={`overflow-hidden rounded-xl w-full h-full p-1 z-0 absolute blur-2xl top-0 opacity-60 ${isVisible ? "blur-2xl" : ""}`} src={`src/assets/${image}`} alt={altImage} />

    </Card>
  );
}

export default CardProject; 