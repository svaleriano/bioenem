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

Opcao gratuita para testes: Gemini API, do Google.

1. Acesse [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Crie uma API key.
3. No Vercel, abra `Settings > Environment Variables`.
4. Adicione `GEMINI_API_KEY` com a chave criada.
5. Marque `Production`.
6. Faca um novo deploy.

Opcional: adicione `GEMINI_MODEL` para escolher o modelo. Se nao definir, o app usa `gemini-2.5-flash-lite`.

Tambem e possivel usar OpenAI:

1. Adicione `OPENAI_API_KEY` com sua chave da OpenAI.
2. Opcional: adicione `OPENAI_MODEL` para escolher o modelo. Se nao definir, o app usa `gpt-4o-mini`.
3. Faca um novo deploy.

Sem `GEMINI_API_KEY` ou `OPENAI_API_KEY`, o app continua funcionando e mostra um aviso amigavel no chat.

## Publicar no Vercel

1. Suba a pasta do projeto para um repositorio no GitHub.
2. Acesse [vercel.com](https://vercel.com) e clique em `Add New Project`.
3. Selecione o repositorio.
4. Clique em `Deploy`.

## Instalar no celular

Android: abra no Chrome, toque no menu e escolha `Adicionar a tela inicial`.

iPhone: abra no Safari, toque em compartilhar e escolha `Adicionar a Tela de Inicio`.
