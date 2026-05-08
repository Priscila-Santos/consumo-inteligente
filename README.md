# Sistema Inteligente de Análise de Perfil Financeiro, Consumo e Geração de Insights

## 1. Visão Geral do Projeto

O sistema **Consumo Inteligente** é uma aplicação web desenvolvida utilizando:

* React JS
* JavaScript
* HTML5
* CSS3
* JSON Local

O objetivo do sistema é realizar:

* análise de consumo financeiro;
* classificação de gastos;
* geração de insights automáticos;
* visualização de comportamento financeiro;
* apoio à tomada de decisão.

O projeto foi desenvolvido com foco em:

* componentização;
* responsividade;
* boas práticas React;
* separação de responsabilidades;
* arquitetura escalável.


## 2. Objetivo do Sistema

Permitir que usuários:

* registrem gastos;
* acompanhem despesas;
* analisem categorias dominantes;
* visualizem saldo financeiro;
* recebam insights automáticos sobre hábitos de consumo.


## 3. Tecnologias Utilizadas

| Tecnologia  | Finalidade                |
| ----------- | ------------------------- |
| React JS    | Interface frontend        |
| JavaScript  | Regras de negócio         |
| CSS3        | Estilização               |
| JSON        | Simulação de dados        |
| Hooks React | Gerenciamento de estado   |
| useMemo     | Otimização de performance |


## 4. Estrutura do Projeto

```bash id="43gxg8"
src/
│
├── components/
│   ├── Cards.jsx
│   ├── FormGasto.jsx
│   ├── Insights.jsx
│   ├── ListaGastos.jsx
│   └── Salario.jsx
│
├── constants/
│   └── categories.js
│
├── data/
│   └── gastos.json
│
├── hooks/
│   └── useFinancialControl.js
│
├── pages/
│   └── Dashboard.jsx
│
├── services/
│   └── financialService.js
│
├── utils/
│   ├── calculations.js
│   ├── formatter.js
│   └── insights.js
│
├── App.jsx
└── App.css
```


## 5. Arquitetura do Sistema

A aplicação foi estruturada seguindo princípios de:

* separação de responsabilidades;
* reutilização de código;
* componentização;
* desacoplamento.

## 6. Fluxo da Aplicação

### Fluxo principal

```text id="xftixm"
JSON → Service → Hook → Página → Componentes
```


## 7. Descrição dos Diretórios


### 7.1 components/

Contém os componentes reutilizáveis da interface.

### Cards.jsx

Responsável pela exibição dos totais por categoria.

### FormGasto.jsx

Responsável pelo cadastro de novos gastos.

### ListaGastos.jsx

Responsável pela listagem e remoção dos gastos.

### Salario.jsx

Exibe:

* salário;
* saldo;
* percentual utilizado;
* total gasto.

### Insights.jsx

Exibe recomendações e análises automáticas.


### 7.2 constants/

Contém constantes reutilizáveis do sistema.

#### categories.js

Define:

* categorias;
* labels;
* cores utilizadas.

Exemplo:

```javascript id="p7yb9e"
{
  key: "alimentacao",
  label: "Alimentação",
  color: "#48BB78"
}
```

### 7.3 data/

Contém os dados simulados da aplicação.

#### gastos.json

Responsável por armazenar os gastos iniciais.

Exemplo:

```json id="cfjlwm"
{
  "id": 1,
  "category": "alimentacao",
  "description": "Almoço",
  "amount": 50
}
```

---

### 7.4 hooks/

Contém hooks personalizados da aplicação.

#### useFinancialControl.js

Centraliza:

* estados;
* cálculos;
* insights;
* regras financeiras;
* manipulação de gastos.

Essa abordagem reduz:

* acoplamento;
* repetição;
* complexidade do App.jsx.

### 7.5 services/

Camada responsável pelo acesso aos dados.

#### financialService.js

Realiza:

* leitura do JSON;
* futura integração com APIs.

## 7.6 utils/

Contém funções auxiliares reutilizáveis.


#### calculations.js

Responsável pelos cálculos:

* total de gastos;
* saldo;
* percentual utilizado;
* totais por categoria.


#### formatter.js

Responsável pela formatação monetária.

Exemplo:

```javascript id="qljlwm"
formatCurrency(100)
```

Resultado:

```text id="6jlwm6"
R$ 100,00
```

---

#### insights.js

Responsável pela geração automática de insights.

Exemplo:

* gastos excessivos;
* categoria dominante;
* saldo negativo.


## 8. Padrões Utilizados


### 8.1 Componentização

Cada componente possui responsabilidade única.


### 8.2 Reutilização

Funções reutilizáveis foram movidas para:

* utils;
* hooks;
* constants.


### 8.3 Separação de Responsabilidades

| Camada     | Responsabilidade |
| ---------- | ---------------- |
| Components | Interface        |
| Hooks      | Estados e regras |
| Utils      | Cálculos         |
| Services   | Dados            |
| Constants  | Configurações    |


### 8.4 Escalabilidade

A estrutura permite:

* adicionar APIs;
* novos gráficos;
* autenticação;
* dashboards;
* persistência;
* banco de dados.


## 9. Funcionalidades Implementadas

| Funcionalidade             | Status |
| -------------------------- | ------ |
| Cadastro de gastos         | ✅      |
| Remoção de gastos          | ✅      |
| Cálculo de saldo           | ✅      |
| Percentual de uso salarial | ✅      |
| Totais por categoria       | ✅      |
| Insights automáticos       | ✅      |
| Organização por categorias | ✅      |
| JSON local                 | ✅      |
| Hook personalizado         | ✅      |


## 10. Insights Inteligentes

O sistema realiza:

* análise financeira;
* análise de categorias;
* recomendações automáticas.

Exemplos:

* excesso de gastos;
* categoria dominante;
* alerta de saldo negativo.



## 11. Responsividade

A aplicação foi desenvolvida com:

* Flexbox;
* Grid;
* rem;
* variáveis CSS;
* layout adaptável.


## 12. Melhorias Futuras

### Backend

Integração com:

* Node.js;
* Express;
* banco de dados.


### API Pública

Integração com APIs financeiras reais.


### Dashboard Analítico

Implementação de:

* gráficos;
* indicadores;
* estatísticas avançadas.


### Persistência

Uso de:

* localStorage;
* banco de dados.


### Inteligência de Consumo

Implementar:

* detecção de padrões;
* previsões;
* machine learning simples.

---

## 13. Boas Práticas Aplicadas

✅ Componentização
✅ Hooks personalizados
✅ Separação de responsabilidades
✅ Reutilização de código
✅ Arquitetura escalável
✅ Responsividade
✅ Organização de pastas
✅ Otimização com useMemo
✅ Código desacoplado


## 14. Conclusão

O sistema desenvolvido atende aos requisitos propostos para:

* análise de consumo;
* organização financeira;
* geração de insights automáticos.

A arquitetura utilizada permite:

* manutenção simplificada;
* expansão futura;
* integração com APIs;
* evolução para aplicações profissionais.

O projeto demonstra aplicação prática de:

* React;
* JavaScript;
* manipulação de dados;
* componentização;
* lógica financeira;
* boas práticas frontend.
