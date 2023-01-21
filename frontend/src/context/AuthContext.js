import axios from "axios"
import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  // Navigate
  const navigate = useNavigate()

  // User authentication info
  const [user, setUser] = useState()
  // Access and refresh tokens
  const [tokens, setTokens] = useState()

  // Login
  const login = async (username, password) => {
    try {
      const context = {
        username,
        password,
      }

      const res = await axios.post("/token/", context)
      if (res.status === 200) {
        // Save tokens to local storage
        const uuid = res.data
        console.log(uuid)
        localStorage.setItem("user", JSON.stringify(uuid))

        // Going home
        navigate("/")
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Logout
  const logout = async () => {
    // Save tokens to local storage
    localStorage.removeItem("user")

    // Going home
    navigate("/")
  }

  // Sign up
  const signup = async (username, password) => {
    try {
      const context = {
        username,
        password,
      }
      const res = await axios.post("/signUp/", context)
      if (res.status === 200) {
        // Going home
        navigate("/login")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const value = {
    user,
    tokens,
    setUser,
    setTokens,
    login,
    logout,
    signup,
  }

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  )
}

export default AuthContextProvider
