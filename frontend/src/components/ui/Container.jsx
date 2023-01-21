const Container = (props) => {
  return (
    <div
      className={"md:w-[500px] w-full h-full p-8 mx-auto " + props.className}
    >
      {props.children}
    </div>
  )
}

export default Container
