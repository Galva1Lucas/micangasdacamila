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
    headline: 'Você tá pagando caro em miçanga sem saber',
    underlinedWord: 'caro',
    introParagraphs: [
      'Seu acesso já está garantido. Mas tem uma coisa que pode fazer você gastar o triplo do que deveria em material.',
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
    ctaText: 'SIM, QUERO O MAPA DE FORNECEDORES',
    declineText: 'Prefiro continuar comprando onde compro',
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
      'Se você clicou em não, provavelmente é porque já gastou mais do que planejou hoje. Eu entendo.',
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
    ctaText: 'SIM, QUERO',
    declineText: 'Não, pode seguir',
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
    headline: 'O nicho que vende sozinho o ano inteiro',
    underlinedWord: 'vende sozinho',
    introParagraphs: [
      'Tem um público que compra brinco de miçanga sem reclamar de preço, não liga pra crise e volta todo mês: mães de meninas de 3 a 12 anos.',
      'Unicórnio, arco-íris, borboleta, fruta, bichinho, sereia. Pequeno, colorido e leve. A mãe compra um, a filha ama, e volta pra comprar cinco.',
      'E o melhor: brinco infantil usa metade da miçanga de um brinco adulto. O material custa R$2. Você vende por R$35. A margem é absurda.',
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
      'É o nicho mais fácil de vender porque a decisão é emocional. A mãe vê, a filha aponta, e a mãe compra.',
    ],
    pricing: {
      oldPrice: 'De R$47,00',
      price: 'R$19,90',
      billingText: 'pagamento único',
      numericPrice: 19.9,
    },
    ctaText: 'SIM, QUERO A COLEÇÃO INFANTIL',
    declineText: 'Prefiro fazer só brinco adulto',
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
    headline: 'O material do brinco infantil é tão barato que essa coleção se paga na segunda venda',
    underlinedWord: 'tão barato',
    introParagraphs: [
      'Se você fizer dois pares de brinco de unicórnio e vender, já lucrou mais do que pagou nessa coleção. Vou cortar pela metade.',
    ],
    highlightBadge: '50% DE DESCONTO',
    features: [],
    pricing: {
      oldPrice: 'De R$19,90',
      price: 'R$9,90',
      billingText: 'pagamento único',
      numericPrice: 9.9,
    },
    ctaText: 'SIM, QUERO',
    declineText: 'Não, pode seguir',
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
    headline: 'A forma mais rápida de vender sem depender do Instagram',
    underlinedWord: 'mais rápida',
    introParagraphs: [
      'Quando a cliente chama no WhatsApp, o que você faz? Manda 47 fotos soltas, ela se perde, pergunta "qual o preço daquele azul?", você demora pra responder, e ela some.',
      'O Catálogo de Vendas organiza seus brincos numa apresentação profissional que você manda em um clique. A cliente abre, escolhe e pede. Sem confusão, sem "mostra mais", sem perder venda por demora.',
    ],
    featuresTitle: 'O que você recebe:',
    features: [
      '5 templates de catálogo digital prontos pra editar no Canva (gratuito)',
      'Roteiro de atendimento: o que responder quando a cliente chama',
      'Script de fechamento: do "quanto custa?" ao "me manda o PIX"',
      'Como organizar seus brincos por coleção dentro do WhatsApp Business',
      'Modelo de mensagem de follow-up pra cliente que sumiu',
      'Acesso imediato',
    ],
    concludingParagraphs: [
      'Você não precisa de site. Não precisa de loja virtual. Só precisa do WhatsApp e desse catálogo.',
    ],
    pricing: {
      oldPrice: 'De R$37,00',
      price: 'R$17,90',
      billingText: 'pagamento único',
      numericPrice: 17.9,
    },
    ctaText: 'SIM, QUERO O CATÁLOGO DE VENDAS',
    declineText: 'Prefiro vender pelo Instagram',
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
    headline: 'Esse catálogo se paga na primeira venda que você fechar por ele',
    underlinedWord: 'primeira venda',
    introParagraphs: [
      'Uma única venda de brinco pelo WhatsApp já paga essa ferramenta. E você vai usar pra sempre. Vou cortar pela metade.',
    ],
    highlightBadge: '50% DE DESCONTO',
    features: [],
    pricing: {
      oldPrice: 'De R$17,90',
      price: 'R$8,90',
      billingText: 'pagamento único',
      numericPrice: 8.9,
    },
    ctaText: 'SIM, QUERO',
    declineText: 'Não, pode seguir',
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
    headline: 'Por que tem mês que vende muito e mês que não vende nada?',
    underlinedWord: 'não vende nada',
    introParagraphs: [
      'Não é o brinco. É o tema.',
      'No Dia das Mães, brinco floral vende 3x mais. No São João, brinco de fogueira e bandeirinha esgota. No Natal, brinco de estrela e neve sai como água. No Carnaval, brinco colorido e de máscara é o que todo mundo quer.',
      'A Coleção Sazonal te entrega os projetos certos pra cada data, pra você vender na época certa — em vez de postar brinco de Natal em março e ninguém comprar.',
    ],
    featuresTitle: 'O que você recebe:',
    features: [
      '40 projetos temáticos organizados de janeiro a dezembro',
      'Carnaval, Páscoa, Dia das Mães, Namorados, São João, Halloween, Natal e mais',
      'Cada projeto com gráfico, legenda de cores e passo a passo',
      'Calendário de postagem sugerido (quando começar a postar cada tema)',
      'Acesso imediato',
    ],
    concludingParagraphs: [
      'Quem vende na data certa não precisa de anúncio pago. A procura já existe.',
    ],
    pricing: {
      oldPrice: 'De R$47,00',
      price: 'R$24,90',
      billingText: 'pagamento único',
      numericPrice: 24.9,
    },
    ctaText: 'SIM, QUERO A COLEÇÃO SAZONAL',
    declineText: 'Prefiro fazer os mesmos modelos o ano todo',
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
    headline: 'Na próxima data comemorativa, você vai lembrar que poderia ter tido 40 projetos prontos pra vender',
    underlinedWord: '40 projetos prontos',
    introParagraphs: [
      'E vai ser tarde. Vou cortar pela metade agora pra você já ter tudo pronto quando a data chegar.',
    ],
    highlightBadge: '50% DE DESCONTO',
    features: [],
    pricing: {
      oldPrice: 'De R$24,90',
      price: 'R$12,50',
      billingText: 'pagamento único',
      numericPrice: 12.5,
    },
    ctaText: 'SIM, QUERO',
    declineText: 'Não, pode seguir',
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
    headline: 'Por que o brinco da loja vende por R$80 e o seu por R$30?',
    underlinedWord: 'R$80',
    introParagraphs: [
      'Não é a miçanga. Não é o gráfico. É a embalagem.',
      'Você já reparou que o mesmo brinco, quando tá numa cartela bonita com tag dourada e saquinho de organza, parece que custa R$100? E quando tá num saquinho ziplock, parece que custa R$15?',
      'A cliente não compra o brinco. Ela compra a experiência de abrir. E é isso que faz ela pagar mais caro e voltar pra comprar de novo.',
    ],
    featuresTitle: 'O que você recebe:',
    features: [
      '8 templates de cartela prontos pra imprimir (é só colocar o brinco)',
      '5 modelos de tag com espaço pra sua logo e preço',
      '3 layouts de cartão de agradecimento pra colocar dentro do pacote',
      'Guia de embalagem passo a passo: saquinho, caixa, laço e finalização',
      'Lista de onde comprar embalagem barata (com links)',
      'Como fazer a cliente filmar o unboxing e postar nos stories',
      'Acesso imediato',
    ],
    concludingParagraphs: [
      'O brinco é o mesmo. A embalagem é o que dobra o preço.',
    ],
    pricing: {
      oldPrice: 'De R$47,00',
      price: 'R$22,90',
      billingText: 'pagamento único',
      numericPrice: 22.9,
    },
    ctaText: 'SIM, QUERO A EMBALAGEM PREMIUM',
    declineText: 'Prefiro embalar do meu jeito',
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
      'A embalagem certa faz seu brinco de R$30 parecer de R$80. Vou cortar pela metade pra você testar na próxima venda.',
    ],
    highlightBadge: '50% DE DESCONTO',
    features: [],
    pricing: {
      oldPrice: 'De R$22,90',
      price: 'R$11,50',
      billingText: 'pagamento único',
      numericPrice: 11.5,
    },
    ctaText: 'SIM, QUERO',
    declineText: 'Não, pode seguir',
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
      'A artesã de hobby faz um brinco por vez. Senta, escolhe o modelo, separa as miçangas, faz, arremata, embala. Leva 2 horas pra um par.',
      'A artesã de renda faz 10 pares de uma vez. Ela separa todas as miçangas antes, monta em linha de produção e usa o tempo que levaria pra fazer um par pra fazer dez.',
      'O Sistema de Produção em Série te ensina exatamente como organizar sua mesa, seu material e seu tempo pra multiplicar sua produção sem perder qualidade.',
    ],
    featuresTitle: 'O que você recebe:',
    features: [
      'Layout de mesa de produção (onde colocar cada coisa pra não perder tempo)',
      'Método de separação de miçangas por lote (10 pares de uma vez)',
      'Cronômetro de produção: quanto tempo cada etapa deve levar',
      'Checklist de controle de qualidade antes de embalar',
      'Planilha simples de controle de estoque e pedidos',
      'Acesso imediato',
    ],
    concludingParagraphs: [
      'Se você quer vender, precisa produzir. E se quer lucrar, precisa produzir rápido.',
    ],
    pricing: {
      oldPrice: 'De R$57,00',
      price: 'R$29,90',
      billingText: 'pagamento único',
      numericPrice: 29.9,
    },
    ctaText: 'SIM, QUERO PRODUZIR EM SÉRIE',
    declineText: 'Prefiro fazer um por um no meu tempo',
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
    headline: 'Se esse sistema te economizar 1 hora por dia, em uma semana você já produziu 7 pares a mais',
    underlinedWord: '7 pares a mais',
    introParagraphs: [
      '7 pares a R$50 = R$350 a mais por semana. E esse sistema custa menos que um par. Vou cortar pela metade.',
    ],
    highlightBadge: '50% DE DESCONTO',
    features: [],
    pricing: {
      oldPrice: 'De R$29,90',
      price: 'R$14,90',
      billingText: 'pagamento único',
      numericPrice: 14.9,
    },
    ctaText: 'SIM, QUERO',
    declineText: 'Não, pode seguir',
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
    headline: 'O brinco que a cliente pega e diz "isso é miçanga? Parece joia de verdade"',
    underlinedWord: 'joia de verdade',
    introParagraphs: [
      'Existe um nível acima do brinco de miçanga comum. É aquele brinco que a cliente pega na mão, olha de perto e não acredita que é miçanga.',
      'A diferença não está no gráfico. Está na técnica de acabamento. O arremate invisível. A ferragem banhada a ouro. A combinação de cristal com miçanga de vidro que dá o brilho de pedra preciosa.',
      'A Linha de Luxo te ensina as técnicas que transformam um brinco de R$50 num brinco de R$180.',
    ],
    featuresTitle: 'O que você recebe:',
    features: [
      '20 projetos de brincos premium com gráfico e passo a passo avançado',
      'Técnica de arremate invisível (o fio some dentro da peça)',
      'Como combinar cristal, pérola e miçanga de vidro no mesmo brinco',
      'Guia de ferragem premium: banho de ouro, aço cirúrgico e prata 925',
      'Como fotografar brinco de luxo pra parecer de vitrine de joalheria',
      'Acesso imediato',
    ],
    concludingParagraphs: [
      'O material continua custando menos de R$15. Mas o brinco passa a ser vendido por R$150, R$180. É aqui que o lucro de verdade mora.',
    ],
    pricing: {
      oldPrice: 'De R$77,00',
      price: 'R$37,00',
      billingText: 'pagamento único',
      numericPrice: 37.0,
    },
    ctaText: 'SIM, QUERO A LINHA DE LUXO',
    declineText: 'Prefiro ficar no básico por enquanto',
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
    headline: 'Menos que uma ferragem banhada a ouro',
    underlinedWord: 'banhada a ouro',
    introParagraphs: [
      'Talvez você tenha pensado que técnica de luxo é "coisa pra quem já faz há anos". Não é. É coisa pra quem quer cobrar mais desde o começo.',
      'E como é a última página antes do combo, vou deixar pela metade.',
    ],
    highlightBadge: '50% DE DESCONTO',
    features: [],
    pricing: {
      oldPrice: 'De R$37,00',
      price: 'R$18,50',
      billingText: 'pagamento único',
      numericPrice: 18.5,
    },
    ctaText: 'SIM, QUERO',
    declineText: 'Não, pode seguir',
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
    headline: 'Espera. Antes de eu liberar o seu acesso, deixa eu te mostrar uma coisa.',
    underlinedWord: 'uma coisa',
    introParagraphs: [
      'Você acabou de recusar todos os complementos. E eu entendo. Você não queria gastar mais do que planejou. Faz total sentido.',
      'Mas agora eu preciso ser honesta com você.',
      'Os 100 projetos que você comprou são incríveis. Mas sozinhos, eles são só o começo.',
      'Sem os fornecedores certos, você vai pagar o triplo em material.\nSem a coleção infantil, você vai perder o nicho que mais vende.\nSem o catálogo de vendas, você vai continuar mandando foto solta no WhatsApp.\nSem a embalagem certa, seu brinco vai parecer caseiro e não de loja.\nSem a produção em série, você vai fazer 1 par por dia em vez de 10.\nSem a linha de luxo, você vai ficar presa no brinco de R$50 pra sempre.',
      'Cada um desses complementos resolve uma parte do caminho. E juntos, eles são o que separa a artesã que faz brinco de hobby da que vive de brinco.',
      'Eu não quero que você descubra isso daqui a 3 meses, depois de gastar dinheiro à toa com material caro e brinco encalhado.',
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
      'Mas como você é minha aluna e eu prefiro que você tenha o pacote completo do que ficar travada no meio do caminho, eu vou fazer uma oferta única.',
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
    timerDurationSeconds: 300, // 5 minutes
    nextStepOnAccept: 'success',
    nextStepOnDecline: 'success',
  },
];
