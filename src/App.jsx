import { useState, useMemo } from "react";
import "./App.css";

// 1. Importando os dados do seu arquivo JSON
import gastosIniciais from "./data/gastos.json";

// 2. Importando seus componentes
import Salario from "./components/Salario";
import Cards from "./components/Cards";
import FormGasto from "./components/FormGasto";
import ListaGastos from "./components/ListaGastos";
import Insights from "./components/Insights";

// --- ESTA É A PARTE QUE ESTAVA FALTANDO E QUE OS COMPONENTES PRECISAM ---
export const CATEGORIAS = [
  { key: "alimentacao", label: "Alimentação", color: "#48BB78" },
  { key: "transporte", label: "Transporte",  color: "#4299E1" },
  { key: "lazer",      label: "Lazer",       color: "#e67e22" },
  { key: "educacao",   label: "Educação",    color: "#9F7AEA" },
  { key: "saude",      label: "Saúde",       color: "#F56565" },
];

export const fmt = (n) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
// -----------------------------------------------------------------------

export default function App() {
  // Estado inicial
  const [salario, setSalario] = useState(3000);
  const [gastos, setGastos] = useState(gastosIniciais);

  // Cálculos de resumo
  const totalGastos = useMemo(() => {
    return gastos.reduce((acc, g) => acc + g.valor, 0);
  }, [gastos]);

  const saldo = salario - totalGastos;
  const percentual = salario > 0 ? (totalGastos / salario) * 100 : 0;

  // Agrupamento por categoria para os Cards
  const totaisPorCategoria = useMemo(() => {
    const map = { alimentacao: 0, transporte: 0, lazer: 0, educacao: 0, saude: 0 };
    gastos.forEach((g) => {
      // Ajuste para ignorar maiúsculas/minúsculas do JSON
      const cat = g.categoria.toLowerCase();
      if (map[cat] !== undefined) map[cat] += g.valor;
    });
    return map;
  }, [gastos]);

  // Funções para os componentes
  const adicionarGasto = (novoGasto) => {
    setGastos((prev) => [...prev, { ...novoGasto, id: Date.now() }]);
  };

  const removerGasto = (id) => {
    setGastos((prev) => prev.filter((g) => g.id !== id));
  };

  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <h1>💰 Consumo Inteligente</h1>
          <p>Organize suas finanças com dados reais</p>
        </header>

        <Salario
          salario={salario}
          setSalario={setSalario}
          totalGastos={totalGastos}
          saldo={saldo}
          percentual={percentual}
        />

        <Cards totaisPorCategoria={totaisPorCategoria} />

        <FormGasto onAdd={adicionarGasto} />

        <div className="layout-inferior">
          <div className="lista-gastos">
            <ListaGastos gastos={gastos} onRemove={removerGasto} />
          </div>

          <div className="insights">
            <Insights 
              saldo={saldo} 
              percentual={percentual} 
              totaisPorCategoria={totaisPorCategoria} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}