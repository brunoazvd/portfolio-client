import { Chip } from "../Chip.jsx"

export const ProjectSwitcher = ({projetos, setCurrentProject, currentProject}) =>  {
  return (
    <div className="flex flex-row gap-4 align-center justify-center mb-6">
      {projetos.map((proj, index) => (
        <Chip 
          key={index}
          label={proj.title}
          currentSelected={proj.id === currentProject.id}
          handleClick={() => setCurrentProject(proj)}
        />
      ))}
    </div>
  )
}
