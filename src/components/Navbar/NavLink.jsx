import { Link } from 'react-router-dom'

export const NavLink = ({children, ...props}) => {
  return (
    <Link {...props} className="text-2xl hover:text-primary-light">
        {children}
    </Link>
  )
}
