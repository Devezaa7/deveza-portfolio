# Portfólio — Guilhermy Deveza (Veloso)

Portfólio pessoal em página única, construído com Next.js 15, React 19,
TypeScript, Tailwind CSS v4, Framer Motion e componentes no padrão shadcn/ui.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Build de produção

```bash
npm run build
npm start
```

## Deploy no Vercel

1. Suba este projeto para um repositório no seu GitHub (`Devezaa7`).
2. Acesse vercel.com → **New Project** → importe o repositório.
3. Não precisa configurar nenhuma variável de ambiente — o projeto não usa API externa.
4. Deploy. ✅

## O que substituir antes de publicar

Marquei tudo que é placeholder com um aviso visual em `IMAGEM DO PROJETO —
substituir` ou `Foto — substituir`, para não ficar nada com aparência de
conteúdo real por engano.

| Onde | Arquivo | O que fazer |
|---|---|---|
| Imagens dos 6 projetos | `components/selected-projects.tsx` | Troque o bloco de placeholder por um `<Image />` do `next/image` apontando pra um screenshot em `/public` |
| Foto de perfil (About) | `components/about.tsx` | Mesma ideia — substitua o bloco placeholder por sua foto real |
| Link do GitHub do AprenderJá e do Foco no Concurso | `lib/data.ts` | Esses dois projetos estão marcados como "Repositório privado" porque não recebi um link público. Se quiser divulgar, adicione `github` e/ou `demo` no objeto do projeto |

## Estrutura do conteúdo

Todo o conteúdo textual (projetos, tecnologias, links de contato) está
centralizado em `lib/data.ts` — edite ali sem precisar mexer nos
componentes visuais.

```
app/
  layout.tsx      → fontes (Space Grotesk, Inter, JetBrains Mono) e metadata
  page.tsx         → monta as 6 seções na ordem
  globals.css       → tokens de cor/tipografia (tema Tailwind v4)
components/
  hero.tsx
  selected-projects.tsx
  about.tsx
  tech-stack.tsx
  contact.tsx
  footer.tsx
  ui/button.tsx
lib/
  data.ts           → projetos, stack e links de contato
  utils.ts          → helper `cn` (shadcn)
```

## Decisões de design

- **Paleta:** fundo quase preto (`#0a0a0b`), branco e cinza predominantes,
  azul (`#3b82f6`) usado só em botões, links, hover e um glow bem sutil —
  como pedido.
- **Tipografia:** Space Grotesk para títulos grandes (a assinatura visual da
  página), Inter para texto corrido, JetBrains Mono para labels técnicos e
  numeração (reforça o tom "engenharia").
- **Selected Projects** é a seção principal: cada projeto ocupa uma linha
  inteira em layout alternado (imagem/texto trocando de lado), sem grid
  tradicional — pra dar espaço e destaque a cada um.
- **Movimento:** reveals discretos ao entrar na viewport (fade + translate),
  sem parallax ou efeitos chamativos. Respeita `prefers-reduced-motion`.
- **Sem navbar fixa:** como pedido, a página é enxuta — só os 6 blocos.

## Conteúdo dos projetos

As descrições foram escritas com base nos READMEs e repositórios reais que
você me passou. Se algo mudar (nova stack, novo link), edite direto em
`lib/data.ts` — todos os campos são simples strings.
# deveza-portfolio
