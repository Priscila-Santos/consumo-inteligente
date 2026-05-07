import { CATEGORIAS, fmt } from "../App";

export default function ListaGastos({ gastos, onRemove }) {
  return (
    <div className="lista-gastos">
      <h2>📋 Últimos gastos</h2>
      {gastos.length === 0 && <p style={{ color: "#888" }}>Nenhum gasto registrado.</p>}
      {gastos.slice().reverse().map((g) => {
        const cat = CATEGORIAS.find((c) => c.key === g.categoria);
        return (
          <div key={g.id} className="gasto-item">
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className="dot" style={{ backgroundColor: cat.color }} />
              <span>{g.descricao}</span>
              <small style={{ color: "#888" }}>({cat.label})</small>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <strong>{fmt(g.valor)}</strong>
              <button className="remove-btn" onClick={() => onRemove(g.id)}>×</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
