import Filho from "./Filho";

export default function Pai(props){
  return(
    <div>
      <Filho nome="Tupac" familia={props.familia}></Filho>
      <Filho nome="Vanessa" familia={props.familia}></Filho>
      <Filho nome="Warnner" familia={props.familia}></Filho>
      <Filho nome="Dexter"></Filho>
    </div>
  )
}