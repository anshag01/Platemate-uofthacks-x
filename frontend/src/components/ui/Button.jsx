const Button = ({ text }) => {
  return (
    <button
      className="py-3 px-16 w-full rounded-full font-medium hover:bg-transparent hover:ease-in-out duration-100 
    text-white hover:text-[#DF72E1] bg-[#DF72E1] border-2 border-[#DF72E1]"
    >
      {text}
    </button>
  )
}

export default Button
