import { formatCurrency } from "../utils/formatter";

export default function Salario({
  salario,
  setSalario,
  totalGastos,
  saldo,
  percentual,
}) {
  return (
    <section className="salario-box">
      <label>Salário mensal</label>

      <div className="salario-row">
        <span className="currency">
          R$
        </span>

        <input
          type="number"
          value={salario}
          onChange={(event) =>
            setSalario(
              Number(event.target.value) || 0
            )
          }
          className="salario-input"
          min={0}
        />
      </div>

      <div className="salario-stats">
        <div>
          <span>Gasto</span>

          <strong
            style={{
              color: "#e74c3c",
            }}
          >
            {formatCurrency(
              totalGastos
            )}
          </strong>
        </div>

        <div>
          <span>Saldo</span>

          <strong
            style={{
              color:
                saldo >= 0
                  ? "#157318"
                  : "#e74c3c",
            }}
          >
            {formatCurrency(saldo)}
          </strong>
        </div>

        <div>
          <span>% usado</span>

          <strong>
            {percentual.toFixed(1)}%
          </strong>
        </div>
      </div>
    </section>
  );
}