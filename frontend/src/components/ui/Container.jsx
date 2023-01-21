const Container = (props) => {
  return (
    <div className={"w-full h-full p-8 " + props.className}>
      {props.children}
    </div>
  )
}

export default Container
