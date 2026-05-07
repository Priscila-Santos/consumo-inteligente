import { fmt } from "../App";

export default function Salario({ salario, setSalario, totalGastos, saldo, percentual }) {
  return (
    <section className="salario-box">
      <label>Salário mensal</label>
      <div className="salario-row">
        <span className="currency">R$</span>
        <input
          type="number"
          value={salario}
          onChange={(e) => setSalario(Number(e.target.value) || 0)}
          className="salario-input"
          min={0}
        />
      </div>
      <div className="salario-stats">
        <div><span>Gasto</span><strong style={{ color: "#e74c3c" }}>{fmt(totalGastos)}</strong></div>
        <div><span>Saldo</span><strong style={{ color: saldo >= 0 ? "#157318" : "#e74c3c" }}>{fmt(saldo)}</strong></div>
        <div><span>% usado</span><strong>{percentual.toFixed(1)}%</strong></div>
      </div>
    </section>
  );
}
