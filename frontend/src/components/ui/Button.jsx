const Button = ({ text, theme = "default", ...props }) => {
  return (
    <button
      className={
        "h-fit py-2 px-4 rounded-lg font-medium hover:bg-transparent hover:ease-in-out duration-100 shadow-lg text-white " +
        (theme === "default"
          ? "hover:text-[#DF72E1] bg-[#DF72E1] border-2 border-[#DF72E1] "
          : "w-fit hover:text-[#EB4646] bg-[#EB4646] border-2 border-[#EB4646] ") +
        props.className
      }
      {...props}
    >
      {text}
    </button>
  )
}

export default Button
