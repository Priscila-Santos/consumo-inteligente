import { useMemo } from "react";

export function useFinancialData(transactions, salary) {
  const totalExpenses = useMemo(() => {
    return transactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
  }, [transactions]);

  const balance = salary - totalExpenses;

  return {
    totalExpenses,
    balance,
  };
}