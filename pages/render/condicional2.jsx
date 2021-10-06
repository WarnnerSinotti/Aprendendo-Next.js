import If from "../../components/If";

export default function condiconal2() {
  const numero = 2;

  return (
    <div>
      <If teste={numero % 2 === 0}>
        <h1> O número {numero} é Par </h1>
      </If>

      <If teste={numero % 2 === 1}>
        <h1> O número {numero} é Ímpar </h1>
      </If>
    </div>
  );
}
