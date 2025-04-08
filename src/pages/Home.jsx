import { Container } from "../components/Container.jsx";
import { ButtonLink } from "../components/ButtonLink.jsx";

import ptBR from '../data/pt-BR.json'
import { RoutePaths } from "../data/RoutePaths.jsx";


export const Home = () => (
  <Container>
    <div className="flex w-full flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/3">
        <img src="./images/bruno-2.jpg" alt="imagem do desenvolvedor" className="rounded-md"/>
      </div>
      <div className="w-full md:w-2/3 font-sans text-center md:text-right">
        <h1 className="text-4xl mb-4 font-bold">
          {ptBR.homepage.title}
        </h1>
        <div className="text-lg font-light mb-6">
          {ptBR.homepage.description.map((text, index) => 
            <p key={index}>{text}</p>
          )}
        </div>
        <div className="mx-auto md:ml-auto md:mr-0 flex w-fit flex-row gap-8 ">
          <ButtonLink 
            destinationPath={RoutePaths.ABOUT}
            text={ptBR.homepage.about_button}
          />
          <ButtonLink 
            destinationPath={RoutePaths.PROJECTS}
            text={ptBR.homepage.projects_button}
          />
        </div>
      </div>
    </div>
  </Container>
);
