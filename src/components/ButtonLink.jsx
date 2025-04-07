import { Link } from 'react-router-dom'

export const ButtonLink = ({handleClick, destinationPath, text, newTab=false, ...props}) => {
  return (
    <Link
        {...props}
        target={newTab ? "_blank" : "_self"}
        to={destinationPath}
        className="block px-6 py-2 text-lg bg-primary rounded-md hover:bg-primary-hover"
        type="button">
            {text}
    </Link>
  )
}
