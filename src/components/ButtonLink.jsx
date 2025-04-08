import { Link } from 'react-router-dom'

export const ButtonLink = ({destinationPath, text, newTab=false, ...props}) => {
  return (
    <Link
        {...props}
        target={newTab ? "_blank" : "_self"}
        to={destinationPath}
        className={`block px-6 py-2 text-lg bg-primary rounded-md border-2 hover:bg-primary-hover hover:border-primary-light ${props.className ? props.className : ''}`}
        type="button">
            {text}
    </Link>
  )
}
