export function calcularTotalGastos(gastos) {
    return gastos.reduce((total, item) => total + item.valor, 0);
}

export function agruparGastosPorCategoria(gastos) {
    const categorias = {};

    gastos.forEach((item) => {
        if (!categorias[item.categoria]) {
            categorias[item.categoria] = 0;
        }
        categorias[item.categoria] += item.valor;
    });
    return categorias;
}

export function categoriaMaisGastos(categorias) {
    let categoriaMax = null;
    let valorMax = 0;

    for (let cat in categorias) {
        if (categorias[cat] > valorMax) {
            valorMax = categorias[cat];
            categoriaMax = cat;
        }
    }
    return categoriaMax;
}

export function gerarInsights(categorias, totalGastos) {
    const insights = [];
    
    // Adicionadas as chaves para envolver o bloco do loop
    for (let cat in categorias) {
        const percentagem = (categorias[cat] / totalGastos) * 100;

        if (percentagem > 40) {
            insights.push(`Atenção! Gastos com ${cat} estão acima de 40% do total.`);
        }
        
        if (cat === "Lazer" && percentagem > 30) {
            insights.push("Cuidado! Gastos com Lazer estão acima de 30% do total. Tente reduzir gastos para economizar.");
        }
    } // Fim do loop

    return insights; // Retorno movido para fora do loop
}