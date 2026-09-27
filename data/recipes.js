// Configuração por proteína/categoria
// label: null → acompanhamentos (escala por receita individual)
window.PROTEINA_CONFIG = {
  frango:          { tab: '🍗 Frango',          label: 'frango',               base_g: 1000, min: 100,  max: 5000, step: 50  },
  porco:           { tab: '🥩 Pork loin',        label: 'pork loin',            base_g: 500,  min: 100,  max: 3000, step: 50  },
  carne:           { tab: '🫕 Carne moída',       label: 'carne moída',          base_g: 500,  min: 100,  max: 3000, step: 50  },
  carne_bovina:    { tab: '🥩 Top Round',          label: 'Top Round (coxão mole)', base_g: 900, min: 300,  max: 1800, step: 50  },
  salmao:          { tab: '🐟 Salmão',            label: 'salmão',               base_g: 680,  min: 200,  max: 2000, step: 50  },
  tilapia:         { tab: '🐠 Tilápia',           label: 'tilápia',              base_g: 500,  min: 200,  max: 2000, step: 50  },
  camarao:         { tab: '🦐 Camarão',           label: 'camarão',              base_g: 500,  min: 200,  max: 2000, step: 50  },
  burguer:         { tab: '🍔 Hamburguer',         label: 'carne para hamburguer',base_g: 500,  min: 250,  max: 1000, step: 125 },
  parmegiana:      { tab: '🍗 Parmegiana',         label: 'frango (parmegiana)',  base_g: 900,  min: 300,  max: 1800, step: 150 },
  acompanhamentos: { tab: '🥗 Acompanhamentos',    label: null, base_g: null, min: null, max: null, step: null }
};

// Receitas
// tipo: "proteina" | "seco" | "fresco"
// secao: string opcional → agrupa ingredientes em seções com título customizado
// Receitas com proteina "acompanhamentos" precisam de: label_escala, min_qty, max_qty, step_qty
window.RECIPES = [

  // ── FRANGO ──────────────────────────────────────────────────────────────
  {
    id: 'frango-neutro-a',
    proteina: 'frango',
    nome: 'Frango Neutro A — alho, ervas e páprica',
    perfil: 'neutro',
    quem_atende: 'Toda a família · Kid-friendly',
    descricao: 'Suave, clássico e kid-friendly. Boa para segunda e terça.',
    base_g: 1000,
    ingredientes: [
      { nome: 'Frango (peito)',      min: 1000, max: 1000, unidade: 'g', tipo: 'proteina', nota: '' },
      { nome: 'Sal',                 min: 10,   max: 10,   unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Sweet paprika',       min: 6,    max: 6,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Garlic powder',       min: 5,    max: 5,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Granulated onion',    min: 5,    max: 5,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Oregano leaves',      min: 3,    max: 3,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Ground thyme',        min: 2,    max: 2,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Pimenta-do-reino',    min: 1,    max: 1,    unidade: 'g', tipo: 'seco',     nota: 'pode reduzir para 0,5 g ou zerar para ficar mais infantil' },
      { nome: 'Azeite de oliva',     min: 20,   max: 20,   unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Suco de limão',       min: 15,   max: 15,   unidade: 'g', tipo: 'seco',     nota: '' }
    ],
    passos: [
      'Misturar os temperos secos em um potinho.',
      'Juntar azeite e limão e formar uma pasta leve.',
      'Envolver o frango e deixar na geladeira por **mínimo 30 min**; idealmente 4–12 horas.',
      'Preaquecer a air fryer a **380 °F** por 3 minutos.',
      'Assar por **12–16 min**, virando na metade, até atingir **165 °F** internos.',
      'Panela: selar fogo médio-alto, tampar e cozinhar mais **8–10 min**.'
    ]
  },

  {
    id: 'frango-neutro-b',
    proteina: 'frango',
    nome: 'Frango Neutro B — alho, limão e dill',
    perfil: 'neutro',
    quem_atende: 'Toda a família · Bom para reaproveitamento',
    descricao: 'Suave, fresco e ótimo para reaproveitamento ao longo da semana.',
    base_g: 1000,
    ingredientes: [
      { nome: 'Frango (peito)',      min: 1000, max: 1000, unidade: 'g', tipo: 'proteina', nota: '' },
      { nome: 'Sal',                 min: 10,   max: 10,   unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Sweet paprika',       min: 4,    max: 4,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Garlic powder',       min: 5,    max: 5,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Granulated onion',    min: 4,    max: 4,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Dill',                min: 3,    max: 3,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Oregano leaves',      min: 2,    max: 2,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Pimenta-do-reino',    min: 0.5,  max: 1,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Azeite de oliva',     min: 22,   max: 22,   unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Suco de limão',       min: 25,   max: 25,   unidade: 'g', tipo: 'seco',     nota: '' }
    ],
    passos: [
      'Misturar secos, azeite e limão.',
      'Temperar o frango e marinar por **30 min a 12 horas**.',
      'Preaquecer a air fryer a **380 °F** por 3 minutos.',
      'Assar por **12–16 min**, virando na metade, até **165 °F** internos.'
    ]
  },

  {
    id: 'frango-marcante-1',
    proteina: 'frango',
    nome: 'Frango Marcante 1 — defumado suave',
    perfil: 'marcante',
    quem_atende: 'Adultos · Quarta em diante',
    descricao: 'Aromático, com smoked paprika e cominho leve. Quase sem ardência.',
    base_g: 1000,
    ingredientes: [
      { nome: 'Frango (peito)',      min: 1000, max: 1000, unidade: 'g', tipo: 'proteina', nota: '' },
      { nome: 'Sal',                 min: 10,   max: 10,   unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Smoked paprika',      min: 6,    max: 6,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Sweet paprika',       min: 3,    max: 3,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Garlic powder',       min: 5,    max: 5,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Granulated onion',    min: 5,    max: 5,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Ground cumin',        min: 2,    max: 2,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Oregano leaves',      min: 2,    max: 2,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Ground thyme',        min: 1.5,  max: 1.5,  unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Crushed red pepper',  min: 0.3,  max: 0.5,  unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Pimenta-do-reino',    min: 1,    max: 1,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Azeite de oliva',     min: 22,   max: 22,   unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Suco de limão',       min: 20,   max: 20,   unidade: 'g', tipo: 'seco',     nota: '' }
    ],
    passos: [
      'Misturar secos, azeite e limão.',
      'Marinar por **30 min a 12 horas**.',
      'Preaquecer a air fryer a **380 °F** por 3 minutos.',
      'Assar por **12–16 min**, virando na metade. Evitar temperatura excessiva para não queimar a páprica.'
    ]
  },

  {
    id: 'frango-marcante-2',
    proteina: 'frango',
    nome: 'Frango Marcante 2 — curry leve',
    perfil: 'marcante',
    quem_atende: 'Adultos · Quarta em diante',
    descricao: 'Aromático com curry, cúrcuma e gengibre. Quase sem ardência.',
    base_g: 1000,
    ingredientes: [
      { nome: 'Frango (peito)',      min: 1000, max: 1000, unidade: 'g', tipo: 'proteina', nota: '' },
      { nome: 'Sal',                 min: 10,   max: 10,   unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Curry powder',        min: 5,    max: 5,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Turmeric',            min: 3,    max: 3,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Ground ginger',       min: 2,    max: 2,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Sweet paprika',       min: 4,    max: 4,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Smoked paprika',      min: 2,    max: 2,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Garlic powder',       min: 4,    max: 4,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Granulated onion',    min: 4,    max: 4,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Ground cumin',        min: 2,    max: 2,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Crushed red pepper',  min: 0.2,  max: 0.3,  unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Pimenta-do-reino',    min: 1,    max: 1,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Azeite de oliva',     min: 22,   max: 22,   unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Suco de limão',       min: 15,   max: 18,   unidade: 'g', tipo: 'seco',     nota: '' }
    ],
    passos: [
      'Misturar tudo e marinar por **30 min a 12 horas**.',
      'Preaquecer a air fryer a **380 °F** por 3 minutos.',
      'Assar por **12–16 min**, virando na metade, até **165 °F** internos.'
    ]
  },

  // ── PORCO ──────────────────────────────────────────────────────────────
  {
    id: 'porco-neutro',
    proteina: 'porco',
    nome: 'Porco Neutro — alho, ervas e páprica doce',
    perfil: 'neutro',
    quem_atende: 'Toda a família',
    descricao: 'Suave, familiar e sem picância.',
    base_g: 500,
    ingredientes: [
      { nome: 'Pork loin',           min: 500,  max: 500,  unidade: 'g', tipo: 'proteina', nota: '' },
      { nome: 'Sal',                 min: 6,    max: 6,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Sweet paprika',       min: 4,    max: 4,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Garlic powder',       min: 3,    max: 3,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Granulated onion',    min: 3,    max: 3,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Oregano leaves',      min: 2,    max: 2,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Ground thyme',        min: 1.5,  max: 1.5,  unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Pimenta-do-reino',    min: 0.5,  max: 0.5,  unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Azeite de oliva',     min: 15,   max: 15,   unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Suco de limão',       min: 10,   max: 10,   unidade: 'g', tipo: 'seco',     nota: '' }
    ],
    passos: [
      'Misturar secos, azeite e limão em forma de pasta.',
      'Temperar os bifes e marinar por **mínimo 4 horas**; idealmente 8–24 horas.',
      'Preaquecer a air fryer a **360 °F** por 3 minutos.',
      'Assar por **14–20 min**, virando na metade. Para peças ~4 cm, fechar entre 16–18 min.',
      'Buscar centro levemente rosado (**145–150 °F**). Descansar 5 min antes de fatiar.'
    ]
  },

  {
    id: 'porco-marcante',
    proteina: 'porco',
    nome: 'Porco Marcante — defumado com cominho',
    perfil: 'marcante',
    quem_atende: 'Adultos · Quarta em diante',
    descricao: 'Defumado e aromático, com pimenta apenas de fundo.',
    base_g: 500,
    ingredientes: [
      { nome: 'Pork loin',           min: 500,  max: 500,  unidade: 'g', tipo: 'proteina', nota: '' },
      { nome: 'Sal',                 min: 6,    max: 6,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Smoked paprika',      min: 5,    max: 5,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Sweet paprika',       min: 2,    max: 2,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Garlic powder',       min: 3,    max: 3,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Granulated onion',    min: 3,    max: 3,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Ground cumin',        min: 2.5,  max: 2.5,  unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Ground thyme',        min: 1.5,  max: 1.5,  unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Crushed red pepper',  min: 0.2,  max: 0.3,  unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Pimenta-do-reino',    min: 1,    max: 1,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Azeite de oliva',     min: 15,   max: 15,   unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Suco de limão',       min: 12,   max: 12,   unidade: 'g', tipo: 'seco',     nota: '' }
    ],
    passos: [
      'Misturar os ingredientes e espalhar nos bifes.',
      'Marinar de **4 a 24 horas**.',
      'Preaquecer a air fryer a **360 °F** por 3 minutos.',
      'Assar por **14–20 min**, virando na metade. Alvo final igual à versão neutra.'
    ]
  },

  // ── CARNE MOÍDA ────────────────────────────────────────────────────────
  {
    id: 'carne-neutra',
    proteina: 'carne',
    nome: 'Carne moída neutra — alho, cebola e ervas',
    perfil: 'neutro',
    quem_atende: 'Toda a família · Versátil',
    descricao: 'Base clássica, versátil e sem picância.',
    base_g: 500,
    ingredientes: [
      { nome: 'Ground beef 88%',       min: 500,  max: 500,  unidade: 'g', tipo: 'proteina', nota: '' },
      { nome: 'Sal',                   min: 6,    max: 6,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Sweet paprika',         min: 4,    max: 4,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Garlic powder',         min: 3,    max: 3,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Granulated onion',      min: 4,    max: 4,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Oregano leaves',        min: 2,    max: 2,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Ground thyme',          min: 1,    max: 1,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Pimenta-do-reino',      min: 0,    max: 0.5,  unidade: 'g', tipo: 'seco',     nota: 'opcional, pode zerar' },
      { nome: 'Cebola picada',         min: 80,   max: 80,   unidade: 'g', tipo: 'fresco',   nota: '' },
      { nome: 'Alho fresco picado',    min: 8,    max: 8,    unidade: 'g', tipo: 'fresco',   nota: '' },
      { nome: 'Minced garlic em pote', min: 8,    max: 8,    unidade: 'g', tipo: 'fresco',   nota: '' },
      { nome: 'Pimentão em cubos',     min: 150,  max: 200,  unidade: 'g', tipo: 'fresco',   nota: 'opcional' },
      { nome: 'Azeite de oliva',       min: 12,   max: 12,   unidade: 'g', tipo: 'fresco',   nota: '' },
      { nome: 'Suco de limão',         min: 5,    max: 8,    unidade: 'g', tipo: 'fresco',   nota: 'opcional ao final' }
    ],
    passos: [
      'Misturar os temperos secos e reservar.',
      'Aquecer a panela com azeite em fogo médio-alto.',
      'Refogar a cebola por **~3 minutos**.',
      'Juntar os alhos e cozinhar por **30–40 segundos**.',
      'Adicionar a carne, quebrando bem, e dourar por **5–6 minutos**.',
      'Juntar o blend seco e misturar bem.',
      'Somar pimentão (se usar) e cozinhar mais **5–7 minutos**.',
      'Ajustar sal e finalizar com limão se desejar.'
    ]
  },

  {
    id: 'carne-marcante',
    proteina: 'carne',
    nome: 'Carne moída marcante — cominho e páprica defumada',
    perfil: 'marcante',
    quem_atende: 'Adultos · Quarta em diante',
    descricao: 'Aromático, com fundo defumado e pimenta sutil.',
    base_g: 500,
    ingredientes: [
      { nome: 'Ground beef 88%',       min: 500,  max: 500,  unidade: 'g', tipo: 'proteina', nota: '' },
      { nome: 'Sal',                   min: 6,    max: 6,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Smoked paprika',        min: 5,    max: 5,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Sweet paprika',         min: 2,    max: 2,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Garlic powder',         min: 3,    max: 3,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Granulated onion',      min: 4,    max: 4,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Ground cumin',          min: 3,    max: 3,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Oregano leaves',        min: 1.5,  max: 1.5,  unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Crushed red pepper',    min: 0.3,  max: 0.3,  unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Pimenta-do-reino',      min: 1,    max: 1,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Cebola picada',         min: 80,   max: 80,   unidade: 'g', tipo: 'fresco',   nota: '' },
      { nome: 'Alho fresco picado',    min: 8,    max: 8,    unidade: 'g', tipo: 'fresco',   nota: '' },
      { nome: 'Minced garlic em pote', min: 8,    max: 8,    unidade: 'g', tipo: 'fresco',   nota: '' },
      { nome: 'Pimentão em cubos',     min: 150,  max: 200,  unidade: 'g', tipo: 'fresco',   nota: 'opcional' },
      { nome: 'Azeite de oliva',       min: 12,   max: 12,   unidade: 'g', tipo: 'fresco',   nota: '' },
      { nome: 'Suco de limão',         min: 5,    max: 8,    unidade: 'g', tipo: 'fresco',   nota: 'opcional ao final' }
    ],
    passos: [
      'Repetir a mesma lógica da versão neutra, trocando apenas o blend seco.',
      'Usar a pimenta apenas como fundo — sem buscar ardência forte.'
    ]
  },

  // ── CARNE BOVINA (TOP ROUND) ───────────────────────────────────────────
  {
    id: 'bife-neutro-coxao-mole-airfryer',
    proteina: 'carne_bovina',
    nome: 'Bife Neutro de Coxão Mole na Airfryer',
    perfil: 'neutro',
    quem_atende: 'Toda a família · 4 bifes de ~220g',
    descricao: 'Peça cortada em 4 bifes de 1,5–2 cm. Tempero clássico de ervas, suave e ideal para meal prep.',
    base_g: 900,
    ingredientes: [
      { nome: 'Top Round Steak (coxão mole)', min: 900, max: 900, unidade: 'g',  tipo: 'proteina', nota: '4 bifes de 1,5–2 cm' },
      { nome: 'Sal',                           min: 12,  max: 12,  unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Pimenta-do-reino',              min: 4,   max: 4,   unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Garlic powder',                 min: 4,   max: 4,   unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Cebola em pó',                 min: 3,   max: 3,   unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Tomilho seco ou Herbs de Provence', min: 2, max: 2, unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Azeite de oliva',               min: 15,  max: 15,  unidade: 'g',  tipo: 'seco',     nota: '' }
    ],
    passos: [
      'Seque bem a carne com papel toalha e corte em **4 bifes de 1,5–2 cm**, sempre perpendicular à fibra.',
      'Misture sal, pimenta-do-reino, garlic powder, cebola em pó e tomilho até formar blend homogêneo.',
      'Pincele ou esfregue o azeite em ambos os lados e aplique o blend de temperos, massageando bem a carne.',
      'Descanse por **20 min** em temperatura ambiente. Pré-aqueça a airfryer a **200 °C / 392 °F** por 5 min.',
      'Asse os bifes sem sobrepor por **5 min**, vire e asse mais **4–5 min** ao ponto. +2 min para bem-passado. Descansar 3 min antes de servir.'
    ]
  },

  {
    id: 'bife-coxao-mole-churrasco-airfryer',
    proteina: 'carne_bovina',
    nome: 'Bife de Coxão Mole Estilo Churrasco de Casa',
    perfil: 'neutro',
    quem_atende: 'Toda a família · 4 bifes de ~220g',
    descricao: 'Peça cortada em 4 bifes de 1,5–2 cm. Blend defumado estilo churrasco, fácil de fatiar para bowls e marmitas.',
    base_g: 900,
    ingredientes: [
      { nome: 'Top Round Steak (coxão mole)', min: 900, max: 900, unidade: 'g',  tipo: 'proteina', nota: '4 bifes de 1,5–2 cm' },
      { nome: 'Sal',                           min: 12,  max: 12,  unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Pimenta-do-reino',              min: 4,   max: 4,   unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Smoked paprika',                min: 5,   max: 5,   unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Garlic powder',                 min: 3,   max: 3,   unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Cebola em pó',                 min: 2,   max: 2,   unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Lemon pepper',                  min: 2,   max: 2,   unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Azeite de oliva',               min: 15,  max: 15,  unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Suco de limão',                 min: 10,  max: 10,  unidade: 'g',  tipo: 'seco',     nota: 'opcional, para finalizar' }
    ],
    passos: [
      'Seque bem a carne e corte em **4 bifes de 1,5–2 cm**, contra a fibra para melhor maciez.',
      'Misture sal, pimenta-do-reino, smoked paprika, garlic powder, cebola em pó e lemon pepper.',
      'Regue os bifes com azeite e esfregue dos dois lados; polvilhe o tempero seco massageando. Para sabor mais intenso, faça pequenos cortes superficiais nas bordas.',
      'Descanse **30 min** em temperatura ambiente. Nos últimos 5 min, pré-aqueça a airfryer a **200 °C / 392 °F**.',
      'Asse por **6 min**, vire e asse mais **4–5 min** ao ponto para bem. Descansar **3–5 min** e finalizar com gotas de limão se desejar.'
    ]
  },

  {
    id: 'bife-coxao-mole-shoyu-limao-airfryer',
    proteina: 'carne_bovina',
    nome: 'Bife de Coxão Mole Marinado em Shoyu e Limão',
    perfil: 'marcante',
    quem_atende: 'Adultos · Quarta em diante · 4 bifes de ~220g',
    descricao: 'Peça cortada em 4 bifes de 1,5–2 cm. Marinada de shoyu, limão e gengibre — ótimo para fatiar em tiras e montar bowls.',
    base_g: 900,
    ingredientes: [
      { nome: 'Top Round Steak (coxão mole)', min: 900, max: 900, unidade: 'g',  tipo: 'proteina', nota: '4 bifes de 1,5–2 cm' },
      { nome: 'Shoyu',                         min: 40,  max: 40,  unidade: 'ml', tipo: 'seco',     nota: '' },
      { nome: 'Suco de limão',                 min: 20,  max: 20,  unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Azeite de oliva',               min: 10,  max: 10,  unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Garlic powder',                 min: 6,   max: 6,   unidade: 'g',  tipo: 'seco',     nota: 'ou 2 dentes de alho bem picados' },
      { nome: 'Ginger em pó',                  min: 3,   max: 3,   unidade: 'g',  tipo: 'seco',     nota: 'ou 5g de gengibre fresco ralado' },
      { nome: 'Páprica doce ou defumada',      min: 3,   max: 3,   unidade: 'g',  tipo: 'seco',     nota: 'opcional' },
      { nome: 'Cebola em pó',                 min: 3,   max: 3,   unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Açúcar mascavo ou mel',         min: 3,   max: 3,   unidade: 'g',  tipo: 'seco',     nota: 'opcional, para equilibrar a acidez' },
      { nome: 'Pimenta-do-reino',              min: 4,   max: 4,   unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Sal',                           min: 4,   max: 4,   unidade: 'g',  tipo: 'seco',     nota: 'ajustar — shoyu já é salgado' }
    ],
    passos: [
      'Corte a peça em **4 bifes de 1,5–2 cm** contra a fibra; faça leves riscos superficiais em cruz em cada lado para ajudar a marinada a penetrar.',
      'Prepare a marinada: misture shoyu, limão, azeite, garlic powder, ginger, páprica, cebola em pó, açúcar mascavo/mel, pimenta-do-reino e sal.',
      'Mergulhe os bifes na marinada, cubra e deixe na geladeira por **45 min** (até 2 h para sabor mais intenso). Retire **15 min** antes de assar.',
      'Pré-aqueça a airfryer a **200 °C / 392 °F** por 5 min. Escorra o excesso de marinada antes de colocar no cesto.',
      'Asse por **5 min**, vire e asse mais **4–5 min** ao ponto. Descansar **5 min** e fatiar em tiras finas contra a fibra para servir.'
    ]
  },

  // ── SALMÃO ─────────────────────────────────────────────────────────────
  {
    id: 'salmao-neutro',
    proteina: 'salmao',
    nome: 'Salmão Neutro — limão e dill',
    perfil: 'neutro',
    quem_atende: 'Toda a família',
    descricao: 'Suave e fresco. Marine 15-30 min. Não precisa virar no forno.',
    base_g: 680,
    ingredientes: [
      { nome: 'Salmão (filé)',       min: 680,  max: 680,  unidade: 'g', tipo: 'proteina', nota: '' },
      { nome: 'Sal',                 min: 8,    max: 8,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Black pepper',        min: 0.5,  max: 0.5,  unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Garlic powder',       min: 3,    max: 3,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Dill seco',           min: 4,    max: 4,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Sweet paprika',       min: 2,    max: 2,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Lemon juice',         min: 20,   max: 20,   unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Olive oil',           min: 20,   max: 20,   unidade: 'g', tipo: 'seco',     nota: '' }
    ],
    passos: [
      'Seque bem o salmão com papel toalha.',
      'Misture os temperos secos.',
      'Pincele o salmão com azeite + limão e aplique o blend seco.',
      'Marine **15–30 min** na geladeira.',
      'Air fryer **375 °F**: **10–12 min** (não vira).',
      'Forno **400 °F**: **12–15 min**, prateleira do meio, pele para baixo, sem virar.',
      'Ponto: **145 °F** interno — opaco por fora, levemente rosado no centro.',
      'Descansar **3 min** antes de servir.'
    ]
  },

  {
    id: 'salmao-marcante',
    proteina: 'salmao',
    nome: 'Salmão Marcante — defumado com glaze',
    perfil: 'marcante',
    quem_atende: 'Adultos · Quarta em diante',
    descricao: 'Defumado e aromático. Glaze de molho inglês e limão é opcional.',
    base_g: 680,
    ingredientes: [
      { nome: 'Salmão (filé)',       min: 680,  max: 680,  unidade: 'g', tipo: 'proteina', nota: '' },
      { nome: 'Sal',                 min: 8,    max: 8,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Smoked paprika',      min: 5,    max: 5,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Garlic powder',       min: 3,    max: 3,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Ground cumin',        min: 1,    max: 1,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Black pepper',        min: 1,    max: 1,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Lemon juice',         min: 15,   max: 15,   unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Olive oil',           min: 15,   max: 15,   unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Molho inglês',        min: 5,    max: 5,    unidade: 'g', tipo: 'seco',     nota: 'glaze — opcional' },
      { nome: 'Lemon juice (glaze)', min: 5,    max: 5,    unidade: 'g', tipo: 'seco',     nota: 'glaze — opcional' }
    ],
    passos: [
      'Seque bem o salmão com papel toalha.',
      'Misture os temperos defumados.',
      'Pincele com azeite + limão e aplique o blend seco.',
      'Glaze opcional: misture molho inglês + limão extra e pincele por cima.',
      'Marine **15–30 min** na geladeira.',
      'Air fryer **375 °F**: **10–12 min** (não vira).',
      'Forno **400 °F**: **12–15 min**, sem virar.',
      'Ponto: **145 °F** interno, rosa claro uniforme, se solta em lascas com garfo.',
      'Descansar **3 min** antes de servir.'
    ]
  },

  // ── HAMBURGUER ─────────────────────────────────────────────────────────
  {
    id: 'burguer-classico',
    proteina: 'burguer',
    nome: 'Hamburguer — blend clássico',
    perfil: 'neutro',
    quem_atende: 'Toda a família · 4 patties de ~125g',
    descricao: '500g de carne → 4 hamburgueres. Gelado 1h30 antes de assar.',
    base_g: 500,
    ingredientes: [
      { nome: 'Ground beef 88-12',   min: 500,  max: 500,  unidade: 'g', tipo: 'proteina', nota: '' },
      { nome: 'Ovo',                 min: 50,   max: 50,   unidade: 'g', tipo: 'seco',     nota: '1 unidade, batido' },
      { nome: 'Bread crumbs',        min: 40,   max: 40,   unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Molho inglês',        min: 10,   max: 10,   unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Cebola crua picada fina', min: 60, max: 60, unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Sal',                 min: 7,    max: 7,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Black pepper',        min: 1.5,  max: 1.5,  unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Garlic powder',       min: 3,    max: 3,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Granulated onion',    min: 3,    max: 3,    unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Sweet paprika',       min: 2,    max: 2,    unidade: 'g', tipo: 'seco',     nota: '' }
    ],
    passos: [
      'Misture os temperos secos em um potinho.',
      'Em tigela grande: carne + ovo batido + bread crumbs + molho inglês + cebola + blend seco.',
      'Misture delicadamente — não trabalhe demais a carne.',
      'Divida em **4 porções iguais** (~169g cada com a liga).',
      'Faça uma depressão no centro de cada patty com o polegar — evita encolher.',
      'Separe com papel manteiga, cubra com filme plástico.',
      'Geladeira por **1h30** mínimo — firma a carne para não desmanchar.',
      'Preaquecer a air fryer a **375 °F** por 3 min.',
      'Assar **12–14 min**, virando na metade (**6–7 min** cada lado).',
      '12 min = levemente rosado | 14 min = quase bem passado.'
    ]
  },

  // ── PARMEGIANA ─────────────────────────────────────────────────────────
  {
    id: 'parmegiana',
    proteina: 'parmegiana',
    nome: 'Frango à Parmegiana — molho híbrido',
    perfil: 'neutro',
    quem_atende: 'Toda a família · 6 filés (3 refeições)',
    descricao: '900g de frango → 6 filés. ~2h de preparo. Molho híbrido tomate fresco + Prego.',
    base_g: 900,
    ingredientes: [
      // Frango + tempero
      { nome: 'Chicken breast (filés)', min: 900, max: 900,  unidade: 'g', tipo: 'proteina', secao: 'Frango + tempero', nota: '6 filés de ~150g cada' },
      { nome: 'Sal',                    min: 10,  max: 10,   unidade: 'g', tipo: 'seco',     secao: 'Frango + tempero', nota: '' },
      { nome: 'Black pepper',           min: 2,   max: 2,    unidade: 'g', tipo: 'seco',     secao: 'Frango + tempero', nota: '' },
      { nome: 'Garlic powder',          min: 4,   max: 4,    unidade: 'g', tipo: 'seco',     secao: 'Frango + tempero', nota: '' },
      { nome: 'Sweet paprika',          min: 3,   max: 3,    unidade: 'g', tipo: 'seco',     secao: 'Frango + tempero', nota: '' },
      { nome: 'Lemon juice',            min: 20,  max: 20,   unidade: 'g', tipo: 'seco',     secao: 'Frango + tempero', nota: '' },
      // Empanamento (3 pratos)
      { nome: 'All-purpose flour',      min: 150, max: 150,  unidade: 'g', tipo: 'seco',     secao: 'Empanamento',      nota: 'prato 1' },
      { nome: 'Sal (farinha)',           min: 2,   max: 2,    unidade: 'g', tipo: 'seco',     secao: 'Empanamento',      nota: 'prato 1' },
      { nome: 'Ovos',                   min: 150, max: 150,  unidade: 'g', tipo: 'seco',     secao: 'Empanamento',      nota: 'prato 2 — 3 unidades batidas' },
      { nome: 'Sal (ovos)',             min: 1,   max: 1,    unidade: 'g', tipo: 'seco',     secao: 'Empanamento',      nota: 'prato 2' },
      { nome: 'Bread crumbs',           min: 150, max: 150,  unidade: 'g', tipo: 'seco',     secao: 'Empanamento',      nota: 'prato 3' },
      { nome: 'Parmesan ralado',        min: 50,  max: 50,   unidade: 'g', tipo: 'seco',     secao: 'Empanamento',      nota: 'prato 3' },
      { nome: 'Oregano leaves',         min: 3,   max: 3,    unidade: 'g', tipo: 'seco',     secao: 'Empanamento',      nota: 'prato 3' },
      { nome: 'Garlic powder',          min: 2,   max: 2,    unidade: 'g', tipo: 'seco',     secao: 'Empanamento',      nota: 'prato 3' },
      // Molho híbrido
      { nome: 'Roma tomatoes',          min: 1200,max: 1200, unidade: 'g', tipo: 'fresco',   secao: 'Molho híbrido',    nota: '~8-10 tomates' },
      { nome: 'Prego Traditional sauce',min: 200, max: 200,  unidade: 'g', tipo: 'fresco',   secao: 'Molho híbrido',    nota: 'substitui tomato paste' },
      { nome: 'Cebola picada',          min: 150, max: 150,  unidade: 'g', tipo: 'fresco',   secao: 'Molho híbrido',    nota: '' },
      { nome: 'Alho picado',            min: 20,  max: 20,   unidade: 'g', tipo: 'fresco',   secao: 'Molho híbrido',    nota: '' },
      { nome: 'Olive oil',              min: 40,  max: 40,   unidade: 'g', tipo: 'fresco',   secao: 'Molho híbrido',    nota: '' },
      { nome: 'Sal (molho)',            min: 5,   max: 5,    unidade: 'g', tipo: 'fresco',   secao: 'Molho híbrido',    nota: 'Prego já tem sal — prove antes' },
      { nome: 'Black pepper',           min: 1,   max: 1,    unidade: 'g', tipo: 'fresco',   secao: 'Molho híbrido',    nota: '' },
      { nome: 'Oregano leaves',         min: 3,   max: 3,    unidade: 'g', tipo: 'fresco',   secao: 'Molho híbrido',    nota: '' },
      { nome: 'Sweet paprika',          min: 2,   max: 2,    unidade: 'g', tipo: 'fresco',   secao: 'Molho híbrido',    nota: '' },
      { nome: 'Açúcar',                 min: 0,   max: 3,    unidade: 'g', tipo: 'fresco',   secao: 'Molho híbrido',    nota: 'opcional — Prego já adoça' },
      { nome: 'Água',                   min: 50,  max: 50,   unidade: 'ml',tipo: 'fresco',   secao: 'Molho híbrido',    nota: '' },
      // Montagem final
      { nome: 'Mozzarella ralada',      min: 300, max: 300,  unidade: 'g', tipo: 'fresco',   secao: 'Montagem final',   nota: '~50g por filé' },
      { nome: 'Parmesan ralado',        min: 50,  max: 50,   unidade: 'g', tipo: 'fresco',   secao: 'Montagem final',   nota: '' },
      { nome: 'Oregano (polvilhar)',     min: 2,   max: 2,    unidade: 'g', tipo: 'fresco',   secao: 'Montagem final',   nota: '' }
    ],
    passos: [
      'Molho: aqueça **40g de azeite**, refogue **150g de cebola** ~3 min, adicione **20g de alho** e refogue 1 min.',
      'Adicione os tomates (pelar: corte X na base → água fervente 40s → água gelada → tirar pele). Cozinhe **5 min**.',
      'Adicione Prego + temperos do molho + **50ml de água**. Fogo médio-baixo **18–20 min** mexendo. Prove o sal. Reserve.',
      'Tempere o frango: misture secos + limão, massageie nos filés. Se espessura > 2,5 cm, abra ao meio. Descanse **10 min**.',
      'Monte estação: Prato 1 = farinha + sal | Prato 2 = ovos batidos + sal | Prato 3 = bread crumbs + parmesan + orégano + alho.',
      'Empane cada filé: farinha (cubra, sacuda) → ovo (mergulhe, escorra) → bread crumbs (**PRESSIONE** bem). Repita 6x.',
      'Preaqueça o forno a **400 °F** por 10 min. Forre assadeira com alumínio, pincele azeite.',
      'Arrume os filés sem sobrepor. Asse **15 min** (não vire) até empanar dourar.',
      'Retire: em cada filé, coloque **60–80g de molho** + **50g de mozzarella** + **~8g de parmesan** + orégano.',
      'Volte ao forno **10–12 min** até o queijo derreter e dourar. Broiler nos últimos **2 min** (opcional).',
      'Descanse **5 min**, polvilhe orégano e sirva.'
    ]
  },

  // ── ACOMPANHAMENTOS ────────────────────────────────────────────────────
  {
    id: 'arroz-sona-masoori',
    proteina: 'acompanhamentos',
    label_escala: 'arroz Sona Masoori (cru)',
    min_qty: 240, max_qty: 1440, step_qty: 60,
    nome: 'Arroz Sona Masoori',
    perfil: 'neutro',
    quem_atende: '3-4 porções · Panela Oster',
    descricao: '480g cru → ~1.200g cozido. Faz batelada para 2-3 dias.',
    base_g: 480,
    ingredientes: [
      { nome: 'Arroz Sona Masoori',          min: 480,  max: 480,  unidade: 'g',  tipo: 'proteina', nota: '' },
      { nome: 'Cebola fresca picada',         min: 75,   max: 75,   unidade: 'g',  tipo: 'fresco',   nota: '~½ cebola pequena' },
      { nome: 'Alho fresco / minced garlic',  min: 10,   max: 15,   unidade: 'g',  tipo: 'fresco',   nota: '' },
      { nome: 'Água',                         min: 960,  max: 960,  unidade: 'ml', tipo: 'fresco',   nota: '' },
      { nome: 'Sal',                          min: 10,   max: 10,   unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Olive oil',                    min: 20,   max: 20,   unidade: 'g',  tipo: 'seco',     nota: '' }
    ],
    passos: [
      'Lave o arroz em água corrente **2-3 vezes** até a água sair mais clara.',
      'Pique a cebola e o alho enquanto lava.',
      'Na panela Oster, aqueça **15g de azeite**. Refogue a cebola ~**2 min** até ficar transparente.',
      'Adicione o alho, refogue **30–40s** (não deixe queimar).',
      'Adicione o arroz lavado e escorrido, misture com o refogado por **1 min**.',
      'Adicione a água + sal, misture bem.',
      'Feche a panela e ligue na função **"Cook" / "White Rice"**.',
      'Aguarde desligar automaticamente (~**18–22 min**).',
      'Deixe descansar **5 min** com tampa fechada antes de abrir.',
      'Solte os grãos com garfo ou espátula.',
      'Dica: guarda na geladeira por 2-3 dias. Reaquecer com **1 colher de água**.'
    ]
  },

  {
    id: 'pinto-beans-neutro',
    proteina: 'acompanhamentos',
    label_escala: 'pinto beans escorrido (1 lata = 425g)',
    min_qty: 200, max_qty: 1700, step_qty: 50,
    nome: 'Pinto Beans Neutro',
    perfil: 'neutro',
    quem_atende: 'Toda a família · Kid-friendly · 15 min',
    descricao: '1 lata (425g escorrida) → ~2-3 porções. Rápido e versátil.',
    base_g: 425,
    ingredientes: [
      { nome: 'Pinto beans (lata, escorrido)', min: 425, max: 425, unidade: 'g',  tipo: 'proteina', nota: '' },
      { nome: 'Cebola fresca picada',          min: 80,  max: 80,  unidade: 'g',  tipo: 'fresco',   nota: '' },
      { nome: 'Alho fresco picado',            min: 6,   max: 6,   unidade: 'g',  tipo: 'fresco',   nota: '' },
      { nome: 'Olive oil',                     min: 15,  max: 15,  unidade: 'g',  tipo: 'fresco',   nota: '' },
      { nome: 'Sal',                           min: 3,   max: 3,   unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Ground cumin',                  min: 1,   max: 1,   unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Oregano leaves',                min: 1,   max: 1,   unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Água',                          min: 100, max: 150, unidade: 'ml', tipo: 'fresco',   nota: 'adicionar aos poucos' }
    ],
    passos: [
      'Escorra e lave os feijões em água corrente.',
      'Aqueça a panela em fogo médio + azeite.',
      'Refogue a cebola **~3 min** até ficar transparente.',
      'Adicione o alho e refogue **30–40s**.',
      'Coloque os feijões + temperos secos.',
      'Adicione a água aos poucos, mexendo.',
      'Cozinhe **8–10 min** em fogo médio-baixo, amassando alguns feijões para criar cremosidade.',
      'Ajuste sal e consistência.'
    ]
  },

  {
    id: 'spaghetti-aglio-olio',
    proteina: 'acompanhamentos',
    label_escala: 'spaghetti seco',
    min_qty: 150, max_qty: 900, step_qty: 50,
    nome: 'Spaghetti Aglio e Olio',
    perfil: 'neutro',
    quem_atende: 'Toda a família · 15 min ativos',
    descricao: 'Barilla 300g → ~4 porções. Clássico italiano com alho e azeite.',
    base_g: 300,
    ingredientes: [
      { nome: 'Barilla spaghetti',             min: 300,  max: 300,  unidade: 'g',  tipo: 'proteina', secao: 'Massa',   nota: '' },
      { nome: 'Água (cozimento)',               min: 3000, max: 3000, unidade: 'ml', tipo: 'seco',     secao: 'Massa',   nota: '3 litros' },
      { nome: 'Sal (água)',                     min: 30,   max: 30,   unidade: 'g',  tipo: 'seco',     secao: 'Massa',   nota: '' },
      { nome: 'Olive oil',                      min: 60,   max: 60,   unidade: 'g',  tipo: 'fresco',   secao: 'Molho',   nota: '' },
      { nome: 'Alho fresco picado fino',        min: 15,   max: 15,   unidade: 'g',  tipo: 'fresco',   secao: 'Molho',   nota: '' },
      { nome: 'Black pepper',                   min: 1,    max: 1,    unidade: 'g',  tipo: 'seco',     secao: 'Molho',   nota: '' },
      { nome: 'Sal (molho)',                    min: 2,    max: 2,    unidade: 'g',  tipo: 'seco',     secao: 'Molho',   nota: '' },
      { nome: 'Oregano leaves',                 min: 2,    max: 2,    unidade: 'g',  tipo: 'seco',     secao: 'Molho',   nota: '' },
      { nome: 'Água do cozimento (reservar)',   min: 240,  max: 240,  unidade: 'ml', tipo: 'fresco',   secao: 'Molho',   nota: 'reservar antes de escorrer' }
    ],
    passos: [
      'Ferva **3L de água** + **30g de sal**.',
      'Cozinhe o spaghetti **9–11 min** até al dente.',
      'Enquanto cozinha: aqueça o azeite em frigideira fogo médio-baixo.',
      'Adicione o alho, refogue **1–2 min** — não queime!',
      '**Antes de escorrer**: reserve **1 xícara (240ml)** da água do cozimento.',
      'Escorra a massa e transfira para a frigideira com o alho.',
      'Adicione pimenta, orégano e mexa.',
      'Vá adicionando a água do cozimento aos poucos até criar um molho sedoso.',
      'Ajuste o sal e sirva imediatamente.'
    ]
  },

  {
    id: 'lentilha-temperada',
    proteina: 'acompanhamentos',
    label_escala: 'lentilha seca',
    min_qty: 150, max_qty: 900, step_qty: 50,
    nome: 'Lentilha Temperada',
    perfil: 'neutro',
    quem_atende: '3-4 porções · 300g seca → ~750g cozida',
    descricao: 'Aromática e nutritiva. Panela normal ou pressão (mais rápido).',
    base_g: 300,
    ingredientes: [
      { nome: 'Dry lentils',         min: 300,  max: 300,  unidade: 'g',  tipo: 'proteina', nota: '' },
      { nome: 'Água',                min: 900,  max: 900,  unidade: 'ml', tipo: 'fresco',   nota: 'proporção 1:3' },
      { nome: 'Sal',                 min: 6,    max: 6,    unidade: 'g',  tipo: 'seco',     nota: 'adicionar só nos últimos 5 min' },
      { nome: 'Cebola fresca picada',min: 80,   max: 80,   unidade: 'g',  tipo: 'fresco',   nota: '' },
      { nome: 'Alho / minced garlic',min: 8,    max: 8,    unidade: 'g',  tipo: 'fresco',   nota: '' },
      { nome: 'Olive oil',           min: 15,   max: 15,   unidade: 'g',  tipo: 'fresco',   nota: '' },
      { nome: 'Ground cumin',        min: 2,    max: 2,    unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Ground thyme',        min: 1,    max: 1,    unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Oregano leaves',      min: 1.5,  max: 1.5,  unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Black pepper',        min: 0.5,  max: 0.5,  unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Lemon juice (final)', min: 10,   max: 10,   unidade: 'g',  tipo: 'fresco',   nota: 'finalização' }
    ],
    passos: [
      'Lave as lentilhas e escorra.',
      'Aqueça a panela + azeite. Refogue a cebola **~3 min**.',
      'Adicione o alho, refogue **40s**.',
      'Coloque as lentilhas + água + temperos secos (**SEM O SAL** ainda).',
      'Ferva, baixe para fogo médio-baixo, tampe e cozinhe **20–25 min**.',
      'Adicione o sal apenas nos **últimos 5 min** (sal cedo endurece a casca).',
      'Finalize com **lemon juice**.',
      'Pressão: mesmo processo, mas após ferver tampe e cozinhe sob pressão **8–10 min**.'
    ]
  },

  {
    id: 'quinoa-basica',
    proteina: 'acompanhamentos',
    label_escala: 'quinoa seca',
    min_qty: 150, max_qty: 900, step_qty: 50,
    nome: 'Quinoa Básica',
    perfil: 'neutro',
    quem_atende: '3-4 porções · 300g seca → ~900g cozida',
    descricao: '5 min ativos, 25 min total. Variação temperada: adicione cumin + turmeric.',
    base_g: 300,
    ingredientes: [
      { nome: 'Quinoa pré-lavada',    min: 300, max: 300, unidade: 'g',  tipo: 'proteina', nota: '' },
      { nome: 'Água',                 min: 600, max: 600, unidade: 'ml', tipo: 'fresco',   nota: 'proporção 1:2' },
      { nome: 'Sal',                  min: 4,   max: 4,   unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Olive oil',            min: 10,  max: 10,  unidade: 'g',  tipo: 'seco',     nota: 'opcional' }
    ],
    passos: [
      'Enxágue a quinoa rapidamente em peneira fina.',
      'Coloque quinoa + água + sal + azeite na panela.',
      'Ferva em fogo alto.',
      'Abaixe para fogo baixo, tampe.',
      'Cozinhe **15 min** sem mexer.',
      'Desligue e deixe descansar tampado por **5 min**.',
      'Solte com garfo.',
      'Variação temperada: adicione **2g de cumin** + **1g de turmeric** na água e finalize com **5g de lemon juice**.'
    ]
  },

  {
    id: 'brocolis-vapor',
    proteina: 'acompanhamentos',
    label_escala: 'brócolis fresco',
    min_qty: 150, max_qty: 900, step_qty: 50,
    nome: 'Brócolis no Vapor',
    perfil: 'neutro',
    quem_atende: '2-3 porções · 8 min ativos',
    descricao: 'Choque térmico mantém cor verde vibrante e textura crocante.',
    base_g: 300,
    ingredientes: [
      { nome: 'Brócolis fresco',      min: 300, max: 300, unidade: 'g',  tipo: 'proteina', nota: 'buquês de 3-4 cm' },
      { nome: 'Água (vapor)',         min: 250, max: 250, unidade: 'ml', tipo: 'fresco',   nota: 'na panela para o vapor' },
      { nome: 'Sal (água)',           min: 1,   max: 1,   unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Sal (final)',          min: 2,   max: 2,   unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Olive oil',           min: 10,  max: 10,  unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Lemon juice',         min: 10,  max: 10,  unidade: 'g',  tipo: 'seco',     nota: '' },
      { nome: 'Alho picado',         min: 5,   max: 5,   unidade: 'g',  tipo: 'fresco',   nota: 'opcional' },
      { nome: 'Água gelada (choque)',min: 500, max: 500, unidade: 'ml', tipo: 'fresco',   nota: 'para banho de gelo' }
    ],
    passos: [
      'Corte o brócolis em buquês de **3-4 cm**.',
      'Ferva **250ml de água** + **1g de sal** na panela (**2-3 min**).',
      'Encaixe o cesto de vapor com o brócolis e tampe.',
      'Cozinhe **6 min exatos** em fogo médio.',
      'Retire e mergulhe em **500ml de água gelada** por **30s** — choque térmico!',
      'Escorra bem.',
      'Numa tigela: **2g de sal** + **10g de azeite** + **10g de limão** + **5g de alho** (opcional). Misture 20s.',
      'Sirva em até **1 min** para manter a textura.'
    ]
  },

  {
    id: 'batata-rustica',
    proteina: 'acompanhamentos',
    label_escala: 'red potato (com casca)',
    min_qty: 250, max_qty: 1500, step_qty: 50,
    nome: 'Batata Rústica de Red Potato',
    perfil: 'neutro',
    quem_atende: '3-4 porções · Air fryer · ~25 min',
    descricao: '500g crua → ~450g pronta. Crocante por fora, macia por dentro.',
    base_g: 500,
    ingredientes: [
      { nome: 'Red potatoes (com casca)', min: 500, max: 500, unidade: 'g', tipo: 'proteina', nota: 'gomos de 2-3 cm' },
      { nome: 'Azeite de oliva',          min: 15,  max: 15,  unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Sal',                      min: 6,   max: 6,   unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Pimenta-do-reino',         min: 1.5, max: 1.5, unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Alho em pó',              min: 3,   max: 3,   unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Onion powder',             min: 3,   max: 3,   unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Páprica doce ou defumada', min: 4,   max: 4,   unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Tomilho ou Herbs de Provence', min: 1, max: 1, unidade: 'g', tipo: 'seco',    nota: '' },
      { nome: 'Suco de limão (final)',    min: 5,   max: 5,   unidade: 'g', tipo: 'seco',     nota: 'opcional, ao servir' }
    ],
    passos: [
      'Lave bem as batatas esfregando a casca. Seque **muito bem** com papel toalha.',
      'Corte em gomos de **2-3 cm de espessura**.',
      'Numa tigela: adicione azeite, sal, pimenta, alho, onion powder, páprica e tomilho.',
      'Misture bem até todos os gomos ficarem uniformemente envoltos.',
      'Preaqueça a air fryer a **200 °C / 400 °F** por 3-5 min.',
      'Distribua em camada única no cesto.',
      'Asse a **200 °C / 400 °F** por **18–22 min**.',
      'Na metade (**9–11 min**), abra e sacuda/mexa as batatas.',
      'A partir de 18 min, verifique: por fora dourado forte, por dentro macio. Se precisar, mais **3–5 min**.',
      'Transfira para tigela. Finalize com limão (opcional) e sirva imediatamente.',
      'Dica: não lote demais o cesto — perde a crocância.'
    ]
  },

  // ── TILÁPIA ─────────────────────────────────────────────────────────────

  {
    id: 'tilapia-neutra-manteiga',
    proteina: 'tilapia',
    nome: 'Tilápia Neutra — manteiga, alho e limão',
    perfil: 'neutro',
    status: 'rotina',
    equipamento: 'air fryer',
    tempo_ativo: '~12 min',
    quem_atende: 'Toda a família · Kid-friendly',
    descricao: 'Suave e fresca. Blend seco na air fryer + molho de manteiga com alho e limão finalizando.',
    base_g: 500,
    ingredientes: [
      { nome: 'Tilápia loin',             min: 500, max: 500, unidade: 'g', tipo: 'proteina', secao: 'Base',              nota: '' },
      { nome: 'Azeite de oliva',           min: 10,  max: 10,  unidade: 'g', tipo: 'seco',     secao: 'Base',              nota: '' },
      { nome: 'Sal',                       min: 5,   max: 5,   unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Sweet paprika',             min: 3,   max: 3,   unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Garlic powder',             min: 2,   max: 2,   unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Granulated onion',          min: 2,   max: 2,   unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Dill',                      min: 1,   max: 1,   unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Pimenta-do-reino',          min: 0.3, max: 0.3, unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: 'opcional' },
      { nome: 'Manteiga sem sal',          min: 30,  max: 30,  unidade: 'g', tipo: 'fresco',   secao: 'Molho de manteiga', nota: '' },
      { nome: 'Alho fresco picado',        min: 6,   max: 6,   unidade: 'g', tipo: 'fresco',   secao: 'Molho de manteiga', nota: 'ou minced garlic' },
      { nome: 'Suco de limão',             min: 15,  max: 15,  unidade: 'g', tipo: 'fresco',   secao: 'Molho de manteiga', nota: '' },
      { nome: 'Raspas de limão',           min: 1,   max: 1,   unidade: 'g', tipo: 'fresco',   secao: 'Molho de manteiga', nota: 'opcional' },
      { nome: 'Coentro fresco picado',     min: 4,   max: 4,   unidade: 'g', tipo: 'fresco',   secao: 'Molho de manteiga', nota: '' },
      { nome: 'Sal (molho)',               min: 0.5, max: 0.5, unidade: 'g', tipo: 'seco',     secao: 'Molho de manteiga', nota: '' }
    ],
    pre_passos: [
      { texto: 'Descongelar a tilápia na geladeira na noite anterior.', equipamento: null },
      { texto: 'Montar o blend seco num potinho.', equipamento: null },
      { texto: 'Picar alho e coentro; porcionar a manteiga.', equipamento: null }
    ],
    passos: [
      { texto: 'Secar muito bem os loins com papel-toalha.', equipamento: null },
      { texto: 'Pincelar o azeite e espalhar o blend seco nos dois lados. Pode descansar na geladeira por até 1 hora. Não usar limão nesta etapa.', equipamento: null },
      { texto: 'Preaquecer a **air fryer a 400 °F** por 3 minutos. Untar o cesto ou usar papel perfurado.', equipamento: 'air fryer' },
      { texto: 'Assar sem sobrepor por **10 a 14 minutos**, virando com cuidado na metade, até **145 °F** no centro. Tilápia é delicada — usar espátula de peixe e aguardar soltar antes de virar.', equipamento: 'air fryer' },
      { texto: 'Enquanto assa: derreter a manteiga com o alho em fogo baixo por **1 a 2 minutos**, sem dourar (ou micro-ondas por 30 a 40 segundos).', equipamento: null },
      { texto: 'Fora do fogo, juntar limão, raspas, sal e coentro.', equipamento: null },
      { texto: 'Regar o peixe com o molho ao sair da air fryer. Sobras: até 3 dias na geladeira. Reaquecer a **350 °F** por 3 a 4 min.', equipamento: null }
    ]
  },

  {
    id: 'tilapia-marcante-manteiga',
    proteina: 'tilapia',
    nome: 'Tilápia Marcante — manteiga, alho e páprica defumada',
    perfil: 'marcante',
    status: 'rotina',
    equipamento: 'air fryer',
    tempo_ativo: '~12 min',
    quem_atende: 'Adultos · Pimenta de fundo',
    descricao: 'Aromática, com smoked paprika e pimenta sutil. Mesmo molho de manteiga da versão neutra.',
    base_g: 500,
    ingredientes: [
      { nome: 'Tilápia loin',             min: 500, max: 500, unidade: 'g', tipo: 'proteina', secao: 'Base',              nota: '' },
      { nome: 'Azeite de oliva',           min: 10,  max: 10,  unidade: 'g', tipo: 'seco',     secao: 'Base',              nota: '' },
      { nome: 'Sal',                       min: 5,   max: 5,   unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Smoked paprika',            min: 3,   max: 3,   unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Sweet paprika',             min: 1,   max: 1,   unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Garlic powder',             min: 2,   max: 2,   unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Granulated onion',          min: 2,   max: 2,   unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Ground thyme',              min: 0.5, max: 0.5, unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Pimenta-do-reino',          min: 0.5, max: 0.5, unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Crushed red pepper',        min: 0.1, max: 0.1, unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: 'opcional' },
      { nome: 'Manteiga sem sal',          min: 30,  max: 30,  unidade: 'g', tipo: 'fresco',   secao: 'Molho de manteiga', nota: '' },
      { nome: 'Alho fresco picado',        min: 6,   max: 6,   unidade: 'g', tipo: 'fresco',   secao: 'Molho de manteiga', nota: 'ou minced garlic' },
      { nome: 'Suco de limão',             min: 15,  max: 15,  unidade: 'g', tipo: 'fresco',   secao: 'Molho de manteiga', nota: '' },
      { nome: 'Raspas de limão',           min: 1,   max: 1,   unidade: 'g', tipo: 'fresco',   secao: 'Molho de manteiga', nota: 'opcional' },
      { nome: 'Coentro fresco picado',     min: 4,   max: 4,   unidade: 'g', tipo: 'fresco',   secao: 'Molho de manteiga', nota: '' },
      { nome: 'Sal (molho)',               min: 0.5, max: 0.5, unidade: 'g', tipo: 'seco',     secao: 'Molho de manteiga', nota: '' }
    ],
    pre_passos: [
      { texto: 'Descongelar a tilápia na geladeira na noite anterior.', equipamento: null },
      { texto: 'Montar o blend seco num potinho.', equipamento: null },
      { texto: 'Picar alho e coentro; porcionar a manteiga.', equipamento: null }
    ],
    passos: [
      { texto: 'Secar muito bem os loins com papel-toalha.', equipamento: null },
      { texto: 'Pincelar o azeite e espalhar o blend seco nos dois lados. Pode descansar na geladeira por até 1 hora. Não usar limão nesta etapa.', equipamento: null },
      { texto: 'Preaquecer a **air fryer a 400 °F** por 3 minutos. Untar o cesto ou usar papel perfurado.', equipamento: 'air fryer' },
      { texto: 'Assar sem sobrepor por **10 a 14 minutos**, virando com cuidado na metade, até **145 °F** no centro.', equipamento: 'air fryer' },
      { texto: 'Enquanto assa: derreter a manteiga com o alho em fogo baixo por **1 a 2 minutos**, sem dourar.', equipamento: null },
      { texto: 'Fora do fogo, juntar limão, raspas, sal e coentro.', equipamento: null },
      { texto: 'Regar o peixe com o molho ao sair da air fryer. Reaquecer a **350 °F** por 3 a 4 min.', equipamento: null }
    ]
  },

  {
    id: 'tilapia-neutra-parmesao',
    proteina: 'tilapia',
    nome: 'Tilápia Neutra — crosta de parmesão e limão',
    perfil: 'neutro',
    status: 'rotina',
    equipamento: 'air fryer',
    tempo_ativo: '~15 min',
    quem_atende: 'Toda a família · A mais kid-friendly',
    descricao: 'Crosta de parmesão + panko sobre Dijon. Não vira — a crosta fica por cima.',
    base_g: 500,
    ingredientes: [
      { nome: 'Tilápia loin',             min: 500, max: 500, unidade: 'g', tipo: 'proteina', secao: 'Base',   nota: '' },
      { nome: 'Sal',                       min: 3,   max: 3,   unidade: 'g', tipo: 'seco',     secao: 'Base',   nota: '' },
      { nome: 'Mostarda Dijon',            min: 10,  max: 10,  unidade: 'g', tipo: 'seco',     secao: 'Base',   nota: '' },
      { nome: 'Azeite de oliva',           min: 10,  max: 10,  unidade: 'g', tipo: 'seco',     secao: 'Base',   nota: '' },
      { nome: 'Parmesão ralado fino',      min: 40,  max: 40,  unidade: 'g', tipo: 'seco',     secao: 'Crosta', nota: '' },
      { nome: 'Panko',                     min: 30,  max: 30,  unidade: 'g', tipo: 'seco',     secao: 'Crosta', nota: '' },
      { nome: 'Garlic powder',             min: 1.5, max: 1.5, unidade: 'g', tipo: 'seco',     secao: 'Crosta', nota: '' },
      { nome: 'Sweet paprika',             min: 1.5, max: 1.5, unidade: 'g', tipo: 'seco',     secao: 'Crosta', nota: '' },
      { nome: 'Dill ou oregano leaves',    min: 0.5, max: 0.5, unidade: 'g', tipo: 'seco',     secao: 'Crosta', nota: '' },
      { nome: 'Raspas de limão',           min: 1,   max: 1,   unidade: 'g', tipo: 'seco',     secao: 'Crosta', nota: '' },
      { nome: 'Pimenta-do-reino',          min: 0.3, max: 0.3, unidade: 'g', tipo: 'seco',     secao: 'Crosta', nota: 'opcional' }
    ],
    pre_passos: [
      { texto: 'Descongelar a tilápia na geladeira na noite anterior.', equipamento: null },
      { texto: 'Misturar todos os ingredientes da crosta e guardar fechado na geladeira.', equipamento: null }
    ],
    passos: [
      { texto: 'Secar os loins, temperar com o sal e pincelar a mistura de Dijon + azeite uniformemente.', equipamento: null },
      { texto: 'Pressionar a crosta por cima com a palma da mão ou colher, formando camada firme de ~5 mm que adere ao Dijon. Se soltar, o Dijon foi pouco.', equipamento: null },
      { texto: 'Assar na **air fryer a 380 °F** por **10 a 13 minutos**, **sem virar**, sobre papel perfurado. Se dourar rápido demais, baixar para **360 °F**.', equipamento: 'air fryer' },
      { texto: 'Retirar aos **145 °F** no centro e servir com gomos de limão. Reaquecer só na air fryer (**350 °F**, 3 a 4 min) — micro-ondas amolece a crosta.', equipamento: null }
    ]
  },

  {
    id: 'tilapia-marcante-parmesao',
    proteina: 'tilapia',
    nome: 'Tilápia Marcante — crosta de parmesão defumada',
    perfil: 'marcante',
    status: 'rotina',
    equipamento: 'air fryer',
    tempo_ativo: '~15 min',
    quem_atende: 'Adultos',
    descricao: 'Crosta de parmesão + panko com smoked paprika. Não vira — crosta fica por cima.',
    base_g: 500,
    ingredientes: [
      { nome: 'Tilápia loin',             min: 500, max: 500, unidade: 'g', tipo: 'proteina', secao: 'Base',   nota: '' },
      { nome: 'Sal',                       min: 3,   max: 3,   unidade: 'g', tipo: 'seco',     secao: 'Base',   nota: '' },
      { nome: 'Mostarda Dijon',            min: 10,  max: 10,  unidade: 'g', tipo: 'seco',     secao: 'Base',   nota: '' },
      { nome: 'Azeite de oliva',           min: 10,  max: 10,  unidade: 'g', tipo: 'seco',     secao: 'Base',   nota: '' },
      { nome: 'Parmesão ralado fino',      min: 40,  max: 40,  unidade: 'g', tipo: 'seco',     secao: 'Crosta', nota: '' },
      { nome: 'Panko',                     min: 30,  max: 30,  unidade: 'g', tipo: 'seco',     secao: 'Crosta', nota: '' },
      { nome: 'Garlic powder',             min: 1.5, max: 1.5, unidade: 'g', tipo: 'seco',     secao: 'Crosta', nota: '' },
      { nome: 'Smoked paprika',            min: 1.5, max: 1.5, unidade: 'g', tipo: 'seco',     secao: 'Crosta', nota: '' },
      { nome: 'Dill ou oregano leaves',    min: 0.5, max: 0.5, unidade: 'g', tipo: 'seco',     secao: 'Crosta', nota: '' },
      { nome: 'Raspas de limão',           min: 1,   max: 1,   unidade: 'g', tipo: 'seco',     secao: 'Crosta', nota: '' },
      { nome: 'Pimenta-do-reino',          min: 0.5, max: 0.5, unidade: 'g', tipo: 'seco',     secao: 'Crosta', nota: '' }
    ],
    pre_passos: [
      { texto: 'Descongelar a tilápia na geladeira na noite anterior.', equipamento: null },
      { texto: 'Misturar todos os ingredientes da crosta e guardar fechado na geladeira.', equipamento: null }
    ],
    passos: [
      { texto: 'Secar os loins, temperar com o sal e pincelar a mistura de Dijon + azeite uniformemente.', equipamento: null },
      { texto: 'Pressionar a crosta por cima com a palma da mão ou colher, formando camada firme de ~5 mm que adere ao Dijon.', equipamento: null },
      { texto: 'Assar na **air fryer a 380 °F** por **10 a 13 minutos**, **sem virar**, sobre papel perfurado. Se dourar rápido demais, baixar para **360 °F**.', equipamento: 'air fryer' },
      { texto: 'Retirar aos **145 °F** no centro e servir com gomos de limão. Reaquecer só na air fryer (**350 °F**, 3 a 4 min).', equipamento: null }
    ]
  },

  {
    id: 'tilapia-moqueca-baiana',
    proteina: 'tilapia',
    nome: 'Moqueca baiana de tilápia',
    perfil: 'marcante',
    status: 'guardada',
    equipamento: 'panela',
    tempo_ativo: '~25 min',
    quem_atende: 'Família toda · Pimenta só no prato dos adultos',
    descricao: 'Aromática com dendê e leite de coco. Servir com arroz e farofa de dendê. Receita para ocasiões especiais.',
    base_g: 500,
    ingredientes: [
      { nome: 'Tilápia em pedaços grandes', min: 500, max: 500, unidade: 'g', tipo: 'proteina', secao: 'Marinada', nota: '' },
      { nome: 'Sal',                         min: 4,   max: 4,   unidade: 'g', tipo: 'seco',     secao: 'Marinada', nota: '' },
      { nome: 'Suco de limão',               min: 15,  max: 15,  unidade: 'g', tipo: 'fresco',   secao: 'Marinada', nota: '' },
      { nome: 'Alho',                        min: 5,   max: 5,   unidade: 'g', tipo: 'fresco',   secao: 'Marinada', nota: '' },
      { nome: 'Azeite de oliva',             min: 10,  max: 10,  unidade: 'g', tipo: 'seco',     secao: 'Moqueca',  nota: '' },
      { nome: 'Azeite de dendê',             min: 15,  max: 15,  unidade: 'g', tipo: 'fresco',   secao: 'Moqueca',  nota: 'mercado brasileiro ou online' },
      { nome: 'Azeite de dendê (finalizar)', min: 5,   max: 5,   unidade: 'g', tipo: 'fresco',   secao: 'Moqueca',  nota: 'opcional' },
      { nome: 'Cebola em rodelas',           min: 150, max: 150, unidade: 'g', tipo: 'fresco',   secao: 'Moqueca',  nota: '' },
      { nome: 'Pimentão vermelho em rodelas',min: 100, max: 100, unidade: 'g', tipo: 'fresco',   secao: 'Moqueca',  nota: '' },
      { nome: 'Pimentão amarelo em rodelas', min: 100, max: 100, unidade: 'g', tipo: 'fresco',   secao: 'Moqueca',  nota: '' },
      { nome: 'Tomate em rodelas',           min: 200, max: 200, unidade: 'g', tipo: 'fresco',   secao: 'Moqueca',  nota: '' },
      { nome: 'Alho picado',                 min: 6,   max: 6,   unidade: 'g', tipo: 'fresco',   secao: 'Moqueca',  nota: '' },
      { nome: 'Leite de coco',               min: 200, max: 200, unidade: 'g', tipo: 'fresco',   secao: 'Moqueca',  nota: '' },
      { nome: 'Banana-da-terra em rodelas',  min: 150, max: 150, unidade: 'g', tipo: 'fresco',   secao: 'Moqueca',  nota: 'opcional' },
      { nome: 'Coentro',                     min: 10,  max: 10,  unidade: 'g', tipo: 'fresco',   secao: 'Moqueca',  nota: '' },
      { nome: 'Cebolinha',                   min: 5,   max: 5,   unidade: 'g', tipo: 'fresco',   secao: 'Moqueca',  nota: '' },
      { nome: 'Sal (acerto final)',           min: 2,   max: 2,   unidade: 'g', tipo: 'seco',     secao: 'Moqueca',  nota: '' }
    ],
    pre_passos: [
      { texto: 'Marinar o peixe com sal, limão e alho por **15 a 20 minutos** (máximo 30 — o limão começa a "cozinhar" o peixe).', equipamento: null }
    ],
    passos: [
      { texto: 'Aquecer o azeite de oliva e o dendê em fogo médio; refogar cebola, alho e pimentões por **3 minutos**.', equipamento: 'panela' },
      { texto: 'Juntar o tomate, tampar e reduzir por **3 a 4 minutos**.', equipamento: 'panela' },
      { texto: 'Adicionar o leite de coco e ferver por **2 minutos**. Se usar banana-da-terra, colocar agora e cozinhar por **3 minutos**.', equipamento: 'panela' },
      { texto: 'Acomodar o peixe marinado, tampar e cozinhar em fogo baixo por **8 a 10 minutos**, mexendo o mínimo possível para não desmanchar.', equipamento: 'panela' },
      { texto: 'Desligar o fogo. Finalizar com coentro, cebolinha e acerto de sal. Regar com dendê extra se usar.', equipamento: null },
      { texto: 'Servir com arroz branco e farofa de dendê.', equipamento: null }
    ]
  },

  {
    id: 'tilapia-peixada-cearense',
    proteina: 'tilapia',
    nome: 'Peixada cearense',
    perfil: 'neutro',
    status: 'guardada',
    equipamento: 'panela',
    tempo_ativo: '~30 min',
    quem_atende: 'Toda a família',
    descricao: 'Caldo com legumes, peixe, ovos e pirão. Receita completa para ocasiões especiais.',
    base_g: 500,
    ingredientes: [
      { nome: 'Tilápia em postas grandes', min: 500, max: 500, unidade: 'g', tipo: 'proteina', secao: 'Marinada',         nota: '' },
      { nome: 'Sal',                        min: 4,   max: 4,   unidade: 'g', tipo: 'seco',     secao: 'Marinada',         nota: '' },
      { nome: 'Suco de limão',              min: 15,  max: 15,  unidade: 'g', tipo: 'fresco',   secao: 'Marinada',         nota: '' },
      { nome: 'Alho',                       min: 5,   max: 5,   unidade: 'g', tipo: 'fresco',   secao: 'Marinada',         nota: '' },
      { nome: 'Batata em pedaços grandes',  min: 250, max: 250, unidade: 'g', tipo: 'fresco',   secao: 'Legumes cozidos',  nota: '' },
      { nome: 'Cenoura em pedaços grandes', min: 120, max: 120, unidade: 'g', tipo: 'fresco',   secao: 'Legumes cozidos',  nota: '' },
      { nome: 'Ovos',                       min: 100, max: 100, unidade: 'g', tipo: 'fresco',   secao: 'Legumes cozidos',  nota: '2 unidades' },
      { nome: 'Azeite de oliva',            min: 15,  max: 15,  unidade: 'g', tipo: 'seco',     secao: 'Caldo',            nota: '' },
      { nome: 'Cebola (metade picada, metade em quartos)', min: 150, max: 150, unidade: 'g', tipo: 'fresco', secao: 'Caldo', nota: '' },
      { nome: 'Tomate (metade picado, metade em quartos)', min: 200, max: 200, unidade: 'g', tipo: 'fresco', secao: 'Caldo', nota: '' },
      { nome: 'Pimentão (metade picado, metade em tiras)', min: 150, max: 150, unidade: 'g', tipo: 'fresco', secao: 'Caldo', nota: '' },
      { nome: 'Colorau',                    min: 3,   max: 3,   unidade: 'g', tipo: 'seco',     secao: 'Caldo',            nota: '' },
      { nome: 'Turmeric',                   min: 1,   max: 1,   unidade: 'g', tipo: 'seco',     secao: 'Caldo',            nota: '' },
      { nome: 'Água quente',                min: 400, max: 400, unidade: 'g', tipo: 'fresco',   secao: 'Caldo',            nota: '' },
      { nome: 'Leite de coco',              min: 100, max: 100, unidade: 'g', tipo: 'fresco',   secao: 'Caldo',            nota: '' },
      { nome: 'Coentro',                    min: 10,  max: 10,  unidade: 'g', tipo: 'fresco',   secao: 'Caldo',            nota: '' },
      { nome: 'Cebolinha',                  min: 5,   max: 5,   unidade: 'g', tipo: 'fresco',   secao: 'Caldo',            nota: '' },
      { nome: 'Caldo da peixada (pirão)',   min: 300, max: 300, unidade: 'g', tipo: 'fresco',   secao: 'Pirão',            nota: 'retirar antes de servir' },
      { nome: 'Farinha de mandioca',        min: 45,  max: 45,  unidade: 'g', tipo: 'seco',     secao: 'Pirão',            nota: '' }
    ],
    pre_passos: [
      { texto: 'Marinar o peixe com sal, limão e alho por **15 a 20 minutos** (máximo 30).', equipamento: null }
    ],
    passos: [
      { texto: 'Cozinhar batata, cenoura e ovos em água por **12 a 15 minutos**; reservar.', equipamento: 'panela' },
      { texto: 'Refogar no azeite a parte **picada** da cebola, tomate e pimentão com colorau e turmeric por **3 minutos**.', equipamento: 'panela' },
      { texto: 'Juntar a água quente e ferver por **5 minutos**.', equipamento: 'panela' },
      { texto: 'Adicionar o peixe, os vegetais em quartos/tiras e o leite de coco; cozinhar por **5 a 7 minutos** em fogo médio.', equipamento: 'panela' },
      { texto: 'Voltar os legumes e os ovos cortados ao meio para a panela; finalizar com coentro e cebolinha.', equipamento: 'panela' },
      { texto: '**Pirão:** retirar 300 g do caldo para uma panelinha. Em fogo baixo, jogar a farinha de mandioca **em chuva fina** com uma mão enquanto mexe continuamente com a outra (colher de pau). Mexer por **2 a 3 minutos** até virar mingau mole — escorre da colher mas encorpa rápido fora do fogo.', equipamento: 'panela' }
    ]
  },

  // ── CAMARÃO ──────────────────────────────────────────────────────────────

  {
    id: 'camarao-neutro-manteiga',
    proteina: 'camarao',
    nome: 'Camarão Neutro — manteiga, alho e limão',
    perfil: 'neutro',
    status: 'rotina',
    equipamento: 'air fryer',
    tempo_ativo: '~10 min',
    quem_atende: 'Toda a família · Kid-friendly',
    descricao: 'Suave e rápido. Blend seco na air fryer + molho de manteiga. Pesar depois de descongelado e escorrido.',
    base_g: 500,
    ingredientes: [
      { nome: 'Camarão cru descascado',    min: 500, max: 500, unidade: 'g', tipo: 'proteina', secao: 'Base',              nota: 'pesado descongelado e escorrido' },
      { nome: 'Azeite de oliva',           min: 8,   max: 8,   unidade: 'g', tipo: 'seco',     secao: 'Base',              nota: '' },
      { nome: 'Sal',                       min: 4,   max: 4,   unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Sweet paprika',             min: 2,   max: 2,   unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Garlic powder',             min: 2,   max: 2,   unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Granulated onion',          min: 1,   max: 1,   unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Dill',                      min: 0.5, max: 0.5, unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Pimenta-do-reino',          min: 0.3, max: 0.3, unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: 'opcional' },
      { nome: 'Manteiga sem sal',          min: 25,  max: 25,  unidade: 'g', tipo: 'fresco',   secao: 'Molho de manteiga', nota: '' },
      { nome: 'Alho fresco picado',        min: 6,   max: 6,   unidade: 'g', tipo: 'fresco',   secao: 'Molho de manteiga', nota: 'ou minced garlic' },
      { nome: 'Suco de limão',             min: 12,  max: 12,  unidade: 'g', tipo: 'fresco',   secao: 'Molho de manteiga', nota: '' },
      { nome: 'Raspas de limão',           min: 1,   max: 1,   unidade: 'g', tipo: 'fresco',   secao: 'Molho de manteiga', nota: 'opcional' },
      { nome: 'Coentro fresco picado',     min: 4,   max: 4,   unidade: 'g', tipo: 'fresco',   secao: 'Molho de manteiga', nota: '' }
    ],
    pre_passos: [
      { texto: 'Descongelar na geladeira na noite anterior (ou em água fria corrente, dentro do saco fechado, por 10 a 15 minutos).', equipamento: null },
      { texto: 'Montar o blend seco num potinho.', equipamento: null },
      { texto: 'Picar alho e coentro; porcionar a manteiga.', equipamento: null }
    ],
    passos: [
      { texto: 'Escorrer e secar muito bem o camarão com papel-toalha. Pesar — o gelo de glaciamento não conta.', equipamento: null },
      { texto: 'Misturar com o azeite e o blend seco.', equipamento: null },
      { texto: 'Preaquecer a **air fryer a 400 °F** por 3 minutos.', equipamento: 'air fryer' },
      { texto: 'Espalhar o camarão em **camada única** e assar por **6 a 8 minutos**, sacudindo o cesto na metade. Pronto quando rosado, opaco e em formato de **"C"** — formato de "O" fechado significa que passou do ponto e ficará borrachudo.', equipamento: 'air fryer' },
      { texto: 'Enquanto assa: derreter a manteiga com o alho em fogo baixo por **1 a 2 minutos**, sem dourar.', equipamento: null },
      { texto: 'Fora do fogo, juntar limão, raspas e coentro.', equipamento: null },
      { texto: 'Misturar o camarão ao molho logo ao sair da air fryer. Reaquecer a **350 °F** por 2 a 3 min. Evitar micro-ondas.', equipamento: null }
    ]
  },

  {
    id: 'camarao-marcante-manteiga',
    proteina: 'camarao',
    nome: 'Camarão Marcante — manteiga, alho e páprica defumada',
    perfil: 'marcante',
    status: 'rotina',
    equipamento: 'air fryer',
    tempo_ativo: '~10 min',
    quem_atende: 'Adultos · Pimenta de fundo',
    descricao: 'Aromático com smoked paprika e pimenta sutil. Mesmo molho de manteiga da versão neutra.',
    base_g: 500,
    ingredientes: [
      { nome: 'Camarão cru descascado',    min: 500, max: 500, unidade: 'g', tipo: 'proteina', secao: 'Base',              nota: 'pesado descongelado e escorrido' },
      { nome: 'Azeite de oliva',           min: 8,   max: 8,   unidade: 'g', tipo: 'seco',     secao: 'Base',              nota: '' },
      { nome: 'Sal',                       min: 4,   max: 4,   unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Smoked paprika',            min: 2,   max: 2,   unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Sweet paprika',             min: 0.5, max: 0.5, unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Garlic powder',             min: 2,   max: 2,   unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Granulated onion',          min: 1,   max: 1,   unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Ground thyme',              min: 0.3, max: 0.3, unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Pimenta-do-reino',          min: 0.5, max: 0.5, unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: '' },
      { nome: 'Crushed red pepper',        min: 0.1, max: 0.1, unidade: 'g', tipo: 'seco',     secao: 'Blend seco',        nota: 'opcional' },
      { nome: 'Manteiga sem sal',          min: 25,  max: 25,  unidade: 'g', tipo: 'fresco',   secao: 'Molho de manteiga', nota: '' },
      { nome: 'Alho fresco picado',        min: 6,   max: 6,   unidade: 'g', tipo: 'fresco',   secao: 'Molho de manteiga', nota: 'ou minced garlic' },
      { nome: 'Suco de limão',             min: 12,  max: 12,  unidade: 'g', tipo: 'fresco',   secao: 'Molho de manteiga', nota: '' },
      { nome: 'Raspas de limão',           min: 1,   max: 1,   unidade: 'g', tipo: 'fresco',   secao: 'Molho de manteiga', nota: 'opcional' },
      { nome: 'Coentro fresco picado',     min: 4,   max: 4,   unidade: 'g', tipo: 'fresco',   secao: 'Molho de manteiga', nota: '' }
    ],
    pre_passos: [
      { texto: 'Descongelar na geladeira na noite anterior.', equipamento: null },
      { texto: 'Montar o blend seco num potinho.', equipamento: null },
      { texto: 'Picar alho e coentro; porcionar a manteiga.', equipamento: null }
    ],
    passos: [
      { texto: 'Escorrer e secar muito bem o camarão com papel-toalha. Pesar.', equipamento: null },
      { texto: 'Misturar com o azeite e o blend seco.', equipamento: null },
      { texto: 'Preaquecer a **air fryer a 400 °F** por 3 minutos.', equipamento: 'air fryer' },
      { texto: 'Espalhar em **camada única** e assar por **6 a 8 minutos**, sacudindo na metade, até rosado, opaco e em **"C"**.', equipamento: 'air fryer' },
      { texto: 'Enquanto assa: derreter a manteiga com o alho em fogo baixo por **1 a 2 minutos**, sem dourar.', equipamento: null },
      { texto: 'Fora do fogo, juntar limão, raspas e coentro.', equipamento: null },
      { texto: 'Misturar o camarão ao molho logo ao sair da air fryer. Reaquecer a **350 °F** por 2 a 3 min.', equipamento: null }
    ]
  },

  {
    id: 'camarao-alho-e-oleo',
    proteina: 'camarao',
    nome: 'Camarão alho e óleo',
    perfil: 'neutro',
    status: 'rotina',
    equipamento: 'frigideira grande',
    tempo_ativo: '~10 min',
    quem_atende: 'Toda a família',
    descricao: 'Alho laminado fino dourado no azeite, camarão selado em fogo alto. Serve com espaguete, arroz ou salada.',
    base_g: 500,
    ingredientes: [
      { nome: 'Camarão cru descascado',       min: 500, max: 500, unidade: 'g', tipo: 'proteina', nota: 'pesado descongelado e escorrido' },
      { nome: 'Sal',                           min: 4,   max: 4,   unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Pimenta-do-reino',              min: 0.3, max: 0.3, unidade: 'g', tipo: 'seco',     nota: 'opcional' },
      { nome: 'Azeite de oliva',               min: 25,  max: 25,  unidade: 'g', tipo: 'seco',     nota: '' },
      { nome: 'Alho fresco laminado fino',     min: 20,  max: 20,  unidade: 'g', tipo: 'fresco',   nota: 'fatias de ~1–2 mm com faca' },
      { nome: 'Suco de limão',                 min: 10,  max: 10,  unidade: 'g', tipo: 'fresco',   nota: '' },
      { nome: 'Salsinha ou coentro picado',    min: 6,   max: 6,   unidade: 'g', tipo: 'fresco',   nota: '' },
      { nome: 'Crushed red pepper',            min: 0.1, max: 0.1, unidade: 'g', tipo: 'seco',     nota: 'opcional — só no prato dos adultos' }
    ],
    pre_passos: [
      { texto: 'Descongelar na noite anterior.', equipamento: null },
      { texto: 'Laminar o alho em fatias de ~1–2 mm com faca; picar a erva. Guardar na geladeira.', equipamento: null }
    ],
    passos: [
      { texto: 'Secar bem o camarão, pesar e temperar com sal e pimenta.', equipamento: null },
      { texto: 'Aquecer o azeite com o alho laminado em **fogo médio** por **1 a 2 minutos**, até o alho ficar dourado bem claro. Retirar o alho com escumadeira e reservar — se passar do ponto, amarga.', equipamento: 'frigideira grande' },
      { texto: 'Subir o fogo para **médio-alto**. Colocar o camarão em camada única e deixar **1,5 a 2 minutos sem mexer**. Se a frigideira for pequena, fazer em duas levas — camarão amontoado cozinha no vapor e não doura.', equipamento: 'frigideira grande' },
      { texto: 'Virar e cozinhar mais **1 a 1,5 minuto**, até rosado e opaco.', equipamento: 'frigideira grande' },
      { texto: 'Desligar o fogo. Voltar o alho, juntar limão e erva e misturar.', equipamento: null }
    ]
  },

  {
    id: 'camarao-manteiga-de-garrafa',
    proteina: 'camarao',
    nome: 'Camarão na manteiga de garrafa com coentro',
    perfil: 'neutro',
    status: 'rotina',
    equipamento: 'frigideira grande',
    tempo_ativo: '~12 min',
    quem_atende: 'Toda a família',
    descricao: 'Manteiga de garrafa (ou ghee) com cebola, alho e cheiro-verde. Tempero rápido de 10 min antes.',
    base_g: 500,
    ingredientes: [
      { nome: 'Camarão cru descascado',    min: 500, max: 500, unidade: 'g', tipo: 'proteina', secao: 'Tempero',  nota: 'pesado descongelado e escorrido' },
      { nome: 'Sal',                       min: 4,   max: 4,   unidade: 'g', tipo: 'seco',     secao: 'Tempero',  nota: '' },
      { nome: 'Alho fresco picado',        min: 5,   max: 5,   unidade: 'g', tipo: 'fresco',   secao: 'Tempero',  nota: '' },
      { nome: 'Suco de limão',             min: 10,  max: 10,  unidade: 'g', tipo: 'fresco',   secao: 'Tempero',  nota: '' },
      { nome: 'Pimenta-do-reino',          min: 0.3, max: 0.3, unidade: 'g', tipo: 'seco',     secao: 'Tempero',  nota: 'opcional' },
      { nome: 'Manteiga de garrafa',       min: 25,  max: 25,  unidade: 'g', tipo: 'fresco',   secao: 'Preparo',  nota: 'ou ghee (substituto mais próximo)' },
      { nome: 'Cebola picada fina',        min: 50,  max: 50,  unidade: 'g', tipo: 'fresco',   secao: 'Preparo',  nota: '' },
      { nome: 'Alho fresco picado',        min: 6,   max: 6,   unidade: 'g', tipo: 'fresco',   secao: 'Preparo',  nota: '' },
      { nome: 'Coentro fresco picado',     min: 8,   max: 8,   unidade: 'g', tipo: 'fresco',   secao: 'Preparo',  nota: '' },
      { nome: 'Cebolinha picada',          min: 4,   max: 4,   unidade: 'g', tipo: 'fresco',   secao: 'Preparo',  nota: '' }
    ],
    pre_passos: [
      { texto: 'Descongelar na noite anterior.', equipamento: null },
      { texto: 'Picar cebola, alho, coentro e cebolinha; guardar na geladeira.', equipamento: null }
    ],
    passos: [
      { texto: 'Secar o camarão, pesar e temperar com sal, alho, limão e pimenta. Descansar **10 a 15 minutos** (máximo 20 — o limão altera a textura).', equipamento: null },
      { texto: 'Aquecer a manteiga de garrafa em **fogo médio-alto** e refogar a cebola por **2 minutos**.', equipamento: 'frigideira grande' },
      { texto: 'Juntar o alho e cozinhar por **30 segundos**.', equipamento: 'frigideira grande' },
      { texto: 'Adicionar o camarão escorrido (descartar o líquido do tempero) em camada única e cozinhar **1,5 a 2 minutos de cada lado**.', equipamento: 'frigideira grande' },
      { texto: 'Desligar o fogo e finalizar com coentro e cebolinha.', equipamento: null }
    ]
  },

  {
    id: 'camarao-gergelim-gengibre',
    proteina: 'camarao',
    nome: 'Camarão com gergelim, gengibre e limão',
    perfil: 'marcante',
    status: 'rotina',
    equipamento: 'air fryer',
    tempo_ativo: '~10 min',
    quem_atende: 'Toda a família · Aromático sem ardência',
    descricao: 'Marinada de shoyu + óleo de gergelim tostado + gengibre. Finalização em pote separado — não reaproveitar a marinada.',
    base_g: 500,
    ingredientes: [
      { nome: 'Camarão cru descascado',       min: 500, max: 500, unidade: 'g', tipo: 'proteina', secao: 'Marinada',    nota: 'pesado descongelado e escorrido' },
      { nome: 'Shoyu low sodium',              min: 20,  max: 20,  unidade: 'g', tipo: 'seco',     secao: 'Marinada',    nota: 'não adicionar sal extra' },
      { nome: 'Óleo de gergelim tostado',      min: 8,   max: 8,   unidade: 'g', tipo: 'seco',     secao: 'Marinada',    nota: '' },
      { nome: 'Vinagre de arroz',              min: 8,   max: 8,   unidade: 'g', tipo: 'seco',     secao: 'Marinada',    nota: '' },
      { nome: 'Suco de limão',                 min: 8,   max: 8,   unidade: 'g', tipo: 'fresco',   secao: 'Marinada',    nota: '' },
      { nome: 'Alho fresco picado',            min: 5,   max: 5,   unidade: 'g', tipo: 'fresco',   secao: 'Marinada',    nota: 'ou minced garlic' },
      { nome: 'Ground ginger',                 min: 1,   max: 1,   unidade: 'g', tipo: 'seco',     secao: 'Marinada',    nota: '' },
      { nome: 'Mel',                           min: 5,   max: 5,   unidade: 'g', tipo: 'seco',     secao: 'Marinada',    nota: 'opcional' },
      { nome: 'Shoyu low sodium (finaliz.)',   min: 5,   max: 5,   unidade: 'g', tipo: 'seco',     secao: 'Finalização', nota: '' },
      { nome: 'Óleo de gergelim tostado (finaliz.)', min: 3, max: 3, unidade: 'g', tipo: 'seco',  secao: 'Finalização', nota: '' },
      { nome: 'Suco de limão (finaliz.)',      min: 5,   max: 5,   unidade: 'g', tipo: 'fresco',   secao: 'Finalização', nota: '' },
      { nome: 'Cebolinha picada',              min: 4,   max: 4,   unidade: 'g', tipo: 'fresco',   secao: 'Finalização', nota: '' },
      { nome: 'Gergelim',                      min: 3,   max: 3,   unidade: 'g', tipo: 'seco',     secao: 'Finalização', nota: 'opcional' }
    ],
    pre_passos: [
      { texto: 'Descongelar na noite anterior.', equipamento: null },
      { texto: 'Misturar a marinada num pote; misturar a finalização em **outro pote separado** — nunca reaproveitar a marinada que teve contato com o camarão cru.', equipamento: null }
    ],
    passos: [
      { texto: 'Secar o camarão, pesar e misturar com a marinada. Não usar sal extra — o shoyu já salga. Marinar **15 a 20 minutos** (máximo 30).', equipamento: null },
      { texto: 'Preaquecer a **air fryer a 400 °F** por 3 minutos.', equipamento: 'air fryer' },
      { texto: 'Escorrer o camarão (descartar a marinada usada) e espalhar em **camada única**.', equipamento: null },
      { texto: 'Assar por **6 a 8 minutos**, sacudindo o cesto na metade, até rosado, opaco e em **"C"**.', equipamento: 'air fryer' },
      { texto: 'Misturar com a finalização e a cebolinha. Salpicar gergelim. Combina com arroz branco e pepino com vinagre de arroz.', equipamento: null }
    ]
  },

  {
    id: 'camarao-moqueca-semana',
    proteina: 'camarao',
    nome: 'Camarão ao leite de coco (moqueca de semana)',
    perfil: 'marcante',
    status: 'rotina',
    equipamento: 'panela',
    tempo_ativo: '~20 min',
    quem_atende: 'Toda a família · Pimenta só no prato dos adultos',
    descricao: 'Moqueca rápida de semana. Camarão entra só no final — mantém textura macia e tempo em ~20 min.',
    base_g: 500,
    ingredientes: [
      { nome: 'Camarão cru descascado',    min: 500, max: 500, unidade: 'g', tipo: 'proteina', secao: 'Tempero', nota: 'pesado descongelado e escorrido' },
      { nome: 'Sal',                       min: 4,   max: 4,   unidade: 'g', tipo: 'seco',     secao: 'Tempero', nota: '' },
      { nome: 'Suco de limão',             min: 10,  max: 10,  unidade: 'g', tipo: 'fresco',   secao: 'Tempero', nota: '' },
      { nome: 'Alho',                      min: 4,   max: 4,   unidade: 'g', tipo: 'fresco',   secao: 'Tempero', nota: '' },
      { nome: 'Azeite de oliva',           min: 10,  max: 10,  unidade: 'g', tipo: 'seco',     secao: 'Moqueca', nota: '' },
      { nome: 'Azeite de dendê',           min: 10,  max: 10,  unidade: 'g', tipo: 'fresco',   secao: 'Moqueca', nota: 'opcional' },
      { nome: 'Cebola em tiras',           min: 120, max: 120, unidade: 'g', tipo: 'fresco',   secao: 'Moqueca', nota: '' },
      { nome: 'Pimentão vermelho em tiras',min: 80,  max: 80,  unidade: 'g', tipo: 'fresco',   secao: 'Moqueca', nota: '' },
      { nome: 'Pimentão amarelo em tiras', min: 80,  max: 80,  unidade: 'g', tipo: 'fresco',   secao: 'Moqueca', nota: '' },
      { nome: 'Tomate picado',             min: 180, max: 180, unidade: 'g', tipo: 'fresco',   secao: 'Moqueca', nota: '' },
      { nome: 'Alho picado',               min: 5,   max: 5,   unidade: 'g', tipo: 'fresco',   secao: 'Moqueca', nota: '' },
      { nome: 'Leite de coco',             min: 200, max: 200, unidade: 'g', tipo: 'fresco',   secao: 'Moqueca', nota: '' },
      { nome: 'Coentro',                   min: 10,  max: 10,  unidade: 'g', tipo: 'fresco',   secao: 'Moqueca', nota: '' },
      { nome: 'Cebolinha',                 min: 4,   max: 4,   unidade: 'g', tipo: 'fresco',   secao: 'Moqueca', nota: '' },
      { nome: 'Sal (acerto final)',         min: 1.5, max: 1.5, unidade: 'g', tipo: 'seco',     secao: 'Moqueca', nota: '' }
    ],
    pre_passos: [
      { texto: 'Temperar o camarão com sal, limão e alho e descansar **10 a 15 minutos**.', equipamento: null },
      { texto: 'Cortar cebola, pimentões e tomate; picar alho e ervas. Guardar na geladeira.', equipamento: null }
    ],
    passos: [
      { texto: 'Aquecer o azeite (e o dendê, se usar) e refogar cebola, alho e pimentões por **3 minutos**.', equipamento: 'panela' },
      { texto: 'Juntar o tomate e cozinhar por **3 minutos**.', equipamento: 'panela' },
      { texto: 'Adicionar o leite de coco e ferver em fogo médio por **3 a 4 minutos**, até engrossar levemente.', equipamento: 'panela' },
      { texto: 'Juntar o camarão escorrido e cozinhar por **3 a 4 minutos**, até rosado e opaco. O camarão entra só no final — é isso que mantém a textura macia.', equipamento: 'panela' },
      { texto: 'Desligar o fogo. Finalizar com coentro, cebolinha e acerto de sal. Servir com arroz branco.', equipamento: null }
    ]
  },

  {
    id: 'camarao-bobo-adaptado',
    proteina: 'camarao',
    nome: 'Bobó de camarão adaptado',
    perfil: 'marcante',
    status: 'guardada',
    equipamento: 'panela de pressão + panela',
    tempo_ativo: '~35 min',
    quem_atende: 'Toda a família · Ideal para fim de semana',
    descricao: 'Camarão e creme de mandioca servidos lado a lado — controle de porção separado. Creme pode ser feito na véspera.',
    base_g: 500,
    ingredientes: [
      { nome: 'Camarão cru descascado',    min: 500, max: 500, unidade: 'g', tipo: 'proteina', secao: 'Camarão',            nota: 'pesado descongelado e escorrido' },
      { nome: 'Sal',                       min: 4,   max: 4,   unidade: 'g', tipo: 'seco',     secao: 'Camarão',            nota: '' },
      { nome: 'Suco de limão',             min: 10,  max: 10,  unidade: 'g', tipo: 'fresco',   secao: 'Camarão',            nota: '' },
      { nome: 'Alho',                      min: 4,   max: 4,   unidade: 'g', tipo: 'fresco',   secao: 'Camarão',            nota: '' },
      { nome: 'Azeite de oliva',           min: 10,  max: 10,  unidade: 'g', tipo: 'seco',     secao: 'Camarão',            nota: '' },
      { nome: 'Azeite de dendê',           min: 15,  max: 15,  unidade: 'g', tipo: 'fresco',   secao: 'Camarão',            nota: '' },
      { nome: 'Cebola picada',             min: 120, max: 120, unidade: 'g', tipo: 'fresco',   secao: 'Camarão',            nota: '' },
      { nome: 'Pimentão vermelho picado',  min: 100, max: 100, unidade: 'g', tipo: 'fresco',   secao: 'Camarão',            nota: '' },
      { nome: 'Tomate picado',             min: 180, max: 180, unidade: 'g', tipo: 'fresco',   secao: 'Camarão',            nota: '' },
      { nome: 'Alho picado',               min: 5,   max: 5,   unidade: 'g', tipo: 'fresco',   secao: 'Camarão',            nota: '' },
      { nome: 'Leite de coco',             min: 150, max: 150, unidade: 'g', tipo: 'fresco',   secao: 'Camarão',            nota: '' },
      { nome: 'Coentro',                   min: 10,  max: 10,  unidade: 'g', tipo: 'fresco',   secao: 'Camarão',            nota: '' },
      { nome: 'Sal (acerto final)',         min: 1,   max: 1,   unidade: 'g', tipo: 'seco',     secao: 'Camarão',            nota: '' },
      { nome: 'Mandioca (yuca congelada)', min: 500, max: 500, unidade: 'g', tipo: 'fresco',   secao: 'Creme de mandioca',  nota: 'acompanhamento — pesar à parte' },
      { nome: 'Água de cozimento reservada', min: 150, max: 150, unidade: 'g', tipo: 'fresco', secao: 'Creme de mandioca',  nota: 'reservar da panela de pressão' },
      { nome: 'Leite de coco (creme)',     min: 100, max: 100, unidade: 'g', tipo: 'fresco',   secao: 'Creme de mandioca',  nota: '' },
      { nome: 'Sal (creme)',               min: 3,   max: 3,   unidade: 'g', tipo: 'seco',     secao: 'Creme de mandioca',  nota: '' }
    ],
    pre_passos: [
      { texto: 'Descongelar o camarão na noite anterior.', equipamento: null },
      { texto: 'Picar cebola, pimentão, tomate, alho e coentro.', equipamento: null },
      { texto: 'O creme de mandioca pode ser feito na véspera e reaquecido no dia.', equipamento: null }
    ],
    passos: [
      { texto: '**[Creme]** Cozinhar a mandioca na panela de pressão com água cobrindo por **15 minutos após pegar pressão**. Deixar a pressão sair naturalmente antes de abrir.', equipamento: 'panela de pressão' },
      { texto: '**[Creme]** Retirar a fibra central de cada pedaço — é um fio lenhoso que atravessa o centro e fica duro mesmo bem cozido. Puxar com os dedos ou garfo. Reservar **150 g da água do cozimento**.', equipamento: null },
      { texto: '**[Creme]** Bater a mandioca no liquidificador com a água reservada, leite de coco e sal até virar creme liso. Reservar.', equipamento: 'liquidificador' },
      { texto: '**[Camarão]** Temperar o camarão com sal, limão e alho por **10 a 15 minutos**.', equipamento: null },
      { texto: '**[Camarão]** Aquecer azeite e dendê; refogar cebola, pimentão e alho por **3 minutos**.', equipamento: 'panela' },
      { texto: '**[Camarão]** Juntar o tomate e cozinhar por **3 minutos**. Adicionar o leite de coco e ferver por **3 minutos**.', equipamento: 'panela' },
      { texto: '**[Camarão]** Juntar o camarão escorrido e cozinhar por **3 a 4 minutos**. Desligar e finalizar com coentro e acerto de sal.', equipamento: 'panela' },
      { texto: 'Servir o camarão e o creme de mandioca **lado a lado no prato**, cada um pesado à parte. No bobó tradicional o creme é misturado ao refogado — esta versão separa para controle de porção.', equipamento: null }
    ]
  }

];
