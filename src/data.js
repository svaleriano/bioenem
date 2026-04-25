import { citologia } from "./content/citologia";

export const STUDY_CONTENT = [
  {
    year: 1,
    title: "1o ano - Base da vida",
    description: "Celulas, bioquimica, microbiologia, origem da vida, botanica introdutoria e ecologia de base.",
    topics: [
      citologia,
      {
        id: "bioquimica",
        titulo: "Bioquimica",
        resumo: "Compostos organicos e inorganicos que sustentam a vida.",
        modulos: [
          {
            titulo: "Agua e sais minerais",
            teoria: "A agua atua como solvente, participa de reacoes, regula temperatura e facilita transporte de substancias. Sais minerais participam de ossos, impulsos nervosos, equilibrio osmotico e enzimas.",
            aprofundamento: "No ENEM, desidratacao, osmose, agricultura, metabolismo e saude publica costumam aparecer juntos.",
            enem: ["osmose", "desidratacao", "sais minerais", "homeostase"]
          },
          {
            titulo: "Carboidratos, lipidios e proteinas",
            teoria: "Carboidratos fornecem energia e estrutura; lipidios armazenam energia, compoem membranas e hormonos; proteinas atuam como enzimas, anticorpos, receptores e estruturas.",
            aprofundamento: "Enzimas reduzem energia de ativacao e sofrem influencia de temperatura, pH e concentracao de substrato.",
            enem: ["enzimas", "alimentacao", "membranas", "metabolismo"]
          },
          {
            titulo: "Acidos nucleicos",
            teoria: "DNA armazena informacao genetica; RNA participa da expressao genica. Nucleotideos formam esses acidos e tambem moleculas energeticas como ATP.",
            aprofundamento: "A relacao DNA, RNA e proteina e base para entender mutacoes, biotecnologia e vacinas.",
            enem: ["DNA", "RNA", "vacinas", "mutacoes"]
          }
        ]
      },
      {
        id: "microbiologia",
        titulo: "Microbiologia e virus",
        resumo: "Bacterias, virus, protozoarios, fungos e sua importancia na saude e no ambiente.",
        modulos: [
          {
            titulo: "Bacterias",
            teoria: "Bacterias sao procariontes, reproduzem-se por biparticao e podem trocar genes por conjugacao, transformacao ou transducao.",
            aprofundamento: "Uso incorreto de antibioticos seleciona bacterias resistentes, um tema frequente em provas contextualizadas.",
            enem: ["antibioticos", "resistencia bacteriana", "saneamento"]
          },
          {
            titulo: "Virus",
            teoria: "Virus sao acelulares, possuem material genetico envolto por capsideo e dependem de celulas hospedeiras para se replicar.",
            aprofundamento: "Vacinas, epidemias, imunidade coletiva e mutacoes virais conectam virus a saude publica.",
            enem: ["vacinas", "epidemias", "imunidade", "material genetico"]
          },
          {
            titulo: "Fungos e protozoarios",
            teoria: "Fungos atuam como decompositores, fermentadores e causadores de micoses. Protozoarios podem ser de vida livre ou parasitas.",
            aprofundamento: "Doencas como malaria, Chagas e leishmaniose aparecem associadas a vetores, ciclos e prevencao.",
            enem: ["vetores", "parasitoses", "decomposicao", "fermentacao"]
          }
        ]
      },
      {
        id: "botanica-intro",
        titulo: "Botanica introdutoria",
        resumo: "Grupos vegetais, tecidos, transporte e reproducao das plantas.",
        modulos: [
          {
            titulo: "Evolucao dos grupos vegetais",
            teoria: "Briofitas dependem de agua para reproducao e nao possuem vasos condutores. Pteridofitas possuem vasos. Gimnospermas formam sementes. Angiospermas formam flores e frutos.",
            aprofundamento: "A conquista do ambiente terrestre envolve cuticula, vasos condutores, sementes, grao de polen, flor e fruto.",
            enem: ["sementes", "frutos", "polinizacao", "adaptacao terrestre"]
          },
          {
            titulo: "Transporte vegetal",
            teoria: "Xilema conduz seiva bruta; floema conduz seiva elaborada. Transpiracao, coesao, adesao e pressao radicular ajudam a explicar a subida da agua.",
            aprofundamento: "Agricultura, seca, estomatos e produtividade sao caminhos comuns para o ENEM cobrar o tema.",
            enem: ["xilema", "floema", "estomatos", "transpiracao"]
          }
        ]
      }
    ]
  },
  {
    year: 2,
    title: "2o ano - Hereditariedade e organismos",
    description: "Genetica, evolucao, zoologia, fisiologia humana, imunologia e reproducao.",
    topics: [
      {
        id: "genetica",
        titulo: "Genetica",
        resumo: "Hereditariedade, DNA, leis de Mendel, heredogramas e biotecnologia.",
        modulos: [
          {
            titulo: "Conceitos basicos",
            teoria: "Gene e um trecho de DNA relacionado a uma caracteristica. Alelos sao variantes de um gene. Genotipo e a composicao genetica; fenotipo e a caracteristica observavel influenciada por genes e ambiente.",
            aprofundamento: "Dominancia completa, codominancia, dominancia incompleta, alelos multiplos e heranca ligada ao sexo ajudam a resolver problemas de cruzamento.",
            enem: ["genotipo", "fenotipo", "heredograma", "probabilidade"]
          },
          {
            titulo: "Mendel e alem de Mendel",
            teoria: "A primeira lei trata da segregacao dos alelos; a segunda, da segregacao independente de genes em cromossomos diferentes.",
            aprofundamento: "O ENEM prefere interpretar dados, familias e contextos de saude a cobrar cruzamentos mecanicos isolados.",
            enem: ["Mendel", "grupos sanguineos", "heranca ligada ao sexo"]
          },
          {
            titulo: "Genetica molecular",
            teoria: "Replicacao duplica DNA; transcricao produz RNA; traducao monta proteinas nos ribossomos.",
            aprofundamento: "Mutacoes podem ser neutras, prejudiciais ou vantajosas, dependendo do contexto ambiental e do efeito na proteina.",
            enem: ["expressao genica", "mutacao", "codigo genetico"]
          }
        ]
      },
      {
        id: "evolucao",
        titulo: "Evolucao",
        resumo: "Mudanca das populacoes ao longo do tempo por selecao natural e outros mecanismos.",
        modulos: [
          {
            titulo: "Selecao natural",
            teoria: "Individuos variam, parte da variacao e herdavel e o ambiente favorece certas caracteristicas. A populacao muda ao longo das geracoes.",
            aprofundamento: "Resistencia a antibioticos e inseticidas e um exemplo forte: o produto nao cria a resistencia, ele seleciona individuos ja resistentes.",
            enem: ["adaptacao", "antibioticos", "inseticidas", "variabilidade"]
          },
          {
            titulo: "Especiacao e evidencias",
            teoria: "Isolamento geografico, reprodutivo e pressao seletiva podem gerar novas especies. Fosseis, anatomia comparada, embriologia e DNA sustentam a evolucao.",
            aprofundamento: "Arvores filogeneticas mostram parentesco evolutivo, nao uma escala de progresso.",
            enem: ["fossil", "filogenia", "homologia", "ancestral comum"]
          }
        ]
      },
      {
        id: "fisiologia",
        titulo: "Fisiologia humana",
        resumo: "Funcionamento integrado dos sistemas digestorio, respiratorio, circulatorio, excretor, nervoso e endocrino.",
        modulos: [
          {
            titulo: "Digestao, circulacao e respiracao",
            teoria: "Nutrientes sao quebrados no sistema digestorio, transportados pelo sangue e usados nas celulas. O sistema respiratorio troca gases; o circulatorio distribui oxigenio, nutrientes, hormonios e residuos.",
            aprofundamento: "Exercicio fisico, anemia, altitude, tabagismo e doencas cardiovasculares aparecem em itens interdisciplinares.",
            enem: ["hemoglobina", "pressao arterial", "trocas gasosas", "nutrientes"]
          },
          {
            titulo: "Sistema nervoso e endocrino",
            teoria: "Neuronios transmitem impulsos por sinais eletricos e quimicos. Hormonios regulam crescimento, metabolismo, glicemia, reproducao e estresse.",
            aprofundamento: "Homeostase depende de feedback negativo, como no controle da glicose pela insulina e pelo glucagon.",
            enem: ["sinapse", "hormonios", "insulina", "homeostase"]
          },
          {
            titulo: "Imunologia",
            teoria: "Imunidade inata responde rapidamente; imunidade adaptativa envolve linfocitos, anticorpos e memoria imunologica.",
            aprofundamento: "Vacinas estimulam memoria imunologica sem causar a doenca em sua forma grave.",
            enem: ["vacinas", "anticorpos", "memoria imunologica", "soro"]
          }
        ]
      },
      {
        id: "zoologia",
        titulo: "Zoologia",
        resumo: "Diversidade animal, adaptacoes, ciclos de parasitas e importancia ecologica.",
        modulos: [
          {
            titulo: "Invertebrados e vertebrados",
            teoria: "Animais podem ser comparados por simetria, tecidos, celoma, segmentacao, sistema circulatorio e estrategias reprodutivas.",
            aprofundamento: "O ENEM costuma relacionar grupos animais a saude, agricultura, saneamento e equilibrio ambiental.",
            enem: ["parasitoses", "vetores", "polinizadores", "cadeias alimentares"]
          },
          {
            titulo: "Parasitologia",
            teoria: "Parasitos dependem de hospedeiros e podem ter vetores. Prevencao envolve saneamento, controle de vetores, educacao sanitaria e tratamento.",
            aprofundamento: "Entender o ciclo do parasita indica a medida preventiva correta.",
            enem: ["malaria", "Chagas", "esquistossomose", "teniase"]
          }
        ]
      }
    ]
  },
  {
    year: 3,
    title: "3o ano - ENEM e mundo real",
    description: "Ecologia, biotecnologia, saude publica, ambiente, revisao integrada e estrategia de prova.",
    topics: [
      {
        id: "ecologia",
        titulo: "Ecologia",
        resumo: "Relacoes entre seres vivos, fluxo de energia, ciclos da materia e impactos ambientais.",
        modulos: [
          {
            titulo: "Niveis ecologicos e relacoes",
            teoria: "Individuo, populacao, comunidade, ecossistema e biosfera organizam o estudo da vida. Relacoes podem ser harmonicas ou desarmonicas, intraespecificas ou interespecificas.",
            aprofundamento: "Mutualismo, parasitismo, competicao, predacao e comensalismo aparecem em graficos, textos e situacoes de manejo ambiental.",
            enem: ["mutualismo", "competicao", "predacao", "nicho ecologico"]
          },
          {
            titulo: "Energia e materia",
            teoria: "Energia flui e diminui a cada nivel trofico; materia circula em ciclos como agua, carbono, nitrogenio e fosforo.",
            aprofundamento: "Piramides ecologicas, eutrofizacao, aquecimento global e fertilizacao agricola conectam ecologia a quimica e geografia.",
            enem: ["cadeia alimentar", "ciclos biogeoquimicos", "eutrofizacao"]
          },
          {
            titulo: "Impactos ambientais",
            teoria: "Desmatamento, queimadas, poluicao, bioacumulacao, invasao biologica e perda de biodiversidade alteram ecossistemas.",
            aprofundamento: "Medidas de mitigacao devem atacar a causa do problema, nao apenas seus sintomas.",
            enem: ["bioacumulacao", "desmatamento", "mudancas climaticas", "conservacao"]
          }
        ]
      },
      {
        id: "biotecnologia",
        titulo: "Biotecnologia",
        resumo: "Uso de organismos, celulas e moleculas biologicas em saude, agricultura, industria e ambiente.",
        modulos: [
          {
            titulo: "DNA recombinante e transgenicos",
            teoria: "Tecnicas de DNA recombinante permitem inserir genes de interesse em organismos. Transgenicos podem produzir proteinas, resistir a pragas ou melhorar caracteristicas agricolas.",
            aprofundamento: "A prova pode exigir avaliar beneficios, riscos, biosseguranca, produtividade e impactos socioambientais.",
            enem: ["transgenicos", "enzimas de restricao", "plasmideos", "biosseguranca"]
          },
          {
            titulo: "PCR, testes e terapia genica",
            teoria: "PCR amplifica DNA; testes moleculares detectam sequencias geneticas; terapia genica busca corrigir ou compensar genes associados a doencas.",
            aprofundamento: "O tema aparece em diagnostico, medicina personalizada, investigacao forense e epidemias.",
            enem: ["PCR", "diagnostico", "DNA", "forense"]
          }
        ]
      },
      {
        id: "saude-publica",
        titulo: "Saude publica e ambiente",
        resumo: "Doencas, saneamento, vacinacao, epidemiologia e qualidade de vida.",
        modulos: [
          {
            titulo: "Epidemiologia",
            teoria: "Incidencia mede casos novos; prevalencia mede total de casos existentes. Vetor transmite agente infeccioso; reservatorio abriga o agente.",
            aprofundamento: "Controle de doencas depende do ciclo: eliminar criadouros, vacinar, tratar, melhorar saneamento ou reduzir contato com vetores.",
            enem: ["incidencia", "prevalencia", "vetores", "saneamento"]
          },
          {
            titulo: "SUS, prevencao e vacinas",
            teoria: "Prevencao primaria evita o surgimento da doenca; secundaria detecta cedo; terciaria reduz complicacoes.",
            aprofundamento: "Vacinas protegem individuos e comunidades quando ha alta cobertura vacinal.",
            enem: ["vacinacao", "imunidade coletiva", "prevencao", "politicas publicas"]
          }
        ]
      },
      {
        id: "estrategia-enem",
        titulo: "Estrategia de prova",
        resumo: "Como resolver itens de biologia com leitura, eliminacao e conexao com competencias do ENEM.",
        modulos: [
          {
            titulo: "Leitura ativa",
            teoria: "Antes de marcar, identifique o comando da questao, o conceito biologico central e os dados do texto, grafico ou tabela.",
            aprofundamento: "Muitas alternativas parecem corretas isoladamente, mas apenas uma responde ao problema proposto.",
            enem: ["graficos", "competencias", "interpretacao", "contexto"]
          },
          {
            titulo: "Revisao por erros",
            teoria: "Depois do simulado, classifique erros por conteudo, interpretacao, pressa ou desconhecimento de vocabulario.",
            aprofundamento: "Um caderno de erros bem feito acelera a revisao da reta final.",
            enem: ["revisao", "metacognicao", "gestao de tempo"]
          }
        ]
      }
    ]
  }
];

const baseQuestions = [
  [1, "ENEM 2009", "Bioquimica", "facil", "Em uma situacao de desidratacao, a reposicao de agua e sais e importante porque:", ["aumenta a digestao de celulose em humanos", "mantem o equilibrio osmotico e a conducao de impulsos", "substitui a acao de todas as enzimas", "impede qualquer perda de calor corporal", "transforma lipidios em proteinas"], 1, "Agua e sais participam do equilibrio osmotico, da transmissao nervosa e de varias funcoes metabolicas."],
  [2, "ENEM 2010", "Citologia", "facil", "Uma celula com parede de peptidoglicano, DNA circular e ausencia de nucleo organizado deve ser classificada como:", ["animal", "vegetal", "fungica", "bacteriana", "viral"], 3, "Essas caracteristicas indicam uma celula procarionte bacteriana."],
  [3, "ENEM 2011", "Microbiologia", "media", "O uso inadequado de antibioticos favorece o aparecimento de bacterias resistentes porque:", ["o antibiotico induz todas as bacterias a virarem virus", "as bacterias resistentes sobrevivem e deixam mais descendentes", "o medicamento elimina apenas bacterias sem parede celular", "os ribossomos humanos passam a produzir anticorpos", "o DNA bacteriano deixa de sofrer mutacoes"], 1, "O antibiotico atua como pressao seletiva: sobrevivem as bacterias que ja possuem resistencia."],
  [4, "ENEM 2012", "Botanica", "media", "A presenca de sementes foi importante na evolucao das plantas porque:", ["eliminou a necessidade de fotossintese", "permitiu maior protecao e dispersao do embriao", "impediu a formacao de gametas", "restringiu as plantas a ambientes aquaticos", "substituiu vasos condutores por frutos"], 1, "Sementes protegem o embriao e favorecem dispersao e sobrevivencia em ambiente terrestre."],
  [5, "ENEM 2013", "Citologia", "facil", "A organela mais diretamente relacionada a producao de ATP na respiracao celular e:", ["ribossomo", "lisossomo", "mitocondria", "complexo golgiense", "nucleo"], 2, "Mitocondrias realizam etapas importantes da respiracao celular e produzem ATP."],
  [6, "ENEM 2014", "Bioquimica", "media", "Uma enzima perde atividade quando submetida a temperatura muito alta porque:", ["vira carboidrato", "tem sua estrutura tridimensional alterada", "passa a armazenar DNA", "deixa de possuir aminoacidos", "transforma substrato em anticorpo"], 1, "Temperaturas elevadas podem desnaturar proteinas, alterando o sitio ativo da enzima."],
  [7, "ENEM 2015", "Genetica", "media", "Em um heredograma, um casal sem a caracteristica tem filho afetado por uma condicao genetica. Esse padrao sugere, em muitos casos:", ["heranca autossomica recessiva", "heranca mitocondrial obrigatoria", "ausencia de alelos", "dominancia completa ligada ao Y", "caracteristica adquirida sempre hereditaria"], 0, "Pais fenotipicamente normais podem ser heterozigotos e ter filho aa afetado."],
  [8, "ENEM 2016", "Evolucao", "media", "A resistencia de insetos a inseticidas e melhor explicada por:", ["necessidade individual de sobreviver", "selecao de variantes resistentes ja presentes na populacao", "transformacao direta de todas as celulas em esporos", "interrupcao permanente das mutacoes", "desaparecimento da variabilidade genetica"], 1, "A pressao seletiva aumenta a frequencia de individuos resistentes ao longo das geracoes."],
  [9, "ENEM 2017", "Fisiologia", "media", "A insulina contribui para a homeostase porque:", ["aumenta a glicose no sangue depois das refeicoes", "facilita a entrada de glicose em celulas e reduz a glicemia", "impede qualquer armazenamento de glicogenio", "estimula a producao de bile no estomago", "transporta oxigenio nas hemacias"], 1, "A insulina reduz a glicemia ao favorecer captacao de glicose e armazenamento."],
  [10, "ENEM 2018", "Imunologia", "media", "Vacinas protegem contra doencas porque:", ["substituem todos os leucocitos", "estimulam resposta imune e memoria imunologica", "eliminam a necessidade de saneamento", "destroem qualquer virus fora do corpo", "transformam anticorpos em antibioticos"], 1, "Vacinas apresentam antigenos ou instrucoes para gerar resposta e memoria imunologica."],
  [11, "ENEM 2019", "Zoologia", "media", "Para reduzir esquistossomose, uma medida coerente com o ciclo da doenca e:", ["evitar carne bovina malpassada", "controlar caramujos hospedeiros e melhorar saneamento", "vacinar contra toxina bacteriana", "eliminar mosquitos adultos apenas no inverno", "impedir consumo de leite pasteurizado"], 1, "O ciclo envolve caramujos e contaminacao da agua por fezes; saneamento e controle do hospedeiro ajudam."],
  [12, "ENEM 2020", "Ecologia", "facil", "Liquens, formados por fungos e algas ou cianobacterias, sao exemplo classico de:", ["predacao", "mutualismo", "amensalismo", "parasitismo obrigatorio", "canibalismo"], 1, "Nos liquens, os organismos envolvidos se beneficiam da associacao."],
  [13, "ENEM 2021", "Ecologia", "media", "A eutrofizacao de um lago geralmente ocorre quando ha excesso de nutrientes que causa:", ["queda de algas e aumento imediato de oxigenio", "proliferacao de algas e reducao posterior do oxigenio dissolvido", "formacao de sementes em peixes", "eliminacao total de decompositores", "conversao de nitrogenio em luz"], 1, "Excesso de nutrientes aumenta algas; sua decomposicao consome oxigenio e prejudica organismos aquaticos."],
  [14, "ENEM 2022", "Biotecnologia", "media", "A tecnica de PCR e usada para:", ["amplificar sequencias de DNA", "produzir ATP no cloroplasto", "substituir ribossomos por lipidios", "impedir pareamento de bases", "transformar proteinas em cromossomos"], 0, "PCR amplifica fragmentos de DNA, permitindo diagnostico e analises geneticas."],
  [15, "ENEM 2023", "Saude publica", "media", "Em uma campanha contra dengue, a medida mais relacionada ao ciclo do vetor e:", ["aumentar criadouros com agua parada", "eliminar recipientes que acumulam agua", "usar antibiotico em toda a populacao", "evitar alimentos com gluten", "aplicar soro antiofidico"], 1, "O Aedes aegypti se reproduz em agua parada; eliminar criadouros reduz o vetor."],
  [16, "ENEM 2024", "Ecologia", "dificil", "A bioacumulacao de mercurio em cadeias alimentares preocupa porque:", ["a concentracao tende a aumentar em niveis troficos superiores", "o metal e convertido em glicose pelos produtores", "o contaminante desaparece ao chegar aos predadores", "apenas plantas terrestres sao afetadas", "consumidores primarios nao acumulam substancias"], 0, "Substancias persistentes podem se concentrar ao longo da cadeia, atingindo predadores de topo."],
  [17, "ENEM 2025", "Biotecnologia", "dificil", "Uma planta transgenica que produz uma proteina inseticida resulta de:", ["insercao e expressao de gene de interesse", "perda de todos os cloroplastos", "substituicao do DNA por glicogenio", "ausencia de transcricao", "fermentacao do floema"], 0, "Transgenia envolve introduzir e expressar genes que conferem uma caracteristica desejada."]
];

const extraQuestions = [
  [18, "ENEM PPL 2013", "Citologia", "media", "Hemacias colocadas em meio muito hipotonico tendem a:", ["perder agua e murchar", "ganhar agua e poder romper", "produzir parede celular", "fazer meiose", "formar cloroplastos"], 1, "Por osmose, agua entra na celula em meio hipotonico, podendo causar lise."],
  [19, "ENEM PPL 2015", "Genetica", "media", "Se uma doenca recessiva ligada ao X afeta mais homens, isso ocorre porque homens:", ["possuem apenas um cromossomo X", "nao possuem genes", "sempre sao homozigotos AA", "transmitem Y para filhas", "nao sofrem mutacoes"], 0, "Homens XY expressam alelos recessivos presentes no unico cromossomo X."],
  [20, "ENEM PPL 2018", "Evolucao", "dificil", "Estruturas homologas em especies diferentes indicam:", ["ancestralidade comum", "mesma funcao obrigatoria", "ausencia de evolucao", "criacao individual de genes por necessidade", "parentesco apenas ecologico"], 0, "Homologia aponta origem evolutiva comum, ainda que as funcoes atuais possam diferir."],
  [21, "ENEM Digital 2020", "Saude publica", "media", "A diferenca entre soro e vacina e que o soro:", ["induz memoria permanente sempre", "fornece anticorpos prontos para resposta rapida", "so funciona contra bacterias", "contem apenas carboidratos", "substitui saneamento"], 1, "Soro e imunizacao passiva; vacina estimula resposta ativa e memoria."],
  [22, "ENEM Digital 2021", "Botanica", "media", "O fechamento dos estomatos em seca intensa reduz:", ["perda de agua por transpiracao", "absorcao de luz por completo", "formacao de raizes", "presenca de xilema", "existencia de clorofila"], 0, "Estomatos fechados diminuem perda de vapor de agua, mas tambem reduzem entrada de CO2."],
  [23, "ENEM PPL 2022", "Ecologia", "media", "A retirada de um predador de topo pode causar:", ["alteracoes em cascata nos demais niveis troficos", "aumento inevitavel da fotossintese no solo", "fim de todos os produtores", "eliminacao dos ciclos da materia", "impossibilidade de competicao"], 0, "Predadores regulam populacoes; sua retirada pode desequilibrar a teia alimentar."],
  [24, "ENEM PPL 2023", "Biotecnologia", "dificil", "Em investigacao genetica, comparar regioes variaveis do DNA permite:", ["identificar parentesco ou autoria biologica", "medir diretamente a pressao arterial", "descobrir qualquer memoria adquirida", "converter DNA em vacina sem teste", "eliminar mutacoes da especie"], 0, "Marcadores geneticos variaveis ajudam em identificacao e parentesco."],
  [25, "ENEM PPL 2024", "Fisiologia", "media", "Durante exercicio intenso, o aumento da frequencia respiratoria ajuda a:", ["elevar trocas gasosas e atender demanda metabolica", "bloquear a circulacao", "impedir producao de ATP", "transformar sangue em linfa", "parar a atividade muscular"], 0, "Musculos ativos demandam mais oxigenio e eliminam mais CO2."],
  [26, "ENEM PPL 2025", "Microbiologia", "media", "Fermentacao realizada por leveduras e usada na producao de paes porque libera:", ["gas carbonico que expande a massa", "oxigenio que endurece proteinas", "DNA que forma gluten", "sais que impedem crescimento", "anticorpos que acidificam a farinha"], 0, "Leveduras fermentam acucares e liberam CO2, fazendo a massa crescer."]
];

const toQuestion = ([id, year_ref, topic, difficulty, question, options, correct, explanation]) => ({
  id,
  topic,
  year_ref,
  difficulty,
  question,
  options,
  correct,
  explanation
});

const questionList = [...baseQuestions, ...extraQuestions].map(toQuestion);

export const ALL_QUESTIONS = {
  1: questionList.filter((q) => ["Bioquimica", "Citologia", "Microbiologia", "Botanica"].includes(q.topic)),
  2: questionList.filter((q) => ["Genetica", "Evolucao", "Fisiologia", "Imunologia", "Zoologia"].includes(q.topic)),
  3: questionList.filter((q) => ["Ecologia", "Biotecnologia", "Saude publica", "Fisiologia"].includes(q.topic)),
  all: questionList
};

export const ENEM_YEARS = [
  "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017",
  "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"
];
