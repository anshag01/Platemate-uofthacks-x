import Container from "../components/ui/Container"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import { Link, useNavigate } from "react-router-dom"
import Logo from "../components/ui/Logo"

const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const username = e.target.username.value
    const password = e.target.password.value

    console.log(username, password)
    navigate("/home")
  }

  return (
    <Container>
      <form className="flex flex-col items-center gap-y-8" onSubmit={handleSubmit}>
        <Logo />

        {/* Form */}
        <Input
          placeholder="Username"
          name="username"
          type="username"
          required
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          required
        />

        <Button text="Log In" type="submit" />
        <Link className="text-[#DF72E1] hover:text-[#a04ea2] hover:ease-in-out duration-100 text-center">
          Forgot your password?
        </Link>
      </form>
    </Container>
  )
}

export default Login
