import { ReactComponent as BlackCalander } from "../assets/icons/blackCalander.svg"
import { ReactComponent as ColorCalandar } from "../assets/icons/colorCalandar.svg"
import { ReactComponent as BlackMail } from "../assets/icons/blackMail.svg"
import { ReactComponent as ColorMail } from "../assets/icons/colorMail.svg"
import { ReactComponent as BlackPerson } from "../assets/icons/blackPerson.svg"
import { ReactComponent as ColorPerson } from "../assets/icons/colorPerson.svg"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()

  if (location.pathname === "/login" || location.pathname === "/signup")
    return null

  return (
    <nav
      className="w-full h-[100px] rounded-t-3xl flex items-center justify-around fixed bottom-0 z-10 bg-white"
      style={{
        boxShadow: "0px 20px 100px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Link to="/">
        {location.pathname === "/" ? <ColorMail /> : <BlackMail />}
      </Link>
      <Link to="/recommended">
        {location.pathname === "/recommended" ? (
          <ColorCalandar />
        ) : (
          <BlackCalander />
        )}
      </Link>
      <Link to="/profile">
        {location.pathname === "/profile" ? <ColorPerson /> : <BlackPerson />}
      </Link>
    </nav>
  )
}

export default Navbar
