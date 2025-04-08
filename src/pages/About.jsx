import { Container } from "../components/Container.jsx";
import ptBR from '../data/pt-BR.json'


// Falta estilizar essa seção inteira, 

export const About = () => (
    <Container>
      <div className="flex w-full flex-col md:flex-row gap-8">
        <div className="md:w-1/5 flex flex-col justify-center">
          <img src="./images/bruno-3.jpg" alt="imagem do desenvolvedor" className="rounded-md h-120 mx-auto object-fit md:h-max"/>
        </div>
        <div className="md:w-4/5 font-sans">
          <h1 className="text-3xl mb-3 font-bold text-center">
            {ptBR.about.title}
          </h1>
          {ptBR.about.content.map((section, index) => (
            <div key={index} className="w-full flex flex-col mb-3 font-mono">
                <h2 className="mb-1 font-medium">{section.subtitle}</h2>
                {section.description.map((paragraph, index) => (
                  <p className="text-sm font-light" key={index}>{paragraph}</p>
                ))}
            </div>
          ))}
        </div>
      </div>
    </Container>
  )


