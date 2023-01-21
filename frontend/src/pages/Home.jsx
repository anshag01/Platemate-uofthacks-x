import Container from "../components/ui/Container"
import Header from "../components/ui/Header"
import Input from "../components/ui/Input"
import MyComponent from "../components/Map"

const Home = () => {
  return (
    <>
      <Container className="flex flex-col gap-y-8">
        <Header text="Where To?" />
        <Input type="search" placeholder="Enter a location" />
      </Container>
      <MyComponent />
    </>
  )
}

export default Home
