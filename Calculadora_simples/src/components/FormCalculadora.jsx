import { useState } from "react";
import "./FormCalculadora.css";

function FormCalculadora() {
  const [primeiroNumero, setPrimeiroNumero] = useState("");
  const [segundoNumero, setSegundoNumero] = useState("");
  const [operacao, setOperacao] = useState("+");
  const [resultado, setResultado] = useState("");

  function calcular() {
    const numero1 = Number(primeiroNumero);
    const numero2 = Number(segundoNumero);

    if (primeiroNumero === "" || segundoNumero === "") {
      setResultado("Preencha os dois números.");
      return;
    }

    let valorCalculado;

    switch (operacao) {
      case "+":
        valorCalculado = numero1 + numero2;
        break;

      case "-":
        valorCalculado = numero1 - numero2;
        break;

      case "*":
        valorCalculado = numero1 * numero2;
        break;

      case "/":
        if (numero2 === 0) {
          setResultado("Não é possível dividir por zero.");
          return;
        }
        valorCalculado = numero1 / numero2;
        break;

      default:
        setResultado("Operação inválida.");
        return;
    }

    setResultado(valorCalculado);
  }

  function limpar() {
    setPrimeiroNumero("");
    setSegundoNumero("");
    setOperacao("+");
    setResultado("");
  }

  return (
    <div className="calculadora">
      <h1>Calculadora Simples</h1>

      <div className="campo">
        <label>Primeiro número</label>
        <input
          type="number"
          value={primeiroNumero}
          onChange={(e) => setPrimeiroNumero(e.target.value)}
          placeholder="Digite um número"
        />
      </div>

      <div className="campo">
        <label>Segundo número</label>
        <input
          type="number"
          value={segundoNumero}
          onChange={(e) => setSegundoNumero(e.target.value)}
          placeholder="Digite um número"
        />
      </div>

      <div className="campo">
        <label>Operação</label>
        <select
          value={operacao}
          onChange={(e) => setOperacao(e.target.value)}
        >
          <option value="+">Adição (+)</option>
          <option value="-">Subtração (-)</option>
          <option value="">Multiplicação ()</option>
          <option value="/">Divisão (/)</option>
        </select>
      </div>

      <div className="botoes">
        <button className="btn-calcular" onClick={calcular}>
          Calcular
        </button>

        <button className="btn-limpar" onClick={limpar}>
          Limpar
        </button>
      </div>

      {resultado !== "" && (
        <div className="resultado">
          <h2>Resultado</h2>
          <p>{resultado}</p>
        </div>
      )}
    </div>
  );
}

export default FormCalculadora;