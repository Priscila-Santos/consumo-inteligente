import { CATEGORIAS } from "../constants/categories";
import { formatCurrency } from "../utils/formatter";

export default function Cards({
  totaisPorCategoria,
}) {
  return (
    <div className="card-container">
      <div className="gastos">
        {CATEGORIAS.map((categoria) => (
          <div
            key={categoria.key}
            className="card"
            style={{
              backgroundColor:
                categoria.color,
            }}
          >
            <h3>{categoria.label}</h3>

            <p>
              {formatCurrency(
                totaisPorCategoria[
                  categoria.key
                ]
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}