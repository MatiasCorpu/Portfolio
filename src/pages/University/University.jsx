import React from "react";
import Card from "../../components/Card";
import BlurGradient from "../../components/BlurGradient";
import subjects from "../../data/subjects.json"
import { ButtonAnimatedModal } from "./components/ButtonAnimatedModal";
import { ButtonExpandableContainer } from "./components/ButtonExpandableContainer";

function University() {
  const groupedItems = subjects.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  }, {});

  const typeColor = {
    "Ciencias Básicas": "bg-[#498379]",
    "Programación": "bg-[#492947]",
    "Infraestructura": "bg-[#ba792e]",
    "Desarrollo de SW": "bg-[#8f8f3f]",
    "Calidad y Seguridad de la Información": "bg-[#a2a384]",
    "Gestión y Complementarias": "bg-[#dd423e]",
    "Transversal": "bg-[#9ec5d5]",
  };

  return (
    <>
      <ButtonExpandableContainer>
        <div className="flex flex-wrap justify-center items-center p-5 gap-2 bg-slate-200 dark:bg-zinc-900 w-full max-sm:px-1">
          {
            Object.keys(typeColor).map((type) => (
              <div key={type} className={`text-white rounded-xl px-2 ${typeColor[type]} max-sm:px-1`}>
                <span className="text-center text-sm max-sm:text-xs">
                  {type}
                </span>
              </div>
            ))
          }
        </div>
      </ButtonExpandableContainer>

      <div className="flex flex-col gap-5 pb-24 pt-10 mx-20 max-lg:mx-0">
        {Object.keys(groupedItems).map((year) => (

          <Card key={year} hoverScaleAnimation={false} className={"flex items-center p-5 min-h-72 max-lg:flex-col"}>

            <div className="flex font-bold items-end justify-center max-lg:mr-auto pr-5 gap-2 text-light-tertiary dark:text-dark-tertiary w-1/6 max-lg:w-auto max-lg:mb-4">
              {year > 0 ? (
                <>
                  <h1 className="text-9xl max-lg:text-7xl max-sm:text-3xl" >{year}</h1>
                  <h2 className="text-2xl mb-3 max-lg:mb-1 max-sm:text-xl max-sm:mb-[1px]">Año</h2>
                </>
              ) : (
                <>
                  <h1 className="text-2xl">Transversales</h1>
                </>
              )}
            </div>


            <div key={year} className="w-full flex items-center flex-wrap gap-5 max-xl:justify-center max-sm:gap-3">
              {groupedItems[year].map((item) => (
                <ButtonAnimatedModal
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                  status={item.status}
                  type={item.type}
                />
              ))}
            </div>


          </Card>
        ))}

        <BlurGradient />
      </div>
    </>
  );
}

export default University;