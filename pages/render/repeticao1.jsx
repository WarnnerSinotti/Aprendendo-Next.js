export default function repeticao1(){
  const listaAprovados = [

      'Warnner',
      'Vanessa',
      'Giovanna',
      'Renan',
      'Otavio',
      'Gabriel',
      'Dexter',

  ]
  
  function renderlist(){
      return listaAprovados.map(function(nome, i){
        return <li key={i}>{nome}</li>
      })
        
      }
   
     
  return (
    <ul>
      {renderlist()}
    </ul>
  )
}
