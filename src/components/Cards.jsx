import { CATEGORIAS, fmt } from "../App";

export default function Cards({ totaisPorCategoria }) {
  return (
    <div className="card-container">
      <div className="gastos">
        {CATEGORIAS.map((c) => (
          <div key={c.key} className="card" style={{ backgroundColor: c.color }}>
            <h3>{c.label}</h3>
            <p>{fmt(totaisPorCategoria[c.key])}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
