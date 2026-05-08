import { useState } from "react";

import { CATEGORIAS } from "../constants/categories";

export default function FormGasto({
  onAdd,
}) {
  const [descricao, setDescricao] =
    useState("");

  const [valor, setValor] =
    useState("");

  const [categoria, setCategoria] =
    useState("alimentacao");

  function handleSubmit(event) {
    event.preventDefault();

    const valorConvertido =
      parseFloat(valor);

    if (
      !descricao.trim() ||
      isNaN(valorConvertido) ||
      valorConvertido <= 0
    ) {
      return;
    }

    // OBJETO PADRONIZADO
    onAdd({
      id: Date.now(),

      type: "expense",

      description:
        descricao.trim(),

      amount: valorConvertido,

      category: categoria,

      date: new Date()
        .toISOString()
        .split("T")[0],
    });

    setDescricao("");
    setValor("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="form"
    >
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(event) =>
          setDescricao(event.target.value)
        }
      />

      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(event) =>
          setValor(event.target.value)
        }
        step="0.01"
        min="0"
      />

      <select
        value={categoria}
        onChange={(event) =>
          setCategoria(event.target.value)
        }
      >
        {CATEGORIAS.map((categoria) => (
          <option
            key={categoria.key}
            value={categoria.key}
          >
            {categoria.label}
          </option>
        ))}
      </select>

      <button type="submit">
        + Adicionar
      </button>
    </form>
  );
}