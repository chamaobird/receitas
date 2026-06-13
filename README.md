# Receitas da Semana — Projeto

Site estático de receitas pessoais com escala dinâmica de ingredientes, hospedado no GitHub Pages e alimentado por uma planilha no Google Sheets.

---

## Contexto

Este projeto foi iniciado no Claude.ai (chat). O `index.html` é o resultado dessa primeira fase. O Claude Code assume a partir daqui para evoluir a estrutura, conectar a fonte de dados e preparar o deploy.

O dono do projeto cozinha para uma família de três perfis:
- **Filha**: opções neutras, sem picância, especialmente no começo da semana
- **Esposa**: aprecia sabores marcantes, sensível a excesso de ardência
- **Usuário**: aceita sabores mais ousados a partir de quarta-feira

As receitas seguem sempre a lógica: **proteína principal + blend de tempero**. Os acompanhamentos (arroz, quinoa, lentilha, batata) são tratados separadamente e não fazem parte deste projeto por enquanto.

---

## Stack

- **Frontend**: HTML + CSS + JavaScript puro (sem frameworks)
- **Fonte de dados**: Google Sheets (planilha pública, lida via Sheets API v4)
- **Hospedagem**: GitHub Pages (repositório público)
- **Sem build step**: o site é um único `index.html` + assets opcionais

---

## Estrutura atual do projeto

```
/
├── index.html        ← site completo, dados embutidos no HTML (fase 1)
├── README.md         ← este arquivo
├── ROADMAP.md        ← tarefas para o Claude Code executar
└── data/
    └── recipes.js    ← (a criar) dados das receitas como módulo JS externo
```

---

## Decisões de design já tomadas

- Visual limpo, flat, sem gradientes ou sombras decorativas
- Dark mode automático via `@media (prefers-color-scheme: dark)`
- Navegação por abas de proteína no topo (sticky)
- Receitas exibidas como cards expansíveis (accordion)
- Filtro Neutras / Marcantes dentro de cada proteína
- Campo numérico de quantidade no topo de cada seção → recalcula todos os ingredientes proporcionalmente
- Medidas sempre em gramas, com precisão de 1 casa decimal para valores < 1 g
- Valores em faixa (ex: 0,3–0,5 g) são suportados via `data-base-min` / `data-base-max`

---

## Fonte de dados: Google Sheets

A planilha tem uma aba única chamada `Receitas` com as seguintes colunas:

| Coluna | Tipo | Descrição |
|---|---|---|
| `proteina` | texto | `frango`, `porco` ou `carne` |
| `receita_id` | texto | slug único, ex: `frango-neutro-a` |
| `receita_nome` | texto | nome completo da receita |
| `perfil` | texto | `neutro` ou `marcante` |
| `quem_atende` | texto | ex: `Toda a família · Kid-friendly` |
| `descricao` | texto | frase curta de perfil de sabor |
| `base_g` | número | quantidade base da proteína principal em gramas |
| `ingrediente` | texto | nome do ingrediente |
| `quantidade_min` | número | quantidade mínima na base (ou valor único se não for faixa) |
| `quantidade_max` | número | quantidade máxima na base (igual a min se não for faixa) |
| `unidade` | texto | sempre `g` por enquanto |
| `nota` | texto | observação opcional (ex: "opcional", "pode zerar") |
| `tipo` | texto | `seco`, `fresco` ou `proteina` |
| `ordem` | número | ordem de exibição dentro da receita |

Os passos de preparo ficam numa segunda aba chamada `Passos`:

| Coluna | Tipo | Descrição |
|---|---|---|
| `receita_id` | texto | chave estrangeira para `Receitas` |
| `ordem` | número | ordem do passo |
| `texto` | texto | instrução do passo (pode conter `**texto**` para negrito) |

---

## Variáveis de ambiente necessárias

Nenhuma. A planilha do Google Sheets é pública e acessada via URL direta:

```
https://sheets.googleapis.com/v4/spreadsheets/{SHEET_ID}/values/{RANGE}?key={API_KEY}
```

A API key do Google Sheets (sem restrição de domínio, ou restrita ao domínio do GitHub Pages) deve ser inserida diretamente no `index.html` como constante JS. Não há backend.

---

## Proteínas e receitas atuais

### Frango (base 1000 g)
- Frango Neutro A — alho, ervas e páprica
- Frango Neutro B — alho, limão e dill
- Frango Marcante 1 — defumado suave
- Frango Marcante 2 — curry leve

### Pork loin (base 500 g)
- Porco Neutro — alho, ervas e páprica doce
- Porco Marcante — defumado com cominho

### Carne moída 88% (base 500 g)
- Carne moída neutra — alho, cebola e ervas
- Carne moída marcante — cominho e páprica defumada

---

## O que NÃO fazer

- Não usar React, Vue ou qualquer framework JS
- Não adicionar bundler (Webpack, Vite, etc.)
- Não criar backend ou servidor
- Não usar localStorage (não funciona no ambiente de preview do Claude.ai)
- Não mudar a lógica de escala de ingredientes — ela já funciona
- Não alterar o design sem instrução explícita

---

## Contato com o projeto

Iniciado e mantido via Claude.ai. Evoluções futuras de código via Claude Code. Novas receitas e ajustes de conteúdo via Claude.ai com o arquivo `perfil_culinario_claude.md` como contexto.
