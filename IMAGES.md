# 🖼️ Guia de imagens — o que enviar

A landing page **já funciona sem fotos** (hero em gradiente/SVG, logo recriada).
Mas com as imagens reais ela fica muito mais forte. Abaixo, exatamente o que
mandar, onde colocar e o que ativar no código.

Formato ideal: **.webp** ou **.jpg** otimizado. Fotos horizontais em boa
resolução (mín. 1600px de largura para o hero).

---

## 1. Logo oficial ✅ (já incluída)

- **Já está** em `public/logo.jpg` e como favicon em `src/app/icon.jpg`.
- Se tiver a logo em **PNG com fundo transparente** ou **SVG**, é melhor ainda:
  substitua `public/logo.jpg` e, em `src/components/ui/Logo.tsx`, o wordmark
  pode usar `useImage`. Hoje uso a recriação em SVG (fica nítida em qualquer tela).

## 2. Foto de fundo do Hero  🎯 (a mais importante)

- **Onde:** `public/hero.jpg`
- **Que imagem:** lavoura/campo ao **amanhecer** (nascer do sol), horizonte
  amplo, tons quentes de dourado — combina com a marca "porteira aberta".
  Ex.: plantação de soja/milho com sol baixo, ou uma porteira/estrada de terra
  ao amanhecer. **Horizontal, alta resolução.** (Você tem várias assim no
  Instagram — as fotos de lavoura ficariam perfeitas.)
- **Como ativar:** em `src/components/Hero.tsx`, logo após a `<section>`,
  adicione um `next/image` de fundo com overlay:

  ```tsx
  import Image from "next/image";
  // dentro da section, como primeira camada de fundo (-z-40):
  <Image src="/hero.jpg" alt="" fill priority
         className="-z-40 object-cover" />
  <div className="absolute inset-0 -z-30 bg-gradient-to-b
       from-porteira-900/70 via-porteira-800/40 to-campo-800/80" />
  ```
  (Mantendo o overlay o texto branco continua legível.)

## 3. Logos dos parceiros  🤝

- **Onde:** `public/partners/sicredi.svg` e `public/partners/cresol.svg`
  (ou `.png` com fundo transparente).
- **Que imagem:** logos **oficiais** do Sicredi e da Cresol. Pegue nos kits de
  marca oficiais e respeite as diretrizes de uso.
- **Como ativar:** em `src/components/Partners.tsx`, troque o `<span>` de texto
  dentro de `PartnerSeal` por `<Image src={`/partners/${name.toLowerCase()}.svg`} ... />`.

## 4. Fotos dos depoimentos  💬 (opcional)

- **Onde:** `public/depoimentos/<nome>.jpg` (quadradas, ~400x400).
- **Que imagem:** foto do rosto de cada cliente que autorizar. Hoje mostro as
  iniciais num círculo; se enviar, troco pelo avatar real.
- **Importante:** os 3 depoimentos atuais são **exemplos**. Me mande os
  **depoimentos reais** (nome, cidade, texto) que eu atualizo.

## 5. Números reais  📊 (não é imagem, mas importante)

Nas seções aparecem números de exemplo:
- Hero e "Diferenciais": `+300 projetos`, `R$ 120 mi liberados`,
  `977 produtores`, `98% satisfação`, `+8 anos`.

Me passe os **números reais** que eu ajusto em `Hero.tsx` e `WhyUs.tsx`.

---

### Resumo rápido do que me mandar

1. 📷 1 foto boa de **lavoura ao amanhecer** (hero)
2. 🏦 Logos **Sicredi** e **Cresol** (oficiais)
3. 💬 Depoimentos reais (+ fotos, se tiver)
4. 📊 Números reais da empresa
5. 🎨 (opcional) Logo em PNG transparente ou SVG

Pode mandar aos poucos — encaixo cada um assim que chegar.
