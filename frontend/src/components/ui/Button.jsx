const Button = ({ text }) => {
  return (
    <button
      className="h-fit py-2 px-4 rounded-lg font-medium hover:bg-transparent hover:ease-in-out duration-100 
    shadow-lg text-white hover:text-[#DF72E1] bg-[#DF72E1] border-2 border-[#DF72E1]"
    >
      {text}
    </button>
  )
}

export default Button
