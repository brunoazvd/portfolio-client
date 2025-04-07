import { Logo } from '../Logo.jsx'
import { NavLink } from './NavLink.jsx'
import { Container } from '../Container.jsx'
import { RoutePaths } from '../../data/RoutePaths.jsx'


export const Navbar = () => {
  return (
    <Container>
     <div className="flex w-full flex-row py-6">
        <Logo />
        <div className="flex flex-col items-center ml-auto gap-4 lg:flex-row lg:text-left mb-6">
          <NavLink to={RoutePaths.HOME}>Home</NavLink>
          <NavLink to={RoutePaths.ABOUT}>Sobre mim</NavLink>
          <NavLink to={RoutePaths.PROJECTS}>Projetos</NavLink>
        </div>
      </div>
    </Container>
  )
}
