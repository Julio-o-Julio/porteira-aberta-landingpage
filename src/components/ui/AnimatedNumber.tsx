"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import gsap from "gsap";

type Props = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  /** separador de milhar pt-BR */
  locale?: string;
};

/**
 * Contador que anima de 0 até `value` quando entra na viewport (GSAP).
 */
export function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.8,
  locale = "pt-BR",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;

    const format = (n: number) =>
      prefix +
      n.toLocaleString(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }) +
      suffix;

    if (reduce) {
      setDisplay(format(value));
      return;
    }

    const obj = { n: 0 };
    const tween = gsap.to(obj, {
      n: value,
      duration,
      ease: "power2.out",
      onUpdate: () => setDisplay(format(obj.n)),
    });

    return () => {
      tween.kill();
    };
  }, [inView, value, prefix, suffix, decimals, duration, locale, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}
