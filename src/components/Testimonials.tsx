"use client";

import { Star, Quote } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";

/**
 * NOTA: depoimentos são exemplos (placeholder). Substitua por depoimentos
 * reais de clientes. Para as fotos, coloque em /public/depoimentos/ e
 * troque o avatar de iniciais pelo <Image>.
 */
const testimonials = [
  {
    name: "João Batista",
    role: "Produtor de soja — Costa Rica/MS",
    initials: "JB",
    quote:
      "Consegui o custeio da safra com uma taxa que eu não achava possível. A equipe cuidou de tudo, foi rápido e sem enrolação.",
  },
  {
    name: "Marli Fernandes",
    role: "Pecuária de corte — Chapadão do Sul/MS",
    initials: "MF",
    quote:
      "O projeto de investimento pra ampliar o rebanho saiu redondinho. Explicaram cada passo e sempre atenderam no WhatsApp.",
  },
  {
    name: "Rafael Moreira",
    role: "Milho e feijão — Alcinópolis/MS",
    initials: "RM",
    quote:
      "Parceria de verdade. Me ajudaram na regularização e no PRONAF. Hoje planejo a safra com muito mais segurança.",
  },
];

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="heading mt-5 text-3xl sm:text-5xl">
            Quem planta confiança, colhe resultado
          </h2>
          <p className="mt-4 text-lg text-porteira-500">
            Produtores que abriram a porteira para o crédito e para novos ciclos
            de crescimento.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <figure className="flex h-full flex-col rounded-3xl border border-porteira-100 bg-creme p-7 shadow-soft">
                <Quote className="h-8 w-8 text-sol-400" />
                <div className="mt-3 flex gap-0.5" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-sol-400 text-sol-400"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-porteira-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-porteira-100 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-campo-600 font-display text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-semibold text-porteira-800">
                      {t.name}
                    </span>
                    <span className="block text-xs text-porteira-500">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
