export default function Estilo(props) {
  const MudardeCor = props.numero >= 0 ? "coral" : "darkorange";  //este estilo está no css global

  return (
    <div>
      <h1
        style={{
          backgroundColor: props.numero >= 0 ? "#2d2" : "#d52",
          color: props.color,
          textAlign: props.direita ? "right" : "left",
          fontSize: props.font,
        }}
      >
        Texto
      </h1>
      <h2 className={MudardeCor}> Mudar de Cor </h2>
    </div>
  );
}
