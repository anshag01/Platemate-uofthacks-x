import Container from "../components/ui/Container"
import Header from "../components/ui/Header"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import { Link, useNavigate } from "react-router-dom"

const Signup = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // const email = e.target.email.value
    const username = e.target.username.value
    const password = e.target.password.value

    console.log(username, password)
    navigate("/userinfo")
  }

  return (
    <Container>
      <form className="flex flex-col gap-y-8" onSubmit={handleSubmit}>
        <Header text="Sign Up" />

        {/* Form */}
        {/* <Input placeholder="Email" name="email" type="email" required /> */}
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
