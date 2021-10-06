export default function Item(props){
  return(
    <div>
      <h1>Lista de Props.Children</h1>
      <ul style={{
        listStyle: "none",
        padding: 0
      }}>
      {props.children}
    </ul>
    </div>
  )
}