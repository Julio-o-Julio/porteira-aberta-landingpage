"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { WhatsAppButton } from "./ui/WhatsAppButton";
import { asset } from "@/lib/basePath";

const ROTATING = ["Custeio", "Investimento", "PRONAF", "FCO", "a sua safra"];

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);

  // Palavras rotativas
  useEffect(() => {
    const id = setInterval(
      () => setWordIndex((i) => (i + 1) % ROTATING.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  // Parallax de scroll com GSAP ScrollTrigger
  useEffect(() => {
    if (reduce) return;
    let ctx: gsap.Context;
    let cleanup = () => {};

    (async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const st = (el: Element | null, y: number) =>
          el &&
          gsap.to(el, {
            yPercent: y,
            ease: "none",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        // A imagem sobe suavemente (folga de altura fica no rodapé),
        // então usamos valores negativos para nunca expor vazio.
        st(skyRef.current, -14);
        st(sunRef.current, -6);
        // A faixa de ondas verdes (fieldRef) fica FIXA no rodapé — sem
        // parallax — para nunca revelar a foto por baixo.
      }, rootRef);

      cleanup = () => ctx.revert();
    })();

    return () => cleanup();
  }, [reduce]);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex min-h-dvh items-center overflow-hidden pt-24"
    >
      {/* ---- Foto de fundo (lavoura ao pôr do sol) com parallax ---- */}
      <div ref={skyRef} className="absolute inset-x-0 top-0 -z-30 h-[118%]">
        <Image
          src={asset("/hero.png")}
          alt="Lavoura de soja ao pôr do sol"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      {/* overlay para legibilidade do texto branco */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-porteira-900/70 via-porteira-900/35 to-campo-900/80" />
      <div
        ref={sunRef}
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(120%_80%_at_75%_20%,rgba(244,180,26,0.30)_0%,transparent_55%)]"
      />

      {/* silhueta de campo/colinas */}
      <div ref={fieldRef} className="absolute inset-x-0 bottom-0 -z-10">
        <svg viewBox="0 0 1440 320" className="h-auto w-full" preserveAspectRatio="none">
          <path
            fill="#245418"
            d="M0,224 C240,180 420,260 720,240 C1020,220 1200,150 1440,200 L1440,320 L0,320 Z"
          />
          <path
            fill="#2F6B1E"
            d="M0,270 C260,230 480,300 760,280 C1040,260 1240,230 1440,262 L1440,320 L0,320 Z"
            opacity="0.92"
          />
        </svg>
        <div className="h-24 bg-campo-700 sm:h-16" />
      </div>

      {/* transição para o creme da próxima seção */}
      <div className="absolute inset-x-0 bottom-0 -z-0 h-24 bg-gradient-to-b from-transparent to-creme" />

      {/* ---- Conteúdo ---- */}
      <div className="container-x relative z-10 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
            <ShieldCheck className="h-4 w-4" />
            Parceiros oficiais Sicredi &amp; Cresol
          </span>

          <h1 className="heading mt-6 text-4xl text-white drop-shadow-sm sm:text-6xl lg:text-7xl">
            Crédito para o agro,
            <br className="hidden sm:block" /> feito pra{" "}
            <span className="relative inline-grid align-bottom text-sol-300">
              {/* sizer invisível: reserva a largura da MAIOR palavra para
                  o layout não reflowar/quebrar linha ao trocar o texto */}
              {ROTATING.map((w) => (
                <span
                  key={w}
                  aria-hidden
                  className="invisible col-start-1 row-start-1 whitespace-nowrap"
                >
                  {w}
                </span>
              ))}
              <span className="col-start-1 row-start-1 overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={ROTATING[wordIndex]}
                    initial={{ y: reduce ? 0 : "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: reduce ? 0 : "-100%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="block whitespace-nowrap"
                  >
                    {ROTATING[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
            Projetos agropecuários bem estruturados e as melhores condições de
            crédito rural para o seu negócio crescer. Do primeiro contato ao
            recurso liberado, a gente cuida de tudo com você.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton
              label="Quero meu crédito"
              className="!px-7 !py-4 text-base"
            />
            <a
              href="#servicos"
              className="btn-ghost !bg-white/15 !text-white !border-white/40 backdrop-blur hover:!bg-white/25 text-base"
            >
              Conheça os serviços
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* mini prova social */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/85">
            <Stat number="+300" label="projetos aprovados" />
            <span className="hidden h-8 w-px bg-white/30 sm:block" />
            <Stat number="R$ 120mi" label="em crédito liberado" />
            <span className="hidden h-8 w-px bg-white/30 sm:block" />
            <Stat number="977" label="produtores acompanham" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl font-bold text-white">{number}</p>
      <p className="text-sm text-white/75">{label}</p>
    </div>
  );
}
