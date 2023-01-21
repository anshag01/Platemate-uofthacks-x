import Container from "../components/ui/Container"
import Header from "../components/ui/Header"
import Input from "../components/ui/Input"
import Button from "../components/ui/Button"

const UserInfo = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const info = e.target.info.value
    const select = e.target.select.value
    console.log(select)
  }

  return (
    <Container className="w-full h-full pb-80">
      <Header text="Who are you?" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-y-8 mt-2">
        <div>
          <h1>Tell us a little bit more about yourself.</h1>
          <textarea
            className="min-h-[200px] max-h-[400px] p-2 w-full border-2 outline-none rounded-lg bg-[#E8E8E8] hover:border-[#DF72E1]"
            placeholder="Write a paragraph about yourself."
            name="info"
          />
        </div>

        <div>
          <h1>Give us any dietry restrictions you may have.</h1>
          <ul className="flex flex-col gap-y-2 mt-2">
            <li className="flex items-center gap-x-2">
              <input type="checkbox" id="1" name="1" />
              <label htmlFor="1">Non-dairy</label>
            </li>
            <li className="flex items-center gap-x-2">
              <input type="checkbox" id="2" name="2" />
              <label htmlFor="2">Vegetarian</label>
            </li>
            <li className="flex items-center gap-x-2">
              <input type="checkbox" id="3" name="3" />
              <label htmlFor="3">Halal</label>
            </li>
            <li className="flex items-center gap-x-2">
              <input type="checkbox" id="4" name="4" />
              <label htmlFor="4">Lactose intolerance</label>
            </li>
            <li className="flex items-center gap-x-2">
              <input type="checkbox" id="5" name="5" />
              <label htmlFor="5">Milk Alergies</label>
            </li>
            <li className="flex items-center gap-x-2">
              <input type="checkbox" id="6" name="6" />
              <label htmlFor="6">Egg Alergies</label>
            </li>
            <li className="flex items-center gap-x-2">
              <input type="checkbox" id="7" name="7" />
              <label htmlFor="7">Peanut Alergies</label>
            </li>
            <Input
              placeholder="Other"
              className="w-[100px] h-[40px]"
              id="8"
              name="8"
            />
          </ul>
        </div>

        <div>
          <h1>Please choose a budget.</h1>
          <select
            name="select"
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-[#DF72E1] px-4 py-2 pr-8 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="">budget</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
        </div>

        <Button text="Submit" type="submit" />
      </form>
    </Container>
  )
}

export default UserInfo
