import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PageLayout from "./components/PageLayout"
import FloatingNav from "./components/FloatingNav"

import Home from "./pages/Home/Home"
import Projects from "./pages/Projects/Projects"
import University from "./pages/University/University"
import CurriculumVitae from "./pages/CurriculumVitae/CurriculumVitae"

import {
  IconHome,
  IconTerminal2,
  IconSchool,
  IconClipboardText,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";

function App() {

  const linksNavbar = [
    {
      id: "home",
      title: "Home",
      icon: <IconHome className="h-full w-full text-icon" />,
      href: "/",
      internal: true,
      ariaLabel: "Go to Home",
    },
    {
      id: "projects",
      title: "Projects",
      icon: <IconTerminal2 className="h-full w-full" />,
      href: "/projects",
      internal: true,
      ariaLabel: "Go to Projects",
    },
    {
      id: "university",
      title: "University",
      icon: <IconSchool className="h-full w-full" />,
      href: "/university",
      internal: true,
      ariaLabel: "Go to University progress",
    },
    {
      id: "cv",
      title: "Curriculum Vitae",
      icon: <IconClipboardText className="h-full w-full" />,
      href: "/curriculum-vitae",
      internal: true,
      ariaLabel: "Go to Curriculum Vitae",
    },
    {
      id: "github",
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full" />,
      href: "#",
      internal: false,
      ariaLabel: "Go to GitHub",
    },
    {
      id: "mail",
      title: "Mail",
      icon: <IconMail className="h-full w-full" />,
      href: "#",
      internal: false,
      ariaLabel: "Send me an email",
    },
  ];

  return (
    <PageLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/university" element={<University />} />
          <Route path="/curriculum-vitae" element={<CurriculumVitae />} />
        </Routes>

        <FloatingNav
          items={linksNavbar}
          className={"mb-5 fixed bottom-0 text-zinc-400 dark:text-slate-300"} 
          toggleTheme={true}/>
      </BrowserRouter>
    </PageLayout>
  )
}
// max-sm:mb-2
export default App
