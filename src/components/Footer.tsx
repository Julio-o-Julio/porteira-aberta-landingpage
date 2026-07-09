import { LogoWordmark } from "./ui/Logo";
import { navLinks, site, whatsappLink } from "@/lib/site";
import { Instagram, MapPin, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-porteira-900 text-white/80">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <LogoWordmark onDark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              {site.tagline}. Projetos agropecuários e crédito rural para o
              produtor crescer com segurança.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-sol-300">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-sol-300">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-white/70 transition-colors hover:text-white"
                >
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-campo-300" />
                  WhatsApp — fale com a gente
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-2.5 text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-campo-300" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-campo-300" />
                {site.address}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-sol-300">
              Redes
            </h3>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/10"
            >
              <Instagram className="h-4 w-4" />
              @porteiraabertaprojetosagrop
            </a>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>Sicredi</Badge>
              <Badge>Cresol</Badge>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.fullName}. Todos os direitos reservados.
          </p>
          <p>CNPJ {site.cnpj}</p>
        </div>
      </div>
    </footer>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-semibold text-white/70">
      Parceiro {children}
    </span>
  );
}
