import { Link } from "react-router-dom"
import { RoutePaths } from "../data/RoutePaths.jsx"

export const Logo = ({...props}) => {
  return (
    <Link to={RoutePaths.HOME}>
      <div {...props} className="text-5xl font-bold font-mono flex">
          bruno<span className="font-normal">(azvd)</span><span className="text-4xl blink mt-1.5 text-primary-light">▌</span>
      </div>
    </Link>
  )
}
