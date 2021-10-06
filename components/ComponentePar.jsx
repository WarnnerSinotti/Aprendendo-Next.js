export default function ComponentePar(props) {
  const numeroPar = props.numero % 2 === 0;
  return numeroPar ? <h5>{props.numero}</h5> : null;

  //  Duas formas de fazer alteração de IF
  //    if(props.numero % 2 === 0) {
  //    return <h5>{props.numero}</h5>
  //    }
  //    else{
  //    return null
  //     }
}
