# 🔥 Mestre do Churrasco

Landing page do aplicativo **Mestre do Churrasco** — o app que ensina, planeja e guia o churrasco perfeito com inteligência artificial.

Desenvolvida para captar interessados na lista VIP de pré-lançamento.

## Tecnologias

- **Vite 5** + **React 18** + **TypeScript**
- **Tailwind CSS 3** com design system customizado (tema dark, gradientes de fogo)
- **shadcn/ui** (componentes Radix)
- **Formspree** para coleta de leads
- **Lucide React** para ícones

## Funcionalidades

- Header fixo com navegação por seções e menu mobile responsivo
- Hero com background image e CTA
- Seções de benefícios, preview do app e diferenciais
- Formulário de cadastro integrado com Formspree
- Animações por scroll (Intersection Observer)
- Design totalmente responsivo
- Tema dark com gradientes e efeitos de glow

## Começando

```bash
git clone <REPO_URL>
cd mestre-da-grelha-app
npm install
npm run dev
```

A aplicação ficará disponível em `http://localhost:8080/`.

## Build de Produção

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`. Compatível com Vercel, Netlify, Render e qualquer serviço que suporte apps Vite.

## Estrutura do Projeto

```
src/
├── assets/          # Imagens (hero, screenshots do app)
├── components/      # Componentes da landing page
│   ├── ui/          # Componentes shadcn/ui
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Benefits.tsx
│   ├── AppPreview.tsx
│   ├── WhyDifferent.tsx
│   ├── SignupForm.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
├── hooks/           # Custom hooks (useScrollAnimation, use-toast)
├── pages/           # Páginas (Index, NotFound)
└── lib/             # Utilitários
```

## Criado com Kiro

Este projeto foi desenvolvido com o auxílio do [Kiro](https://kiro.dev), ambiente de desenvolvimento com IA da AWS.

## Licença

Este projeto é de uso interno da equipe Mestre do Churrasco. Entre em contato com o time para obter mais informações sobre direitos de uso.
