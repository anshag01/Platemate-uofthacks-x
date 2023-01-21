import Container from "../components/ui/Container"
import Header from "../components/ui/Header"
import Card from "./Card"
import person1 from "../assets/pics/person1.png"
import person2 from "../assets/pics/person2.png"

const Recommended = () => {
  return (
    <Container className="flex flex-col gap-y-8 items-center">
      <Header text="Recommended" />

      <Card
        pic={person1}
        title="Amy Roberts"
        address="kazi Deiry, Taiger Pass Chittagong"
      />
      <Card
        pic={person2}
        title="Sam Hills"
        address="kazi Deiry, Taiger Pass Chittagong"
      />
      <Card
        pic={person1}
        title="Maggie W"
        address="kazi Deiry, Taiger Pass Chittagong"
      />
      <Card
        pic={person2}
        title="Andrew Petersen"
        address="kazi Deiry, Taiger Pass Chittagong"
      />
    </Container>
  )
}

export default Recommended
