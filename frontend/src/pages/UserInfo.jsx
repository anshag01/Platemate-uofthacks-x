import Container from "../components/ui/Container"
import Header from "../components/ui/Header"
import Input from "../components/ui/Input"
import Button from "../components/ui/Button"
import { useRef, useState } from "react"
import axios from "axios"

const UserInfo = ({ username, password }) => {
  // axios.post("/api/userInfo", {info, budget, budgetGoal, dietaryRestrictions})
  // {"bio": , "username": , "password": , "budget": 1-4, "goal": -1,0,1, "dietaryRestrictions", []}
  const [valid, setValid] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const bio = e.target.bio.value
    for (let i = 1; i <= 7; i++) {
      if (e.target[i].checked) {
        console.log(e.target[i].name)
      }
    }
    const budget = e.target.budget.value
    const goal = e.target.goal.value

    if (budget === "1" && goal === "lower") {
      console.log("budget is already at the lowest.")
      setValid(false)
      return
    } else if (budget === "4" && goal === "higher") {
      console.log("budget is already at the highest.")
      setValid(false)
      return
    }

    const context = {
      bio,
      username,
      password,
      budget,
      goal,
      dietaryRestrictions: [
        e.target[1].checked,
        e.target[2].checked,
        e.target[3].checked,
        e.target[4].checked,
        e.target[5].checked,
        e.target[6].checked,
        e.target[7].checked,
      ],
    }
    await axios.post("http://locahost:8000/signUp/", context)
  }

  return (
    <Container className="w-full h-full pb-32">
      <Header text="Who are you?" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-y-8 mt-2">
        <div>
          <h1>Tell us a little bit more about yourself.*</h1>
          <textarea
            className="min-h-[200px] max-h-[400px] p-2 w-full border-2 outline-none rounded-lg bg-[#E8E8E8] hover:border-[#DF72E1]"
            placeholder="Write a paragraph about yourself."
            name="bio"
            required
          />
        </div>

        <div>
          <h1>Give us any dietry restrictions you may have.*</h1>
          <ul className="flex flex-col gap-y-2 mt-2" name="test">
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
              <label htmlFor="5">Milk Allergies</label>
            </li>
            <li className="flex items-center gap-x-2">
              <input type="checkbox" id="6" name="6" />
              <label htmlFor="6">Egg Allergies</label>
            </li>
            <li className="flex items-center gap-x-2">
              <input type="checkbox" id="7" name="7" />
              <label htmlFor="7">Peanut Allergies</label>
            </li>
          </ul>
        </div>

        <div>
          <h1>Please choose a budget.*</h1>
          <select
            name="budget"
            required
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-[#DF72E1] px-4 py-2 pr-8 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="">budget</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
        </div>

        <div>
          <h1>Spend more or less goals.*</h1>
          <select
            name="goal"
            required
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-[#DF72E1] px-4 py-2 pr-8 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="">Select your budget goals</option>
            <option value="higher">higher</option>
            <option value="same">same</option>
            <option value="lower">lower</option>
          </select>
        </div>

        <Button
          text="Submit"
          type="submit"
          className={valid ? "cursor-default" : "cursor-not-allowed"}
        />
      </form>
    </Container>
  )
}

export default UserInfo
