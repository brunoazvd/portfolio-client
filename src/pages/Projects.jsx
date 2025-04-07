import { useState } from "react";
import { Container } from "../components/Container.jsx";
import { ProjectSwitcher } from "../components/Projects/ProjectSwitcher.jsx";
import { ProjectViewer } from "../components/Projects/ProjectViewer.jsx"
import ptBR from '../data/pt-BR.json'
import projetos from '../data/projetos.json'  


export const Projects = () => {
  const [currentProject, setCurrentProject] = projetos[0]

  return (
    <Container>
      <h1 className="text-4xl mb-6 font-bold text-center">
          {ptBR.projects.title}
      </h1>
          <ProjectSwitcher 
            projetos={projetos} 
            currentProject={currentProject} 
            setCurrentProject={setCurrentProject}
          />
          <ProjectViewer projeto={currentProject} />
      
    </Container>
  )
}