const Header = (props) => {
  return (
    <h1
      className={"text-black font-bold text-2xl text-center " + props.className}
    >
      {props.text}
    </h1>
  )
}

export default Header
