import listaProdutos from '../../data/listaProdutos'

export default function repeticao2(){

const comBorda = {
    border: "2px solid #000",
    AnimationEffect: true,
    
}

  function redenrizarLinhas(){
    return listaProdutos.map(produto => {
      return (
        <tr key={produto.id}>
          <td style={comBorda} >{produto.id} </td>
          <td style={comBorda} >{produto.nome}</td>
          <td style={comBorda} >{produto.preco}</td>
        </tr>
        
      )
    })
  }
  return(
    <div>
      <table>
        <thead >
          <tr >
            <th>Código</th>
            <th>Produto</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody >
          {redenrizarLinhas()}
        </tbody>
      </table>
    </div>
  )
}