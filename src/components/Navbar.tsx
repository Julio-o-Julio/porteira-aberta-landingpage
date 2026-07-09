"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LogoWordmark } from "./ui/Logo";
import { WhatsAppButton } from "./ui/WhatsAppButton";
import { navLinks } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // "solid" = fundo claro (rolou a página OU o menu mobile está aberto)
  const solid = scrolled || open;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        solid
          ? "border-porteira-100 bg-creme/85 shadow-soft backdrop-blur-md"
          : "border-transparent bg-transparent shadow-none"
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between">
        <a href="#top" aria-label="Início — Porteira Aberta">
          <LogoWordmark onDark={!solid} />
        </a>

        <ul
          className={`hidden items-center gap-8 lg:flex ${
            solid ? "" : "[text-shadow:0_1px_3px_rgba(0,0,0,0.4)]"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  solid
                    ? "text-porteira-700 hover:text-campo-600"
                    : "text-white hover:text-sol-300"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <WhatsAppButton className="!px-5 !py-2.5 !text-sm" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-colors lg:hidden ${
            solid
              ? "border-porteira-200 bg-white/70 text-porteira-700"
              : "border-white/40 bg-white/10 text-white"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-porteira-100 bg-creme/95 backdrop-blur-md lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-porteira-700 hover:bg-campo-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 px-1">
                <WhatsAppButton className="w-full" />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
