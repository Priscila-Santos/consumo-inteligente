// import { CATEGORIAS, fmt } from "../App";

// export default function Insights({ salario, saldo, percentual, totaisPorCategoria }) {
//   const maior = Object.entries(totaisPorCategoria)
//     .reduce((a, b) => (b[1] > a[1] ? b : a), ["", 0]);

//   return (
//     <div className="insights">
//       <h2>✨ Insights</h2>
//       <ul>
//         <li>Você já comprometeu <strong>{percentual.toFixed(1)}%</strong> do seu salário.</li>
//         {maior[0] && (
//           <li>Maior gasto: <strong>{CATEGORIAS.find((c) => c.key === maior[0])?.label}</strong> ({fmt(maior[1])})</li>
//         )}
//         <li>{saldo >= 0
//           ? `Você ainda tem ${fmt(saldo)} disponíveis este mês. 🎉`
//           : `Atenção! Você ultrapassou o salário em ${fmt(Math.abs(saldo))}. ⚠️`}</li>
//         <li>Sugestão: economize pelo menos <strong>{fmt(salario * 0.1)}</strong> (10% do salário).</li>
//         {totaisPorCategoria.lazer > salario * 0.15 &&
//           <li>🎬 Seus gastos com lazer estão acima de 15% do salário.</li>}
//         {totaisPorCategoria.alimentacao > salario * 0.35 &&
//           <li>🍽️ Alimentação acima de 35% — considere revisar.</li>}
//       </ul>
//     </div>
//   );
// }
export default function Insights({
  insights,
}) {
  return (
    <div>
      <h2>Insights Inteligentes</h2>

      {insights.map((insight, index) => (
        <div
          key={index}
          className={`insight ${insight.type}`}
        >
          <p>{insight.message}</p>
        </div>
      ))}
    </div>
  );
}