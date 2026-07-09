"use client";

import { CheckCircle2, Clock, HeartHandshake, MapPin } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";
import { AnimatedNumber } from "./ui/AnimatedNumber";

const diferenciais = [
  {
    icon: HeartHandshake,
    title: "Perto do produtor",
    desc: "Atendimento próximo, na linguagem do campo. Você fala com gente que entende da roça.",
  },
  {
    icon: Clock,
    title: "Agilidade na aprovação",
    desc: "Projetos bem feitos e completos, que reduzem idas e vindas e aceleram a liberação.",
  },
  {
    icon: CheckCircle2,
    title: "Taxas de parceiros fortes",
    desc: "Sicredi e Cresol garantem condições competitivas e segurança em cada operação.",
  },
  {
    icon: MapPin,
    title: "Presença regional",
    desc: "Base em Costa Rica/MS, atuando com foco no Centro-Oeste e no produtor de verdade.",
  },
];

const numeros = [
  { value: 300, prefix: "+", suffix: "", label: "projetos aprovados" },
  { value: 120, prefix: "R$ ", suffix: " mi", label: "em crédito liberado" },
  { value: 8, prefix: "+", suffix: " anos", label: "de estrada no agro" },
  { value: 98, prefix: "", suffix: "%", label: "de clientes satisfeitos" },
];

export function WhyUs() {
  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden bg-campo-700 py-24 text-white sm:py-28"
    >
      <div className="grain absolute inset-0" />
      {/* brilho de sol no topo */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sol-400/25 blur-3xl" />

      <div className="container-x relative">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-sol-200">
              Por que Porteira Aberta
            </span>
            <h2 className="heading mt-5 text-3xl text-white sm:text-5xl">
              A porteira aberta para o crédito chegar até você
            </h2>
            <p className="mt-5 max-w-lg text-lg text-white/85">
              Mais que projetos: uma parceria que caminha com o produtor em cada
              safra. Planejamento, sustentabilidade e resultado de verdade no
              campo.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-y-10">
              {numeros.map((n) => (
                <div key={n.label}>
                  <p className="font-display text-4xl font-extrabold text-sol-300 sm:text-5xl">
                    <AnimatedNumber
                      value={n.value}
                      prefix={n.prefix}
                      suffix={n.suffix}
                    />
                  </p>
                  <p className="mt-1 text-sm text-white/75">{n.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <RevealGroup className="grid gap-4 sm:grid-cols-2">
            {diferenciais.map((d) => (
              <RevealItem key={d.title}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-sol-300/40 hover:bg-white/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sol-400/15 text-sol-300">
                    <d.icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {d.desc}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
