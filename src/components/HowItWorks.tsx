"use client";

import { MessagesSquare, FileSearch, FileCheck2, Banknote } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";
import { WhatsAppButton } from "./ui/WhatsAppButton";

const steps = [
  {
    icon: MessagesSquare,
    title: "1. Primeiro contato",
    desc: "Você chama no WhatsApp e conta sobre a sua propriedade e o que precisa. Sem compromisso.",
  },
  {
    icon: FileSearch,
    title: "2. Análise e diagnóstico",
    desc: "Avaliamos o cenário, a documentação e a melhor linha de crédito para o seu perfil.",
  },
  {
    icon: FileCheck2,
    title: "3. Projeto e aprovação",
    desc: "Montamos o projeto técnico e conduzimos toda a operação junto a Sicredi ou Cresol.",
  },
  {
    icon: Banknote,
    title: "4. Crédito liberado",
    desc: "Recurso na conta e acompanhamento contínuo para você investir com tranquilidade.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-creme py-24 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Como funciona</span>
          <h2 className="heading mt-5 text-3xl sm:text-5xl">
            Do primeiro “oi” ao crédito na conta
          </h2>
          <p className="mt-4 text-lg text-porteira-500">
            Um caminho simples e transparente, com a gente do seu lado em cada
            etapa.
          </p>
        </Reveal>

        <RevealGroup className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* linha conectora no desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-campo-200 to-transparent lg:block" />
          {steps.map((s) => (
            <RevealItem key={s.title}>
              <div className="relative flex h-full flex-col items-center rounded-3xl border border-porteira-100 bg-white p-7 text-center shadow-soft">
                <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sol-400 to-sol-600 text-white shadow-glow">
                  <s.icon className="h-8 w-8" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-porteira-800">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-porteira-500">
                  {s.desc}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15} className="mt-12 flex justify-center">
          <WhatsAppButton
            label="Começar agora pelo WhatsApp"
            variant="primary"
            className="!px-7 !py-4 text-base"
          />
        </Reveal>
      </div>
    </section>
  );
}
