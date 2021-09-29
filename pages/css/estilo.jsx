import Estilo from "../../components/Estilo";

export default function usandoEstilo(){
  return(
    <div>
    <Estilo numero={3}    color="#d55"           />  
    <Estilo numero={-13}  color="#fff"  direita={true}  font={50}       />  
    </div>
  )
}