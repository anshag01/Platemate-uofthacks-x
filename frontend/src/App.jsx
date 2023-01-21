import { Routes, Route } from "react-router-dom"
import { Wrapper } from "@googlemaps/react-wrapper"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Recommended from "./pages/Recommended"
import Signup from "./pages/Signup"
import WhereTo from "./pages/WhereTo"

const App = () => {
  return (
    <>
      <Navbar />
      <Wrapper apiKey={"AIzaSyBidOMsX0DzROn3v29TBS_z1t40gxC0rM4"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/where-to" element={<WhereTo />} />
          <Route path="/recommended" element={<Recommended />} />
        </Routes>
      </Wrapper>
    </>
  )
}

export default App
