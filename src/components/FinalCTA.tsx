"use client";

import { motion } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { WhatsAppButton } from "./ui/WhatsAppButton";
import { Instagram, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function FinalCTA() {
  return (
    <section id="contato" className="bg-creme px-5 pb-24 pt-8 sm:px-8">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-porteira-800 px-6 py-16 text-center shadow-card sm:px-16">
          {/* nascer do sol decorativo */}
          <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[140%] -translate-x-1/2 rounded-[50%] bg-sunrise opacity-90" />
          <div className="grain absolute inset-0" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h2 className="heading mx-auto max-w-2xl text-3xl text-white sm:text-5xl">
              Pronto para abrir a porteira do seu crédito?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
              Fale agora com um especialista. A primeira conversa é gratuita e
              sem compromisso — a gente te mostra o caminho.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton
                label="Falar com especialista"
                className="!px-8 !py-4 text-base"
              />
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !border-white/40 !bg-white/10 !text-white backdrop-blur hover:!bg-white/20 text-base"
              >
                <Instagram className="h-5 w-5" />
                Seguir no Instagram
              </a>
            </div>

            <p className="mt-8 inline-flex items-center gap-2 text-sm text-white/70">
              <Phone className="h-4 w-4" />
              Atendimento de segunda a sexta • WhatsApp com resposta rápida
            </p>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
