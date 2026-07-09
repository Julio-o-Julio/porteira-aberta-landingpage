# Porteira Aberta — Landing Page

Landing page de alta conversão para **Porteira Aberta — Projetos Agropecuários**.
Produto principal: **crédito para o agro**. Parceiros: **Sicredi** e **Cresol**.

Construída com **Next.js 14 (App Router) + TypeScript + Tailwind CSS**,
animações com **Framer Motion** e **GSAP** (parallax do hero + contadores).

## 🚀 Rodando o projeto

```bash
npm install
npm run dev      # http://localhost:3000
```

Build de produção:

```bash
npm run build
npm start
```

## 🎨 Identidade visual (extraída da logo)

| Token       | Cor       | Uso                                  |
| ----------- | --------- | ------------------------------------ |
| `campo-600` | `#2F6B1E` | Verde principal (CTA primário, marca)|
| `porteira-600` | `#6B3410` | Marrom da porteira (texto/madeira)|
| `sol-400`   | `#F4B41A` | Amarelo nascer do sol (destaques)    |
| `sol-600`   | `#E4720E` | Laranja (CTA de destaque)            |
| `creme`     | `#FAF6EC` | Fundo                                |

Fontes: **Sora** (títulos) + **Inter** (corpo), via `next/font`.

## 📁 Estrutura

```
src/
├─ app/
│  ├─ layout.tsx        # metadata, fontes, SEO
│  ├─ page.tsx          # composição da página
│  ├─ globals.css       # tokens + utilitários (botões, cards)
│  └─ icon.jpg          # favicon (logo)
├─ components/
│  ├─ Navbar.tsx        # sticky, muda ao rolar, menu mobile
│  ├─ Hero.tsx          # parallax GSAP + palavras rotativas
│  ├─ Partners.tsx      # faixa Sicredi + Cresol
│  ├─ Services.tsx      # cards de serviço (stagger)
│  ├─ WhyUs.tsx         # diferenciais + números animados (GSAP)
│  ├─ HowItWorks.tsx    # passo a passo
│  ├─ Testimonials.tsx  # depoimentos
│  ├─ FinalCTA.tsx      # CTA final
│  ├─ Footer.tsx
│  └─ ui/               # Logo, Reveal, AnimatedNumber, WhatsAppButton
└─ lib/
   └─ site.ts           # ⚙️ CONFIG: WhatsApp, Instagram, endereço, CNPJ
```

## ⚙️ O que ajustar antes de publicar

Abra **`src/lib/site.ts`** e preencha os dados reais:

- `whatsappNumber` → `55` + DDD + número (ex.: `5567999999999`)
- `email`, `address`, `cnpj`
- Confira `instagram`

Todos os CTAs já apontam para o WhatsApp com mensagem pré-preenchida.

## 🖼️ Imagens

O visual funciona **sem nenhuma foto** (hero em SVG/gradiente, logo recriada
em SVG). Para deixar com a cara real da marca, veja **[`IMAGES.md`](./IMAGES.md)**
— lista exatamente quais imagens enviar e onde colocar.

## ♿ Qualidade

- Responsivo mobile-first (375 / 768 / 1024 / 1440)
- `prefers-reduced-motion` respeitado (desliga parallax e contadores)
- Contraste AA, foco visível, `alt`/`aria-label`, skip-link
- Sem dependência de hover para ações principais
- `next/font` com `display: swap`, imagens `next/image`
