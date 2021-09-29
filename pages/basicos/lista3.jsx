function gerarLista(final = 10) {
  const lista = []
  for (let i = 1; i <= final; i++){
    lista.push(<span>{i},</span>)
  }
  return lista
}

export default function lista(){
  return (
    <div>
      <div>
      {gerarLista()} {/* dentro do () apenas numeros */}
    </div>
    <div>
    {gerarLista(3)}
  </div>
  </div>
  )
}