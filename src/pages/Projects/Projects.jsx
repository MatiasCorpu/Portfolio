import React from "react";
import CardProject from "./components/CardProject";
import BlurGradient from "../../components/BlurGradient";

function Projects() {


  return (
    <div className="pb-24">
      <div className="w-full flex gap-2 max-lg:flex-col">
        <div className="w-full flex flex-col gap-2">
          <CardProject
            image={"1ka4.gif"}
            altImage={"Proyecto 1"}
            title={"Proyecto 1"}
            backgroundTitle={"dark"}
            idLanguages={["javascript", "react", "tailwind", "html", "css", "python"]}
            description={"Descripción del proyecto 1, aldskjfalk sdhnfkajb nvinerav, nads fna,sdnfñlasdkjf lkajsdfñlkas jdfñlkasdj fñainv kjng,mndvck jerg vkand sofñ ijhsfl kajdsofiñ jasklfdnoi rvklsdfnv ilsdhgf, Descripción del proyecto 1"}
            urlGithub={"#"}
          />

          <CardProject
            image={"2qQQ.gif"}
            altImage={"Proyecto 1"}
            title={"Proyecto 1"}
            backgroundTitle={"white"}
            idLanguages={["javascript", "react", "tailwind", "html", "css", "python"]}
            description={"Descripción del proyecto 1, aldskjfalk sdhnfkajb nvinerav, nads fna,sdnfñlasdkjf lkajsdfñlkas jdfñlkasdj fñainv kjng,mndvck jerg vkand sofñ ijhsfl kajdsofiñ jasklfdnoi rvklsdfnv ilsdhgf, Descripción del proyecto 1"}
            urlGithub={"#"}
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <CardProject
            image={"proto.png"}
            altImage={"Proyecto 1"}
            title={"Proyecto 1"}
            backgroundTitle={"white"}
            idLanguages={["javascript", "react", "tailwind", "html", "css", "python"]}
            description={"Descripción del proyecto 1, aldskjfalk sdhnfkajb nvinerav, nads fna,sdnfñlasdkjf lkajsdfñlkas jdfñlkasdj fñainv kjng,mndvck jerg vkand sofñ ijhsfl kajdsofiñ jasklfdnoi rvklsdfnv ilsdhgf, Descripción del proyecto 1"}
            urlPage={"#"}
            urlGithub={"#"}
          />

          <CardProject
            image={"7ynw.gif"}
            altImage={"Proyecto 1"}
            title={"Proyecto 1"}
            backgroundTitle={"white"}
            idLanguages={["javascript", "react", "tailwind", "html", "css", "python"]}
            description={"Descripción del proyecto 1, aldskjfalk sdhnfkajb nvinerav, nads fna,sdnfñlasdkjf lkajsdfñlkas jdfñlkasdj fñainv kjng,mndvck jerg vkand sofñ ijhsfl kajdsofiñ jasklfdnoi rvklsdfnv ilsdhgf, Descripción del proyecto 1"}
            urlPage={"#"}
            urlGithub={"#"}
          />
        </div>
      </div>

      <BlurGradient />
    </div>
  );
}

export default Projects;