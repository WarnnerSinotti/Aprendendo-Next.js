export default function jsx04(){
  const subtitulo = "aprendendo jsx"

  return (
    <div>
      <h1>teste</h1>
     <h2>{subtitulo}</h2>
     <h2>{3*3}</h2>
     <h3>{Math.max(13,50,119,503)}</h3>
      </div>
  )
}

function entre(valor, min, max){
  if( valor >= min && valor <= max){
    return "Sim"
  } else{
    return "Não"
  }
}