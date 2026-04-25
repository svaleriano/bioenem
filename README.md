# BioENEM

App de estudos de Biologia para alunos do Ensino Medio com trilhas por ano, revisao para o ENEM, simulados comentados e tutor inteligente para duvidas.

## Funcionalidades

- Conteudo completo por trilha: 1o, 2o e 3o ano
- Temas principais: citologia, bioquimica, microbiologia, botanica, genetica, evolucao, fisiologia, zoologia, ecologia, biotecnologia e saude publica
- Simulados com questoes autorais no estilo ENEM, organizadas por edicoes de 2009 a 2025
- Resultado com gabarito comentado e revisao dos erros
- Tutor IA em `/api/chat`, pronto para Vercel
- PWA instalavel no celular

> Observacao: o banco atual usa questoes autorais inspiradas no estilo ENEM. Para usar enunciados oficiais, importe os cadernos do INEP respeitando a fonte e os direitos de uso.

## Rodar localmente

```bash
npm install
npm start
```

Acesse: http://localhost:3000

## Configurar o tutor IA no Vercel

1. No painel do projeto no Vercel, abra `Settings > Environment Variables`.
2. Adicione `OPENAI_API_KEY` com sua chave da OpenAI.
3. Opcional: adicione `OPENAI_MODEL` para escolher o modelo usado pelo tutor.
4. Faca um novo deploy.

Sem `OPENAI_API_KEY`, o app continua funcionando e mostra um aviso amigavel no chat.

## Publicar no Vercel

1. Suba a pasta do projeto para um repositorio no GitHub.
2. Acesse [vercel.com](https://vercel.com) e clique em `Add New Project`.
3. Selecione o repositorio.
4. Clique em `Deploy`.

## Instalar no celular

Android: abra no Chrome, toque no menu e escolha `Adicionar a tela inicial`.

iPhone: abra no Safari, toque em compartilhar e escolha `Adicionar a Tela de Inicio`.
