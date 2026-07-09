import Image from "next/image";

/**
 * Marca da Porteira Aberta.
 *
 * Por padrão usa uma recriação em SVG (não depende de arquivo).
 * Se você colocar o arquivo oficial em /public/logo.png,
 * passe `useImage` para renderizar o PNG real.
 */
export function LogoBadge({
  size = 44,
  useImage = false,
  className = "",
}: {
  size?: number;
  useImage?: boolean;
  className?: string;
}) {
  if (useImage) {
    return (
      <Image
        src="/logo.jpg"
        alt="Porteira Aberta — Projetos Agropecuários"
        width={size}
        height={size}
        className={className}
        priority
      />
    );
  }

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-label="Porteira Aberta"
      className={className}
    >
      <defs>
        <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3E8E28" />
          <stop offset="0.4" stopColor="#F4B41A" />
          <stop offset="0.7" stopColor="#E4720E" />
          <stop offset="1" stopColor="#C2185B" />
        </linearGradient>
        <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F8CB3F" />
          <stop offset="1" stopColor="#E4720E" />
        </linearGradient>
      </defs>
      {/* anel gradiente */}
      <circle cx="50" cy="50" r="48" fill="url(#ring)" />
      <circle cx="50" cy="50" r="41" fill="#FFFFFF" />
      {/* sol nascente */}
      <circle cx="50" cy="46" r="16" fill="url(#sun)" />
      {/* grama */}
      <path
        d="M14 66 Q22 58 30 66 Q38 58 46 66 Q54 58 62 66 Q70 58 78 66 L82 74 L18 74 Z"
        fill="#2F6B1E"
      />
      {/* porteira (madeira) */}
      <g fill="#6B3410">
        <rect x="30" y="40" width="5" height="28" rx="1.5" />
        <rect x="47.5" y="40" width="5" height="28" rx="1.5" />
        <rect x="65" y="40" width="5" height="28" rx="1.5" />
        <rect x="27" y="45" width="46" height="4.5" rx="2" />
        <rect x="27" y="54" width="46" height="4.5" rx="2" />
      </g>
    </svg>
  );
}

export function LogoWordmark({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoBadge size={42} />
      <div className="leading-none">
        <span
          className={`block font-display text-lg font-extrabold tracking-tight ${
            onDark ? "text-white" : "text-porteira-700"
          }`}
        >
          PORTEIRA ABERTA
        </span>
        <span
          className={`block text-[10px] font-medium tracking-[0.18em] ${
            onDark ? "text-sol-300" : "text-campo-600"
          }`}
        >
          projetos agropecuários
        </span>
      </div>
    </div>
  );
}
