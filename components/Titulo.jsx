export default function Titulo(props){
  
  if (props.pequeno){

  return (
   
    <>
      <p> {props.principal}</p>
       <p>{props.segundario}</p>
           
    </>
    )
  } else {
    return (
    <>
    <h1> {props.email}</h1>
    <h2>{props.senha}</h2>
    </>
  )
}
}