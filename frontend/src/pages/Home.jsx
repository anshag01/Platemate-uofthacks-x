import Container from "../components/ui/Container"
import Header from "../components/ui/Header"
import Input from "../components/ui/Input"
import MyComponent from "../components/Map"
import { useEffect } from "react"

import { reverseGeocode } from "../utils/reverseGeocode"

const Home = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("position", position)
      const { longitude, latitude } = position.coords
      const formattedAddress = reverseGeocode(latitude, longitude)
      console.log("formatted address", formattedAddress)
    })
  }, [])

  return (
    <Container className="flex flex-col gap-y-8 bg-slate-50 rounded-b-lg">
      <Header text="Where To?" />
      <Input type="search" placeholder="Enter a location" />
      <MyComponent />
    </Container>
  )
}

export default Home
