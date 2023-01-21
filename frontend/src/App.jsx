import { Routes, Route } from "react-router-dom"
import { Wrapper } from "@googlemaps/react-wrapper"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Recommended from "./pages/Recommended"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"

const render = (status) => {
  console.log("status", status)
}

const App = () => {
  return (
    <>
      <Navbar />
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_API_KEY} render={render}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recommended" element={<Recommended />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Wrapper>
    </>
  )
}

export default App
