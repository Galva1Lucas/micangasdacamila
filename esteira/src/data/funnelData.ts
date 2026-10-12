import { FunnelPageData } from '../types/funnel';

export const FUNNEL_PAGES: FunnelPageData[] = [
  // ==========================================
  // UPSELL 4
  // ==========================================
  {
    id: 'up4',
    pageNumber: 4,
    totalUpsells: 10,
    name: 'UPSELL 4 — Mapa de Fornecedores Secretos',
    shortName: 'Mapa de Fornecedores',
    type: 'upsell',
    urgency: {
      title: 'URGENTE!!',
      text: 'Não feche esta página, isso poderá gerar um erro, cancelando sua compra ou duplicando a cobrança!',
    },
    progress: {
      stepText: 'Passo 4 de 10',
      percentage: 72,
    },
    headline: 'Não compre sua primeira miçanga sem ver isso',
    underlinedWord: 'caro',
    introParagraphs: [
      'Seu acesso já está garantido. E como você ainda vai fazer sua primeira compra de material, eu preciso te alertar de uma coisa antes que você jogue dinheiro fora.',
      'A maioria das iniciantes compra no Shopee ou na lojinha do bairro e paga R$15 num pacote que custa R$4 no atacado. O brinco fica opaco, desbota e a cliente reclama.',
      'As artesãs que cobram R$80, R$150 por par compram de fornecedores que ninguém divulga. Miçanga de vidro de verdade, cristal legítimo, ferragem que não escurece — tudo por preço de atacado, mesmo comprando pouca quantidade.',
      'Eu levei meses testando até montar essa lista. Agora você pode ter acesso direto.',
    ],
    featuresTitle: 'O que você recebe:',
    features: [
      '12 fornecedores de miçanga com links diretos e cupom de desconto',
      '5 fornecedores internacionais com frete barato pro Brasil',
      'Tabela de preço por grama pra você comparar antes de comprar',
      'Quais miçangas comprar de cada um (vidro, cristal, acrílico, pedra)',
      'Contato direto de 3 fornecedores que dão desconto pra artesã',
      'Acesso imediato',
    ],
    concludingParagraphs: [
      'Com essa lista, o custo do seu brinco cai de R$8 pra R$3. E a qualidade sobe.',
    ],
    pricing: {
      oldPrice: 'De R$37,00',
      price: 'R$14,90',
      billingText: 'pagamento único',
      numericPrice: 14.9,
    },
    ctaText: 'SIM, QUERO O KIT DE PRIMEIRA COMPRA',
    declineText: 'Prefiro comprar material no chute e arriscar errar',
    footerGuarantee: 'Compra segura · Garantia de 7 dias · Acesso no mesmo e-mail',
    nextStepOnAccept: 'up5',
    nextStepOnDecline: 'down4',
  },

  // ==========================================
  // DOWNSELL UP4
  // ==========================================
  {
    id: 'down4',
    pageNumber: 4,
    totalUpsells: 10,
    name: 'DOWNSELL UP4 — Mapa de Fornecedores Secretos',
    shortName: 'Downsell Fornecedores',
    type: 'downsell',
    urgency: {
      title: 'ÚLTIMA CHANCE',
      text: 'Não feche esta página, isso poderá gerar um erro, cancelando sua compra!',
    },
    progress: {
      stepText: 'Passo 4 de 10',
      percentage: 74,
    },
    headline: 'Essa lista se paga na primeira compra de material',
    underlinedWord: 'se paga',
    introParagraphs: [
      'Se você clicou em não, tudo bem. Mas antes de você ir no Shopee comprar sua primeira miçanga, pensa nisso:',
      'Mas pensa assim: se você economizar R$5 em cada compra de material, em duas compras você já lucrou. Essa lista não é um gasto, é uma economia.',
      'Vou cortar pela metade.',
    ],
    highlightBadge: '50% DE DESCONTO',
    features: [],
    pricing: {
      oldPrice: 'De R$14,90',
      price: 'R$7,50',
      billingText: 'pagamento único',
      numericPrice: 7.5,
    },
    ctaText: 'SIM, QUERO POR R$7,50',
    declineText: 'Eu não quero a oferta',
    footerGuarantee: 'Compra segura · Garantia de 7 dias · Acesso no mesmo e-mail',
    nextStepOnAccept: 'up5',
    nextStepOnDecline: 'up5',
  },

  // ==========================================
  // UPSELL 5
  // ==========================================
  {
    id: 'up5',
    pageNumber: 5,
    totalUpsells: 10,
    name: 'UPSELL 5 — Coleção Infantil: 30 Brincos Para Meninas',
    shortName: 'Coleção Infantil',
    type: 'upsell',
    urgency: {
      title: 'URGENTE!!',
      text: 'Não feche esta página, isso poderá gerar um erro, cancelando sua compra ou duplicando a cobrança!',
    },
    progress: {
      stepText: 'Passo 5 de 10',
      percentage: 78,
    },
    headline: 'Os 30 projetos que toda aluna me pede na primeira semana',
    underlinedWord: '30 projetos',
    introParagraphs: [
      'Você acabou de garantir os 100 projetos de brincos. Mas tem uma pergunta que toda aluna me faz logo nos primeiros dias: “Cah, tem brinco infantil?”',
      'E faz sentido. Se você tem filha, sobrinha ou afilhada, já sabe que elas amam brinco colorido. E se você quer vender, brinco infantil é o que as mães mais pedem o ano inteiro.',
      'Unicórnio, arco-íris, borboleta, fruta, bichinho, sereia. Pequeno, colorido e leve. São os modelos que mais encantam — e os mais rápidos de fazer, porque usam metade da miçanga de um brinco adulto.',
      'O material custa menos de R$3 por par e você faz em 20 minutos. Perfeito pra quem tá começando e quer praticar com projetos rápidos e fáceis.',
    ],
    featuresTitle: 'O que você recebe:',
    features: [
      '30 projetos de brincos infantis com gráfico e passo a passo',
      'Temas: unicórnio, sereia, arco-íris, frutas, bichinhos, flores, princesa',
      'Tamanhos ajustados pra orelha de criança (mais leve e menor)',
      'Dica de ferragem hipoalergênica pra não dar alergia',
      'Lista de materiais específicos pra linha infantil',
      'Acesso imediato',
    ],
    concludingParagraphs: [
      'São 30 projetos a mais pra você praticar, presentear e, quando estiver pronta, vender.',
    ],
    pricing: {
      oldPrice: 'De R$47,00',
      price: 'R$19,90',
      billingText: 'à vista no Pix ou em até 2x no cartão',
      numericPrice: 19.9,
    },
    ctaText: 'SIM, QUERO A COLEÇÃO INFANTIL',
    declineText: 'Prefiro ficar sem os 30 projetos infantis',
    footerGuarantee: 'Compra segura · Garantia de 7 dias · Acesso no mesmo e-mail',
    nextStepOnAccept: 'up6',
    nextStepOnDecline: 'down5',
  },

  // ==========================================
  // DOWNSELL UP5
  // ==========================================
  {
    id: 'down5',
    pageNumber: 5,
    totalUpsells: 10,
    name: 'DOWNSELL UP5 — Coleção Infantil',
    shortName: 'Downsell Infantil',
    type: 'downsell',
    urgency: {
      title: 'ÚLTIMA CHANCE',
      text: 'Não feche esta página, isso poderá gerar um erro, cancelando sua compra!',
    },
    progress: {
      stepText: 'Passo 5 de 10',
      percentage: 80,
    },
    headline: 'Menos que um brinco infantil pronto na loja',
    underlinedWord: 'Menos',
    introParagraphs: [
      'Um brinco de unicórnio numa lojinha custa R$25. Aqui você leva 30 projetos por menos que isso. E faz quantos quiser, pra quantas crianças quiser.',
    ],
    highlightBadge: '50% DE DESCONTO',
    features: [],
    pricing: {
      oldPrice: 'De R$19,90',
      price: 'R$9,90',
      billingText: 'à vista no Pix',
      numericPrice: 9.9,
    },
    ctaText: 'SIM, QUERO POR R$9,90',
    declineText: 'Eu não quero a oferta',
    footerGuarantee: 'Compra segura · Garantia de 7 dias · Acesso no mesmo e-mail',
    nextStepOnAccept: 'up6',
    nextStepOnDecline: 'up6',
  },

  // ==========================================
  // UPSELL 6
  // ==========================================
  {
    id: 'up6',
    pageNumber: 6,
    totalUpsells: 10,
    name: 'UPSELL 6 — Catálogo de Vendas no WhatsApp',
    shortName: 'Catálogo de Vendas',
    type: 'upsell',
    urgency: {
      title: 'URGENTE!!',
      text: 'Não feche esta página, isso poderá gerar um erro, cancelando sua compra ou duplicando a cobrança!',
    },
    progress: {
      stepText: 'Passo 6 de 10',
      percentage: 82,
    },
    headline: 'Quando alguém te perguntar "quanto custa?", você vai saber responder',
    underlinedWord: 'quanto custa',
    introParagraphs: [
      'Você vai fazer seus primeiros brincos. Vai ficar orgulhosa. Vai postar uma foto no status do WhatsApp. E aí alguém vai responder: “Lindo! Quanto custa?”',
      'E é nessa hora que a maioria trava. Manda 20 fotos soltas, a pessoa se perde, pergunta preço de um que você nem lembra qual é, e a venda morre.',
      'O Catálogo de Vendas resolve isso. É uma apresentação pronta que você manda em um clique. A pessoa abre, vê os brincos organizados com preço, escolhe e te manda o PIX. Sem confusão, sem perder venda.',
    ],
    featuresTitle: 'O que você recebe:',
    features: [
      '5 modelos de catálogo prontos pra editar no celular (app gratuito)',
      'Roteiro exato do que responder quando a pessoa chama',
      'Script de fechamento: do “quanto custa?” ao “me manda o PIX” em 5 mensagens',
      'Modelo de mensagem pra pessoa que viu e sumiu',
      'Como organizar seus brincos por coleção no WhatsApp',
      'Acesso imediato',
    ],
    concludingParagraphs: [
      'Você não precisa de site, não precisa de loja, não precisa de Instagram com mil seguidores. Só do WhatsApp que você já tem no celular.',
    ],
    pricing: {
      oldPrice: 'De R$37,00',
      price: 'R$17,90',
      billingText: 'à vista no Pix ou em até 2x no cartão',
      numericPrice: 17.9,
    },
    ctaText: 'SIM, QUERO O CATÁLOGO DE VENDAS',
    declineText: 'Prefiro continuar perdendo vendas no WhatsApp',
    footerGuarantee: 'Compra segura · Garantia de 7 dias · Acesso no mesmo e-mail',
    nextStepOnAccept: 'up7',
    nextStepOnDecline: 'down6',
  },

  // ==========================================
  // DOWNSELL UP6
  // ==========================================
  {
    id: 'down6',
    pageNumber: 6,
    totalUpsells: 10,
    name: 'DOWNSELL UP6 — Catálogo de Vendas no WhatsApp',
    shortName: 'Downsell Catálogo',
    type: 'downsell',
    urgency: {
      title: 'ÚLTIMA CHANCE',
      text: 'Não feche esta página, isso poderá gerar um erro, cancelando sua compra!',
    },
    progress: {
      stepText: 'Passo 6 de 10',
      percentage: 83,
    },
    headline: 'Uma única venda pelo WhatsApp já paga esse catálogo',
    underlinedWord: 'uma única venda',
    introParagraphs: [
      'Se você vender um par de brinco a R$35 usando o catálogo, já lucrou quase o dobro do que pagou. E vai usar pra sempre.',
    ],
    highlightBadge: '50% DE DESCONTO',
    features: [],
    pricing: {
      oldPrice: 'De R$17,90',
      price: 'R$8,90',
      billingText: 'à vista no Pix',
      numericPrice: 8.9,
    },
    ctaText: 'SIM, QUERO POR R$8,90',
    declineText: 'Eu não quero a oferta',
    footerGuarantee: 'Compra segura · Garantia de 7 dias · Acesso no mesmo e-mail',
    nextStepOnAccept: 'up7',
    nextStepOnDecline: 'up7',
  },

  // ==========================================
  // UPSELL 7
  // ==========================================
  {
    id: 'up7',
    pageNumber: 7,
    totalUpsells: 10,
    name: 'UPSELL 7 — Coleção Sazonal: Projetos Para Cada Data do Ano',
    shortName: 'Coleção Sazonal',
    type: 'upsell',
    urgency: {
      title: 'URGENTE!!',
      text: 'Não feche esta página, isso poderá gerar um erro, cancelando sua compra ou duplicando a cobrança!',
    },
    progress: {
      stepText: 'Passo 7 de 10',
      percentage: 86,
    },
    headline: 'Os projetos certos pra cada mês do ano (pra você nunca ficar sem ideia)',
    underlinedWord: 'cada mês',
    introParagraphs: [
      'Você tem 100 projetos. Mas daqui a 2 meses vai chegar o Natal, e você vai pensar: “será que tenho algum brinco de Natal?”',
      'E se não tiver, vai perder a época que mais vende no ano.',
      'A Coleção Sazonal te entrega os projetos certos pra cada data: Carnaval, Páscoa, Dia das Mães, São João, Namorados, Halloween, Natal e Réveillon. Você faz na época certa e vende quando todo mundo tá procurando.',
    ],
    featuresTitle: 'O que você recebe:',
    features: [
      '40 projetos temáticos de janeiro a dezembro',
      'Cada um com gráfico, legenda de cores e passo a passo',
      'Calendário de quando começar a fazer cada tema (pra não fazer em cima da hora)',
      'Dicas de quais cores e materiais usar em cada época',
      'Acesso imediato',
    ],
    concludingParagraphs: [
      'Quem tem o projeto certo na data certa não precisa de anúncio pago. A procura já existe, você só precisa ter o brinco pronto.',
    ],
    pricing: {
      oldPrice: 'De R$47,00',
      price: 'R$24,90',
      billingText: 'à vista no Pix ou em até 3x no cartão',
      numericPrice: 24.9,
    },
    ctaText: 'SIM, QUERO A COLEÇÃO SAZONAL',
    declineText: 'Prefiro não ter projeto nas datas que mais vendem',
    footerGuarantee: 'Compra segura · Garantia de 7 dias · Acesso no mesmo e-mail',
    nextStepOnAccept: 'up8',
    nextStepOnDecline: 'down7',
  },

  // ==========================================
  // DOWNSELL UP7
  // ==========================================
  {
    id: 'down7',
    pageNumber: 7,
    totalUpsells: 10,
    name: 'DOWNSELL UP7 — Coleção Sazonal',
    shortName: 'Downsell Sazonal',
    type: 'downsell',
    urgency: {
      title: 'ÚLTIMA CHANCE',
      text: 'Não feche esta página, isso poderá gerar um erro, cancelando sua compra!',
    },
    progress: {
      stepText: 'Passo 7 de 10',
      percentage: 87,
    },
    headline: 'Na próxima data comemorativa, você vai lembrar que poderia ter 40 projetos prontos',
    underlinedWord: '40 projetos prontos',
    introParagraphs: [
      'E vai ser tarde pra fazer em cima da hora. Vou cortar pela metade pra você já ter tudo organizado.',
    ],
    highlightBadge: '50% DE DESCONTO',
    features: [],
    pricing: {
      oldPrice: 'De R$24,90',
      price: 'R$12,50',
      billingText: 'à vista no Pix',
      numericPrice: 12.5,
    },
    ctaText: 'SIM, QUERO POR R$12,50',
    declineText: 'Eu não quero a oferta',
    footerGuarantee: 'Compra segura · Garantia de 7 dias · Acesso no mesmo e-mail',
    nextStepOnAccept: 'up8',
    nextStepOnDecline: 'up8',
  },

  // ==========================================
  // UPSELL 8
  // ==========================================
  {
    id: 'up8',
    pageNumber: 8,
    totalUpsells: 10,
    name: 'UPSELL 8 — Sistema de Embalagem Premium',
    shortName: 'Embalagem Premium',
    type: 'upsell',
    urgency: {
      title: 'URGENTE!!',
      text: 'Não feche esta página, isso poderá gerar um erro, cancelando sua compra ou duplicando a cobrança!',
    },
    progress: {
      stepText: 'Passo 8 de 10',
      percentage: 89,
    },
    headline: 'O detalhe que faz seu brinco parecer de loja (e não caseiro)',
    underlinedWord: 'de loja',
    introParagraphs: [
      'Você vai fazer um brinco lindo. Vai ficar perfeito, igual ao do gráfico. Mas quando entregar numa sacolinha plástica, a pessoa vai pensar que vale R$15.',
      'O mesmo brinco numa cartela bonita com tag dourada? A pessoa pensa que vale R$80.',
      'A diferença não é o brinco. É a embalagem. E é a embalagem que faz a pessoa pagar mais caro e voltar pra comprar de novo.',
    ],
    featuresTitle: 'O que você recebe:',
    features: [
      '8 modelos de cartela prontos pra imprimir no celular ou na gráfica',
      '5 modelos de tag com espaço pra seu nome e preço',
      '3 cartões de agradecimento pra colocar dentro do pacote',
      'Guia passo a passo de como embalar: saquinho, caixa, laço',
      'Lista de onde comprar embalagem barata (com links)',
      'Acesso imediato',
    ],
    concludingParagraphs: [
      'O brinco é o mesmo. A embalagem é o que dobra o preço.',
    ],
    pricing: {
      oldPrice: 'De R$47,00',
      price: 'R$22,90',
      billingText: 'à vista no Pix ou em até 2x no cartão',
      numericPrice: 22.9,
    },
    ctaText: 'SIM, QUERO A EMBALAGEM PREMIUM',
    declineText: 'Prefiro que meu brinco pareça caseiro',
    footerGuarantee: 'Compra segura · Garantia de 7 dias · Acesso no mesmo e-mail',
    nextStepOnAccept: 'up9',
    nextStepOnDecline: 'down8',
  },

  // ==========================================
  // DOWNSELL UP8
  // ==========================================
  {
    id: 'down8',
    pageNumber: 8,
    totalUpsells: 10,
    name: 'DOWNSELL UP8 — Sistema de Embalagem Premium',
    shortName: 'Downsell Embalagem',
    type: 'downsell',
    urgency: {
      title: 'ÚLTIMA CHANCE',
      text: 'Não feche esta página, isso poderá gerar um erro, cancelando sua compra!',
    },
    progress: {
      stepText: 'Passo 8 de 10',
      percentage: 90,
    },
    headline: 'Menos que um pacote de saquinho de organza',
    underlinedWord: 'Menos',
    introParagraphs: [
      'A embalagem certa faz seu brinco de R$25 parecer de R$80. Uma única venda com embalagem premium já paga esse investimento.',
    ],
    highlightBadge: '50% DE DESCONTO',
    features: [],
    pricing: {
      oldPrice: 'De R$22,90',
      price: 'R$11,50',
      billingText: 'à vista no Pix',
      numericPrice: 11.5,
    },
    ctaText: 'SIM, QUERO POR R$11,50',
    declineText: 'Eu não quero a oferta',
    footerGuarantee: 'Compra segura · Garantia de 7 dias · Acesso no mesmo e-mail',
    nextStepOnAccept: 'up9',
    nextStepOnDecline: 'up9',
  },

  // ==========================================
  // UPSELL 9
  // ==========================================
  {
    id: 'up9',
    pageNumber: 9,
    totalUpsells: 10,
    name: 'UPSELL 9 — Sistema de Produção em Série',
    shortName: 'Produção em Série',
    type: 'upsell',
    urgency: {
      title: 'URGENTE!!',
      text: 'Não feche esta página, isso poderá gerar um erro, cancelando sua compra ou duplicando a cobrança!',
    },
    progress: {
      stepText: 'Passo 9 de 10',
      percentage: 93,
    },
    headline: 'Como fazer 10 pares no tempo que você leva pra fazer 1',
    underlinedWord: '10 pares',
    introParagraphs: [
      'Quando você começar a fazer brincos, vai levar uns 40 minutos por par. E tá tudo bem, é normal no começo.',
      'Mas quando os pedidos começarem a chegar — e eles vão chegar — você vai precisar fazer mais rápido. Senão vai passar o dia inteiro fazendo brinco e não vai ter tempo pra mais nada.',
      'O Sistema de Produção em Série te ensina a organizar sua mesa, seu material e seu tempo pra fazer 10 pares no tempo que hoje você faz 1. Sem perder qualidade.',
    ],
    featuresTitle: 'O que você recebe:',
    features: [
      'Layout de mesa de produção (onde colocar cada coisa pra não perder tempo)',
      'Método de separação de miçangas por lote (10 pares de uma vez)',
      'Cronômetro de produção: quanto tempo cada etapa deve levar',
      'Checklist de qualidade antes de embalar',
      'Planilha simples de controle de pedidos',
      'Acesso imediato',
    ],
    concludingParagraphs: [
      'Se você quer fazer brinco como hobby, não precisa disso agora. Mas se quer vender e ter renda de verdade, esse sistema é o que separa a artesã de hobby da artesã de renda.',
    ],
    pricing: {
      oldPrice: 'De R$57,00',
      price: 'R$29,90',
      billingText: 'à vista no Pix ou em até 3x no cartão',
      numericPrice: 29.9,
    },
    ctaText: 'SIM, QUERO PRODUZIR MAIS RÁPIDO',
    declineText: 'Prefiro fazer 1 par por dia em vez de 10',
    footerGuarantee: 'Compra segura · Garantia de 7 dias · Acesso no mesmo e-mail',
    nextStepOnAccept: 'up10',
    nextStepOnDecline: 'down9',
  },

  // ==========================================
  // DOWNSELL UP9
  // ==========================================
  {
    id: 'down9',
    pageNumber: 9,
    totalUpsells: 10,
    name: 'DOWNSELL UP9 — Sistema de Produção em Série',
    shortName: 'Downsell Produção',
    type: 'downsell',
    urgency: {
      title: 'ÚLTIMA CHANCE',
      text: 'Não feche esta página, isso poderá gerar um erro, cancelando sua compra!',
    },
    progress: {
      stepText: 'Passo 9 de 10',
      percentage: 94,
    },
    headline: '7 pares a mais por semana = R$350 a mais no bolso',
    underlinedWord: '7 pares a mais',
    introParagraphs: [
      'Se esse sistema te ajudar a fazer 1 par a mais por dia, em uma semana são 7 pares. A R$50 cada um, são R$350 a mais. E esse sistema custa menos que um par.',
    ],
    highlightBadge: '50% DE DESCONTO',
    features: [],
    pricing: {
      oldPrice: 'De R$29,90',
      price: 'R$14,90',
      billingText: 'à vista no Pix',
      numericPrice: 14.9,
    },
    ctaText: 'SIM, QUERO POR R$14,90',
    declineText: 'Eu não quero a oferta',
    footerGuarantee: 'Compra segura · Garantia de 7 dias · Acesso no mesmo e-mail',
    nextStepOnAccept: 'up10',
    nextStepOnDecline: 'up10',
  },

  // ==========================================
  // UPSELL 10
  // ==========================================
  {
    id: 'up10',
    pageNumber: 10,
    totalUpsells: 10,
    name: 'UPSELL 10 — Linha de Luxo: Brincos que Parecem Joia',
    shortName: 'Linha de Luxo',
    type: 'upsell',
    urgency: {
      title: 'URGENTE!!',
      text: 'Não feche esta página, isso poderá gerar um erro, cancelando sua compra ou duplicando a cobrança!',
    },
    progress: {
      stepText: 'Passo 10 de 10',
      percentage: 96,
    },
    headline: 'O brinco que a pessoa pega e diz "isso é miçanga? Parece joia!"',
    underlinedWord: 'miçanga',
    introParagraphs: [
      'Você já viu aqueles brincos de miçanga que parecem joia de verdade? Aqueles que brilham, que têm acabamento perfeito, que a pessoa olha de perto e não acredita que é miçanga?',
      'A diferença não é o gráfico. É a técnica de acabamento. O arremate invisível. A ferragem banhada a ouro. O cristal combinado com miçanga de vidro que dá brilho de pedra preciosa.',
      'A Linha de Luxo te ensina exatamente essas técnicas. São 20 projetos premium que você faz com menos de R$15 de material e vende por R$120, R$150, R$180.',
    ],
    featuresTitle: 'O que você recebe:',
    features: [
      '20 projetos premium com gráfico e passo a passo avançado',
      'Técnica de arremate invisível (o fio some dentro da peça)',
      'Como combinar cristal, pérola e miçanga no mesmo brinco',
      'Guia de ferragem premium: banho de ouro, aço cirúrgico, prata 925',
      'Como fotografar brinco de luxo com o celular',
      'Acesso imediato',
    ],
    concludingParagraphs: [
      'O material continua barato. Mas o brinco passa a ser vendido como joia. É aqui que o lucro de verdade mora.',
    ],
    pricing: {
      oldPrice: 'De R$77,00',
      price: 'R$37,00',
      billingText: 'à vista no Pix ou em até 3x no cartão',
      numericPrice: 37.0,
    },
    ctaText: 'SIM, QUERO A LINHA DE LUXO',
    declineText: 'Prefiro continuar vendendo brinco a R$40',
    footerGuarantee: 'Compra segura · Garantia de 7 dias · Acesso no mesmo e-mail',
    nextStepOnAccept: 'success',
    nextStepOnDecline: 'down10',
  },

  // ==========================================
  // DOWNSELL UP10
  // ==========================================
  {
    id: 'down10',
    pageNumber: 10,
    totalUpsells: 10,
    name: 'DOWNSELL UP10 — Linha de Luxo: Brincos que Parecem Joia',
    shortName: 'Downsell Luxo',
    type: 'downsell',
    urgency: {
      title: 'ÚLTIMA CHANCE',
      text: 'Não feche esta página, isso poderá gerar um erro, cancelando sua compra!',
    },
    progress: {
      stepText: 'Passo 10 de 10',
      percentage: 97,
    },
    headline: 'Um único brinco de luxo paga esse investimento 4x',
    underlinedWord: '4x',
    introParagraphs: [
      'O material do brinco de luxo custa R$15. Você vende por R$150. Lucro de R$135 num único par. Esse investimento se paga no primeiro brinco que você vender.',
    ],
    highlightBadge: '50% DE DESCONTO',
    features: [],
    pricing: {
      oldPrice: 'De R$37,00',
      price: 'R$18,50',
      billingText: 'à vista no Pix',
      numericPrice: 18.5,
    },
    ctaText: 'SIM, QUERO POR R$18,50',
    declineText: 'Eu não quero a oferta',
    footerGuarantee: 'Compra segura · Garantia de 7 dias · Acesso no mesmo e-mail',
    nextStepOnAccept: 'success',
    nextStepOnDecline: 'combo',
  },

  // ==========================================
  // COMBO FINAL — TELA DIFERENTE
  // ==========================================
  {
    id: 'combo',
    pageNumber: 11,
    totalUpsells: 11,
    name: 'COMBO FINAL — Todos os 7 Complementos',
    shortName: 'Combo Final',
    type: 'combo',
    urgency: {
      title: '⚠️ ÚLTIMA OPORTUNIDADE',
      text: 'Esta página vai desaparecer em instantes. Não atualize nem feche.',
    },
    progress: {
      stepText: 'Passo final',
      percentage: 100,
    },
    headline: 'Espera. Antes de eu liberar o seu acesso, deixa eu te falar uma coisa.',
    underlinedWord: 'uma coisa',
    introParagraphs: [
      'Você acabou de dizer não pra todos os complementos. E eu entendo. Você não queria gastar mais do que planejou. Faz total sentido.',
      'Mas agora eu preciso ser honesta com você.',
      'Os 100 projetos que você comprou são incríveis. Mas sozinhos, eles são só o começo.',
      'Daqui a 2 semanas, você vai querer fazer brinco infantil e não vai ter o projeto. Daqui a 1 mês, alguém vai te perguntar “quanto custa?” e você não vai ter o catálogo. Daqui a 2 meses, vai chegar uma data comemorativa e você não vai ter o brinco certo. Daqui a 3 meses, você vai vender um brinco lindo num saquinho plástico e a pessoa vai pagar R$20 em vez de R$60.',
      'Cada um desses complementos resolve uma parte do caminho. E juntos, eles são o que separa quem faz brinco de hobby de quem vive de brinco.',
      'Eu não quero que você descubra isso daqui a 3 meses, depois de perder vendas e gastar dinheiro à toa.',
      'Por isso eu fiz algo que eu nunca fiz antes.',
      'Eu peguei todos os 7 complementos — os mesmos que você acabou de recusar individualmente — e juntei tudo num único pacote.',
    ],
    featuresTitle: 'O que entra no Combo Completo:',
    comboItems: [
      { name: 'Mapa de Fornecedores Secretos', price: 'R$14,90' },
      { name: 'Coleção Infantil — 30 projetos', price: 'R$19,90' },
      { name: 'Catálogo de Vendas no WhatsApp', price: 'R$17,90' },
      { name: 'Coleção Sazonal — 40 projetos', price: 'R$24,90' },
      { name: 'Sistema de Embalagem Premium', price: 'R$22,90' },
      { name: 'Sistema de Produção em Série', price: 'R$29,90' },
      { name: 'Linha de Luxo — 20 projetos premium', price: 'R$37,00' },
    ],
    totalSeparatedValue: 'R$167,40',
    concludingParagraphs: [
      'Mas como você é minha aluna e eu prefiro que você tenha tudo do que ficar travada no meio do caminho, eu vou fazer uma oferta única.',
      'Nesta página. Agora. Depois ela some.',
    ],
    features: [],
    pricing: {
      oldPrice: 'De R$167,40 por',
      price: 'R$77,00',
      billingText: 'pagamento único · acesso vitalício · sem mensalidade',
      savingsText: 'Você economiza R$90,40 comprando tudo junto.',
      numericPrice: 77.0,
    },
    ctaText: '🔥 SIM, QUERO TUDO POR R$77',
    declineText: 'Não, quero ficar só com os 100 projetos',
    footerGuarantee: '🔒 Compra segura · 🛡️ Garantia de 7 dias · ⚡ Acesso imediato no mesmo e-mail',
    timerDurationSeconds: 300,
    nextStepOnAccept: 'success',
    nextStepOnDecline: 'success',
  },
];
