import Container from "../components/ui/Container"
import Header from "../components/ui/Header"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <Container className="flex flex-col gap-y-8">
      <Header text="Sign Up" />

      {/* Form */}
      <Input placeholder="Name" />
      <Input placeholder="Username" />
      <Input placeholder="Password" />

      <Button text="Sign Up" />
      <Link className="text-[#DF72E1] hover:text-[#a04ea2] hover:ease-in-out duration-100 text-center">
        Forgot your password?
      </Link>
    </Container>
  )
}

export default Signup
