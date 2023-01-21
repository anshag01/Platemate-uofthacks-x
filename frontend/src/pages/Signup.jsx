import Container from "../components/ui/Container"
import Header from "../components/ui/Header"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import { Link } from "react-router-dom"
import Logo from "../components/ui/Logo"

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target.name.value
    const username = e.target.username.value
    const password = e.target.password.value

    console.log(name, username, password)
  }

  return (
    <Container>
      <form className="flex flex-col items-center gap-y-8" onSubmit={handleSubmit}>
      <Logo />

        {/* Form */}
        <Input placeholder="Name" name="name" type="name" required />
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

        <Button text="Sign Up" type="submit" />
        <Link className="text-[#DF72E1] hover:text-[#a04ea2] hover:ease-in-out duration-100 text-center">
          Forgot your password?
        </Link>
      </form>
    </Container>
  )
}

export default Signup
