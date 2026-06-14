// Carrega receitas da planilha Google Sheets e retorna array no formato window.RECIPES
async function loadFromSheets(sheetId, apiKey) {
  var base   = 'https://sheets.googleapis.com/v4/spreadsheets/' + sheetId + '/values/';
  var params = '?key=' + apiKey + '&valueRenderOption=UNFORMATTED_VALUE';

  var resRec = await fetch(base + 'Receitas%21A%3AS' + params);
  var resPas = await fetch(base + 'Passos%21A%3AC' + params);

  if (!resRec.ok) throw new Error('Receitas HTTP ' + resRec.status);
  if (!resPas.ok) throw new Error('Passos HTTP '   + resPas.status);

  var dadosRec = await resRec.json();
  var dadosPas = await resPas.json();

  var linhasRec = (dadosRec.values || []).slice(1); // remove cabeçalho
  var linhasPas = (dadosPas.values || []).slice(1);

  // Mapa de passos: receita_id → [texto ordenado]
  var mapaPassos = {};
  linhasPas.forEach(function(row) {
    var id    = String(row[0] || '');
    var ordem = parseInt(row[1]) || 0;
    var texto = String(row[2] || '');
    if (!id) return;
    if (!mapaPassos[id]) mapaPassos[id] = [];
    mapaPassos[id].push({ ordem: ordem, texto: texto });
  });
  Object.keys(mapaPassos).forEach(function(id) {
    mapaPassos[id].sort(function(a, b) { return a.ordem - b.ordem; });
    mapaPassos[id] = mapaPassos[id].map(function(p) { return p.texto; });
  });

  // Mapa de receitas agrupando linhas por receita_id
  var mapaReceitas  = {};
  var ordemReceitas = [];

  linhasRec.forEach(function(row) {
    // Lê célula com fallback para valor padrão
    function cel(i, def) {
      return (row[i] !== undefined && row[i] !== '') ? row[i] : def;
    }

    var proteina = String(cel(0, ''));
    var id       = String(cel(1, ''));
    if (!id) return;

    if (!mapaReceitas[id]) {
      var r = {
        id:           id,
        proteina:     proteina,
        nome:         String(cel(2, '')),
        perfil:       String(cel(3, 'neutro')),
        quem_atende:  String(cel(4, '')),
        descricao:    String(cel(5, '')),
        base_g:       parseFloat(cel(6, 0)) || null,
        ingredientes: []
      };
      // Campos exclusivos de acompanhamentos
      var le  = cel(7, '');
      var mq  = cel(8, '');
      var mxq = cel(9, '');
      var sq  = cel(10, '');
      if (le  !== '') r.label_escala = String(le);
      if (mq  !== '') r.min_qty      = parseFloat(mq);
      if (mxq !== '') r.max_qty      = parseFloat(mxq);
      if (sq  !== '') r.step_qty     = parseFloat(sq);

      mapaReceitas[id] = r;
      ordemReceitas.push(id);
    }

    // Ingrediente desta linha
    var ingNome = String(cel(11, ''));
    if (!ingNome) return;

    var qmin    = parseFloat(cel(12, 0));
    var qmax    = parseFloat(cel(13, 0));

    mapaReceitas[id].ingredientes.push({
      nome:    ingNome,
      min:     isNaN(qmin) ? 0 : qmin,
      max:     isNaN(qmax) ? 0 : qmax,
      unidade: String(cel(14, 'g')),
      nota:    String(cel(15, '')),
      tipo:    String(cel(16, 'seco')),
      secao:   String(cel(17, ''))
    });
  });

  // Monta array final com passos
  return ordemReceitas.map(function(id) {
    var r  = mapaReceitas[id];
    r.passos = mapaPassos[id] || [];
    return r;
  });
}
