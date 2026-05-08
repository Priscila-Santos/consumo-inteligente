import { CATEGORIAS } from "../constants/categories";
import { formatCurrency } from "../utils/formatter";

export default function ListaGastos({
  gastos,
  onRemove,
}) {
  return (
    <div className="lista-gastos">
      <h2>📋 Últimos gastos</h2>

      {gastos.length === 0 && (
        <p style={{ color: "#888" }}>
          Nenhum gasto registrado.
        </p>
      )}

      {gastos
        .slice()
        .reverse()
        .map((g) => {
          const cat = CATEGORIAS.find(
            (c) => c.key === g.category
          );

          return (
            <div
              key={g.id}
              className="gasto-item"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  className="dot"
                  style={{
                    backgroundColor:
                      cat?.color || "#999",
                  }}
                />

                <span>
                  {g.description}
                </span>

                <small
                  style={{
                    color: "#888",
                  }}
                >
                  ({cat?.label || "Sem categoria"})
                </small>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <strong>
                  {formatCurrency(
                    g.amount
                  )}
                </strong>

                <button
                  className="remove-btn"
                  onClick={() =>
                    onRemove(g.id)
                  }
                >
                  ×
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
