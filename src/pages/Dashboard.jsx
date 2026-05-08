import "../App.css";

import Salario from "../components/Salario";
import Cards from "../components/Cards";
import FormGasto from "../components/FormGasto";
import ListaGastos from "../components/ListaGastos";
import Insights from "../components/Insights";

import { useFinancialControl } from "../hooks/useFinancialControl";

export default function Dashboard() {
  const {
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
  } = useFinancialControl();

  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <h1>
            💰 Consumo Inteligente
          </h1>

          <p>
            Organize suas finanças com
            dados inteligentes
          </p>
        </header>

        <Salario
          salario={salario}
          setSalario={setSalario}
          totalGastos={totalGastos}
          saldo={saldo}
          percentual={percentual}
        />

        <Cards
          totaisPorCategoria={
            totaisPorCategoria
          }
        />

        <FormGasto
          onAdd={adicionarGasto}
        />

        <div className="layout-inferior">
          <div className="lista-gastos">
            <ListaGastos
              gastos={gastos}
              onRemove={removerGasto}
            />
          </div>

          <div className="insights">
            <Insights insights={insights} />
          </div>
        </div>
      </div>
    </div>
  );
}