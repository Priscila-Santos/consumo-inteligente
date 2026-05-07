import { useState } from "react";
import { CATEGORIAS } from "../App";

export default function FormGasto({ onAdd }) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("alimentacao");

  function handleSubmit(e) {
    e.preventDefault();
    const v = parseFloat(valor);
    if (!descricao.trim() || isNaN(v) || v <= 0) return;
    onAdd({ descricao: descricao.trim(), valor: v, categoria });
    setDescricao(""); setValor("");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" placeholder="Descrição" value={descricao}
        onChange={(e) => setDescricao(e.target.value)} />
      <input type="number" placeholder="Valor" value={valor}
        onChange={(e) => setValor(e.target.value)} step="0.01" min="0"
        style={{ maxWidth: 120 }} />
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        {CATEGORIAS.map((c) => <option key={c.key} value={c.key}>{c.label}</option>)}
      </select>
      <button type="submit">+ Adicionar</button>
    </form>
  );
}
