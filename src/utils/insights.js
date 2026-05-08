export function generateInsights({
  saldo,
  percentual,
  totaisPorCategoria,
}) {
  const insights = [];

  if (saldo < 0) {
    insights.push({
      type: "danger",
      message:
        "Seu saldo está negativo. Reveja seus gastos.",
    });
  }

  if (percentual > 80) {
    insights.push({
      type: "warning",
      message:
        "Você já comprometeu mais de 80% da renda.",
    });
  }

  const dominantCategory = Object.entries(
    totaisPorCategoria
  ).sort((a, b) => b[1] - a[1])[0];

  if (dominantCategory) {
    insights.push({
      type: "info",
      message: `Sua categoria dominante é ${dominantCategory[0]}.`,
    });
  }

  return insights;
}