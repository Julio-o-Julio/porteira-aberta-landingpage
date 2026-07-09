"use client";

import {
  Sprout,
  Tractor,
  ClipboardCheck,
  FileText,
  Landmark,
  LineChart,
  type LucideIcon,
} from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";
import { whatsappLink } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tag?: string;
};

const services: Service[] = [
  {
    icon: Landmark,
    title: "Crédito Rural",
    desc: "Custeio, investimento e comercialização com as melhores taxas via Sicredi e Cresol. A gente encontra a linha ideal pro seu momento.",
    tag: "Carro-chefe",
  },
  {
    icon: Sprout,
    title: "Projetos Agropecuários",
    desc: "Projetos técnicos completos para investimento, custeio e FCO — bem estruturados para aprovar mais rápido e sem dor de cabeça.",
  },
  {
    icon: ClipboardCheck,
    title: "Consultoria & Planejamento",
    desc: "Planejamento financeiro e produtivo da propriedade, com foco em sustentabilidade e rentabilidade a cada safra.",
  },
  {
    icon: FileText,
    title: "Regularização & Documentação",
    desc: "Cuidamos da documentação, CAR, laudos e toda a papelada para deixar sua propriedade em dia e apta ao crédito.",
  },
  {
    icon: Tractor,
    title: "Investimento & Custeio",
    desc: "Financiamento de máquinas, benfeitorias, rebanho e da lavoura — do trator ao insumo — com condições sob medida.",
  },
  {
    icon: LineChart,
    title: "PRONAF, FCO e mais",
    desc: "Acesso às principais linhas do Governo e cooperativas: PRONAF, FCO, Pronamp e programas de safra vigentes.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative bg-creme py-24 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">O que fazemos</span>
          <h2 className="heading mt-5 text-3xl sm:text-5xl">
            Tudo para o crédito do seu agro sair do papel
          </h2>
          <p className="mt-4 text-lg text-porteira-500">
            Da análise da propriedade até o recurso na conta — soluções
            completas para o produtor rural crescer com segurança.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <RevealItem key={s.title}>
              <ServiceCard {...s} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc, tag }: Service) {
  return (
    <a
      href={whatsappLink(`Olá! Tenho interesse em: ${title}.`)}
      target="_blank"
      rel="noopener noreferrer"
      className="card group relative flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:border-campo-200 hover:shadow-card"
    >
      {/* brilho de canto no hover */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sol-100 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-70" />

      <div className="relative flex items-center justify-between">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-campo-50 text-campo-600 ring-1 ring-campo-100 transition-colors group-hover:bg-campo-600 group-hover:text-white">
          <Icon className="h-7 w-7" strokeWidth={1.75} />
        </span>
        {tag && (
          <span className="rounded-full bg-sol-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-sol-700">
            {tag}
          </span>
        )}
      </div>

      <h3 className="relative mt-6 font-display text-xl font-bold text-porteira-800">
        {title}
      </h3>
      <p className="relative mt-2 flex-1 text-[15px] leading-relaxed text-porteira-500">
        {desc}
      </p>

      <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-campo-600 transition-colors group-hover:text-campo-700">
        Saber mais
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}
