import { ButtonLink } from "../ButtonLink.jsx"

export const ProjectViewer = ({projeto}) => {
  return (
    <div className="border-2 rounded-md p-4">
      <h3 className="text-2xl font-medium text-center mb-4 w-full">{projeto.title}</h3>
      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-2/3">
          <p className="text-lg font-medium mb-1">Descrição:</p>
          {projeto.description.map((paragraph, index) => (
            <p className="font-light" key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="w-full md:w-1/3">
          <div className="mb-4">
            <p className="text-lg font-medium mb-1">Técnologias Utilizadas:</p>
            <p className="font-light" >{projeto.technologies}</p>
          </div>
          <ButtonLink
            text="Visite o Projeto"
            destinationPath={projeto.url}
            newTab={true}
            className="w-fit mx-auto md:mx-0"
          />
        </div>
      </div>
    </div>
  )
}