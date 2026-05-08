import { useEffect, useMemo, useState } from "react";

import { getInitialExpenses } from "../services/financialService";

import {
  calculateBalance,
  calculateCategoryTotals,
  calculateExpensePercentage,
  calculateTotalExpenses,
} from "../utils/calculations";

import { generateInsights } from "../utils/insights";

export function useFinancialControl() {
  const [salario, setSalario] = useState(3000);

  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data =
        await getInitialExpenses();

      setGastos(data);
    }

    loadData();
  }, []);

  const totalGastos = useMemo(() => {
    return calculateTotalExpenses(gastos);
  }, [gastos]);

  const saldo = useMemo(() => {
    return calculateBalance(
      salario,
      totalGastos
    );
  }, [salario, totalGastos]);

  const percentual = useMemo(() => {
    return calculateExpensePercentage(
      salario,
      totalGastos
    );
  }, [salario, totalGastos]);

  const totaisPorCategoria = useMemo(() => {
    return calculateCategoryTotals(gastos);
  }, [gastos]);

  const insights = useMemo(() => {
    return generateInsights({
      saldo,
      percentual,
      totaisPorCategoria,
    });
  }, [
    saldo,
    percentual,
    totaisPorCategoria,
  ]);

  function adicionarGasto(novoGasto) {
    setGastos((prev) => [
      ...prev,
      {
        ...novoGasto,
        id: Date.now(),
      },
    ]);
  }

  function removerGasto(id) {
    setGastos((prev) =>
      prev.filter((gasto) => gasto.id !== id)
    );
  }

  return {
    salario,
    setSalario,

    gastos,

    totalGastos,
    saldo,
    percentual,

    totaisPorCategoria,

    insights,

    adicionarGasto,
    removerGasto,
  };
}