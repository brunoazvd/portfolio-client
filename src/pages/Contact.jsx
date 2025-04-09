import { Container } from "../components/Container.jsx";

export const Contact = () => {
  return (
    <Container>
        <h2 className="text-4xl font-bold mb-4 text-center">Entre em Contato</h2>
        <p className="mb-6 text-center">Se você gostou do meu trabalho e quer trocar uma ideia ou fazer uma proposta, aqui estão meus canais</p>
        <div className="flex flex-col sm:flex-row gap-6 w-fit mx-auto text-lg">
            <a className="w-fit mx-auto cursor-pointer flex flex-row place-items-center gap-2" href="https://github.com/brunoazvd" target="_blank">
            <img src="./images/github.svg" alt="github logo" className="w-8 block" />
                <p  className="text-primary">@brunoazvd</p>
            </a>
            <a className="w-fit mx-auto cursor-pointer flex flex-row place-items-center gap-2" href="https://www.linkedin.com/in/brunoazvdo/" target="_blank">
            <img src="./images/linkedin.svg" alt="linkedin logo" className="w-8 block" />
                <p  className="text-primary">brunoazvdo</p>
            </a>
            <a className="w-fit mx-auto cursor-pointer flex flex-row place-items-center gap-2" href="https://www.instagram.com/azvd.bruno" target="_blank">
                <img src="./images/instagram.svg" alt="instagram logo" className="w-10 block" />
                <p  className="text-primary">@azvd.bruno</p>
            </a>
            <a className="w-fit mx-auto cursor-pointer flex flex-row place-items-center gap-2" href="mailto:brunoazvd@protonmail.com" target="_blank">
            <img src="./images/email.svg" alt="email logo" className="w-10 block" />
                <p  className="text-primary">brunoazvd@protonmail.com</p>
            </a>
        </div>
    </Container>
  )
}
