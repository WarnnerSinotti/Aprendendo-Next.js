import Titulo from '../../components/Titulo'  /* Importei component titulo */

export default function usandoTitulo(){
  return(
    <div>
      <h1>Usando Titulo</h1>
      <Titulo  principal = "Página de Cadastro"
              segundario = "Descrição de tudo"
       />  

      <Titulo  principal = "digite seu e-mail"
              segundario = "digite sua senha"
              pequeno = {true}
       />  
    </div>
  )
}