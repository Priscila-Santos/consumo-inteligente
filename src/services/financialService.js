import gastosIniciais from "../data/gastos.json";

export async function getInitialExpenses() {
  return gastosIniciais;
}