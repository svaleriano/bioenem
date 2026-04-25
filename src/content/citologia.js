export const citologia = {
  id: "citologia",
  titulo: "Citologia",
  resumo:
    "Estudo da celula, suas estruturas, metabolismo e relacao com saude, tecnologia e ambiente. No ENEM, costuma aparecer em situacoes-problema sobre transporte de substancias, organelas, energia celular, antibioticos, virus e biotecnologia.",
  modulos: [
    {
      titulo: "Teoria celular e tipos de celula",
      teoria:
        "Todo ser vivo e formado por celulas, e novas celulas surgem de celulas preexistentes. Procariontes, como bacterias, nao possuem nucleo delimitado por membrana. Eucariontes, como animais, plantas, fungos e protozoarios, possuem nucleo e organelas membranosas.",
      aprofundamento:
        "A diferenca entre procariontes e eucariontes explica por que alguns antibioticos atuam em bacterias sem afetar diretamente celulas humanas: eles podem bloquear estruturas bacterianas especificas, como ribossomos 70S ou parede celular de peptidoglicano.",
      enem: ["antibioticos", "bacterias", "comparacao celular", "origem da vida"]
    },
    {
      titulo: "Membrana plasmatica",
      teoria:
        "A membrana e formada por bicamada de fosfolipidios com proteinas, colesterol e carboidratos. Ela controla a entrada e saida de substancias e participa do reconhecimento celular.",
      aprofundamento:
        "Transporte passivo ocorre a favor do gradiente e nao gasta ATP: difusao simples, difusao facilitada e osmose. Transporte ativo gasta energia para mover substancias contra o gradiente, como na bomba de sodio e potassio.",
      enem: ["osmose", "soro fisiologico", "hemacias", "salinidade", "bomba de sodio e potassio"]
    },
    {
      titulo: "Organelas e suas funcoes",
      teoria:
        "Ribossomos produzem proteinas; reticulo endoplasmatico rugoso participa da sintese e transporte de proteinas; reticulo liso sintetiza lipidios e detoxifica; complexo golgiense modifica e secreta substancias; lisossomos fazem digestao intracelular; mitocondrias produzem ATP; cloroplastos realizam fotossintese.",
      aprofundamento:
        "Questao de ENEM raramente cobra apenas nome de organela. O comum e relacionar a organela a um processo: secrecao hormonal, digestao de particulas, fadiga muscular, fotossintese, fermentacao ou doencas metabolicas.",
      enem: ["secrecao", "respiracao celular", "fotossintese", "digestao intracelular", "metabolismo"]
    },
    {
      titulo: "Metabolismo energetico",
      teoria:
        "Respiracao celular usa glicose e oxigenio para produzir ATP, agua e gas carbonico. Fermentacao produz menos ATP e ocorre sem oxigenio. Fotossintese converte energia luminosa em materia organica, liberando oxigenio.",
      aprofundamento:
        "Em plantas, fotossintese e respiracao acontecem em momentos diferentes e tambem podem ocorrer simultaneamente. O balanco entre esses processos influencia crescimento, produtividade agricola e ciclos biogeoquimicos.",
      enem: ["ATP", "fermentacao", "exercicio fisico", "plantas", "ciclo do carbono"]
    }
  ]
};
