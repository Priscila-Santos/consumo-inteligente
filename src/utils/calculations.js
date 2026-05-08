export function calculateTotalExpenses(
  expenses
) {
  return expenses.reduce(
    (acc, expense) =>
      acc + expense.amount,
    0
  );
}

export function calculateBalance(
  salary,
  totalExpenses
) {
  return salary - totalExpenses;
}

export function calculateExpensePercentage(
  salary,
  totalExpenses
) {
  if (salary <= 0) return 0;

  return (
    (totalExpenses / salary) * 100
  );
}

export function calculateCategoryTotals(
  expenses
) {
  const totals = {
    alimentacao: 0,
    transporte: 0,
    lazer: 0,
    educacao: 0,
    saude: 0,
  };

  expenses.forEach((expense) => {
    if (!expense?.category) return;

    const category =
      expense.category.toLowerCase();

    if (totals[category] !== undefined) {
      totals[category] +=
        expense.amount || 0;
    }
  });

  return totals;
}