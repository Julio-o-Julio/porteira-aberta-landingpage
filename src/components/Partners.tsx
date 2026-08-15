"use client";

import { Reveal } from "./ui/Reveal";
import { Handshake } from "lucide-react";
import { asset } from "@/lib/basePath";

/**
 * Faixa de credibilidade com os parceiros.
 *
 * As logos oficiais (public/partners/*.svg) são MONOCROMÁTICAS:
 *  - sicredi.svg vem em preto
 *  - cresol.svg vem em branco
 * Para exibi-las na mesma cor numa faixa clara, usamos `mask-image`
 * (a máscara usa só a geometria) e pintamos ambas com a mesma cor da marca.
 */
const partners = [
  { name: "Sicredi", src: "/partners/sicredi.svg", ratio: 145 / 34 },
  { name: "Cresol", src: "/partners/cresol.svg", ratio: 1920 / 380.49 },
];

export function Partners() {
  return (
    <section className="border-y border-porteira-100 bg-white">
      <div className="container-x flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
        <Reveal className="flex items-center gap-3 text-porteira-600">
          <Handshake className="h-6 w-6 text-campo-600" />
          <p className="max-w-xs text-sm font-medium md:text-base">
            Parcerias que dão{" "}
            <strong className="text-porteira-800">segurança</strong> e as
            melhores taxas para o produtor rural
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {partners.map((p) => (
            <PartnerSeal key={p.name} {...p} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function PartnerSeal({
  name,
  src,
  ratio,
}: {
  name: string;
  src: string;
  ratio: number;
}) {
  const height = 30; // px
  // mask-image é montado à mão, então o basePath do Pages não entra sozinho.
  const url = asset(src);
  return (
    <div
      className="flex h-16 min-w-[168px] items-center justify-center rounded-2xl border border-porteira-100 bg-creme px-8 shadow-soft transition hover:shadow-card"
      title={`Parceiro oficial ${name}`}
    >
      <span
        role="img"
        aria-label={`Logo ${name}`}
        className="block bg-campo-700 transition-colors"
        style={{
          height,
          width: height * ratio,
          maskImage: `url(${url})`,
          WebkitMaskImage: `url(${url})`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          maskSize: "contain",
          WebkitMaskSize: "contain",
        }}
      />
    </div>
  );
}
