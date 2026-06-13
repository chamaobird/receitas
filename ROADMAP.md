# ROADMAP — Receitas da Semana

Tarefas em ordem de execução para o Claude Code. Cada fase é independente e entregável. Não pular fases.

---

## FASE 1 — Estrutura de dados externa ✅ (concluída no Claude.ai)

O `index.html` atual contém os dados das receitas embutidos no HTML. Isso funciona, mas torna difícil adicionar receitas sem editar o código.

**Status**: entregue. Seguir para Fase 2.

---

## FASE 2 — Separar dados do código ✅ (concluída)

### Objetivo
Extrair os dados das receitas do `index.html` para um arquivo JS externo (`data/recipes.js`), mantendo o site funcionando exatamente como antes.

### Tarefas

**2.1** Criar o arquivo `data/recipes.js` com um objeto JS exportado `window.RECIPES` contendo todas as receitas no seguinte formato:

```js
window.RECIPES = [
  {
    id: "frango-neutro-a",
    proteina: "frango",
    nome: "Frango Neutro A — alho, ervas e páprica",
    perfil: "neutro",
    quem_atende: "Toda a família · Kid-friendly",
    descricao: "Suave, clássico e kid-friendly. Boa para segunda e terça.",
    base_g: 1000,
    ingredientes: [
      { nome: "Frango (peito)", min: 1000, max: 1000, unidade: "g", tipo: "proteina", nota: "" },
      { nome: "Sal", min: 10, max: 10, unidade: "g", tipo: "seco", nota: "" },
      // ...
    ],
    passos: [
      "Misturar os temperos secos em um potinho.",
      "Juntar azeite e limão e formar uma pasta leve.",
      // ...
    ]
  },
  // ...
];
```

**2.2** Reescrever o `index.html` para:
- Remover todo o HTML de receitas embutido (os `.recipe-card` hardcoded)
- Carregar `data/recipes.js` via `<script src="data/recipes.js">`
- Renderizar os cards dinamicamente a partir de `window.RECIPES` com uma função `renderRecipes(protein)`
- Manter toda a lógica de escala, filtro, accordion e tabs exatamente igual

**2.3** Testar localmente (abrir `index.html` no browser via `file://`) e confirmar que todas as 8 receitas renderizam corretamente com escala funcionando.

### Critério de aceite
Abrir `index.html` localmente mostra as mesmas 8 receitas com o mesmo visual e a escala funciona para todas.

---

## FASE 3 — Configurar Google Sheets como fonte de dados (prioridade alta)

### Objetivo
Substituir `data/recipes.js` por leitura dinâmica da planilha do Google Sheets. Quando o usuário editar a planilha, o site reflete automaticamente ao recarregar.

### Pré-requisitos antes de começar
O usuário precisa:
1. Criar a planilha no Google Sheets com as abas `Receitas` e `Passos` (schema no README)
2. Tornar a planilha pública (Compartilhar → Qualquer pessoa com o link pode ver)
3. Obter o `SHEET_ID` da URL da planilha
4. Criar uma API key no Google Cloud Console (APIs & Services → Credentials) com a Google Sheets API ativada
5. Fornecer `SHEET_ID` e `API_KEY` para o Claude Code inserir no código

### Tarefas

**3.1** Criar o arquivo `js/sheets.js` com uma função assíncrona `loadFromSheets(sheetId, apiKey)` que:
- Faz fetch das duas abas (`Receitas` e `Passos`) via Sheets API v4
- Transforma os dados no mesmo formato de `window.RECIPES`
- Retorna o array de receitas

**3.2** Modificar `index.html` para:
- Definir constantes `SHEET_ID` e `API_KEY` no topo do script
- Ao carregar a página, chamar `loadFromSheets()` e passar o resultado para `renderRecipes()`
- Mostrar um estado de loading simples enquanto busca os dados ("Carregando receitas...")
- Mostrar mensagem de erro amigável se a API falhar, com fallback para `window.RECIPES` do arquivo local se existir

**3.3** Manter `data/recipes.js` como fallback local para uso offline ou em caso de erro de API.

### Critério de aceite
Editar uma quantidade de ingrediente na planilha → recarregar o site → valor atualizado aparece na receita.

---

## FASE 4 — Deploy no GitHub Pages ✅ (concluída)

### Objetivo
Publicar o site em uma URL fixa acessível pelo celular, sem custo.

### Pré-requisitos
- Usuário tem conta no GitHub
- Usuário tem Git instalado localmente (ou usará a interface web do GitHub)

### Tarefas

**4.1** Criar o arquivo `.github/workflows/deploy.yml` com um workflow simples que faz deploy automático do branch `main` para GitHub Pages a cada push.

Usar a action oficial:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/deploy-pages@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
```

**4.2** Criar o arquivo `DEPLOY.md` com o passo a passo para o usuário:
1. Criar repositório público no GitHub (nome sugerido: `receitas`)
2. Fazer push dos arquivos
3. Ativar GitHub Pages nas configurações do repositório (Settings → Pages → Source: GitHub Actions)
4. Acessar a URL gerada (formato: `https://usuario.github.io/receitas`)

**4.3** Confirmar que o `index.html` funciona corretamente com caminho relativo para `data/recipes.js` e `js/sheets.js` (sem `/` absoluto no início dos paths).

### Critério de aceite
Acessar `https://usuario.github.io/receitas` no celular e ver o site funcionando completo.

---

## FASE 5 — Melhorias de UX (prioridade baixa, após deploy)

Executar apenas após as fases 2, 3 e 4 estarem completas e o site publicado.

### 5.1 — Lembrar última aba visitada
Salvar a proteína ativa em `sessionStorage` para que ao recarregar a página a mesma aba esteja selecionada.

### 5.2 — Lembrar quantidade definida
Salvar a quantidade digitada por proteína em `sessionStorage`. Se o usuário digitou 1500 g de frango, ao voltar para a aba de frango o valor continua lá.

### 5.3 — Scroll suave ao expandir card
Quando o usuário abre um accordion em mobile, fazer `scrollIntoView({ behavior: 'smooth', block: 'nearest' })` para garantir que o conteúdo expansível fique visível sem precisar rolar manualmente.

### 5.4 — Botão "copiar blend"
Dentro de cada receita, adicionar um botão discreto "Copiar blend seco" que copia para o clipboard a lista de temperos secos com as quantidades já calculadas na escala atual. Formato de texto simples, uma linha por ingrediente.

### 5.5 — Indicador visual de escala
Quando a quantidade digitada for diferente da base, mostrar um badge discreto "×1,5" ou "×0,8" ao lado do campo de quantidade para referência visual rápida.

---

## FASE 6 — Suporte a novas receitas via planilha (prioridade baixa)

### Objetivo
Garantir que adicionar uma nova proteína (ex: peixe) ou nova receita na planilha seja suficiente para aparecer no site sem mexer no código.

### Tarefas

**6.1** Tornar as abas de proteína dinâmicas: em vez de três abas fixas (Frango, Pork loin, Carne moída), gerar as abas a partir das proteínas presentes na planilha.

**6.2** Associar emoji por proteína via coluna opcional `emoji` na aba `Proteinas` da planilha (nova aba simples: `proteina`, `label`, `emoji`, `base_g`).

**6.3** Garantir que a ordem de exibição das proteínas respeite uma coluna `ordem` nessa aba.

---

## Notas para o Claude Code

- Sempre preservar o visual e comportamento atuais antes de qualquer refactor
- Não usar `console.log` no código final, apenas durante debug
- Comentários no código em português, porque o dono do projeto lê o código
- Testar cada fase localmente antes de considerar concluída
- Ao finalizar cada fase, atualizar este arquivo marcando a fase como ✅ concluída
