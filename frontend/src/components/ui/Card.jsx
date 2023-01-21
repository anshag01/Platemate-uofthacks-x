import Button from "./Button"

const Card = (props) => {
  return (
    <div className="w-[400px] p-2 flex items-center gap-x-8 rounded-lg shadow-lg">
      <img src={props.pic} alt="pic1" className="w-20 h-20" />
      <div className="">
        <h1 className="font-bold text-xl">{props.title}</h1>
        <h1>{props.address}</h1>
      </div>
      <Button text="Check" />
    </div>
  )
}

export default Card
