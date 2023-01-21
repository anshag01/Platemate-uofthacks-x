import Container from "../components/ui/Container"
import Header from "../components/ui/Header"
import Input from "../components/ui/Input"

const UserInfo = () => {
  return (
    <Container className="w-full h-full flex flex-col gap-y-8 pb-80">
      <Header text="Who are you?" />

      <div>
        <h1>Tell us a little bit more about yourself.</h1>
        <textarea
          className="min-h-[200px] max-h-[400px] p-2 w-full border-2 outline-none rounded-lg hover:border-[#DF72E1]"
          placeholder="Write a paragraph about yourself."
        />
      </div>

      <div>
        <h1>Give us any dietry restrictions you may have.</h1>
        <Input placeholder="Restrictions ..." />
      </div>

      <div>
        <h1>How old are you?</h1>
        <Input placeholder="Age ..." />
      </div>

      <h1>Please select a budget.</h1>
      <div className="flex">
        <h1 className="p-2 ">$</h1>
        <h1 className="p-2 ">$$</h1>
        <h1 className="p-2 ">$$$</h1>
        <h1 className="p-2 ">$$$$</h1>
      </div>
    </Container>
  )
}

export default UserInfo
