"use client";

import Image from "next/image";

const FOOTER_LINKS = {
  Produto: [
    { label: "Recursos", href: "#recursos" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Planos", href: "#planos" },
    { label: "Dúvidas", href: "#faq" },
  ],
  Empresa: [
    { label: "Sobre Nós", href: "#sobre-nos" },
    { label: "Contato", href: "/contato" },
    { label: "Termos de Uso", href: "/terms" },
    { label: "Política de Privacidade", href: "/privacy" },
  ],
  "Comece Agora": [
    { label: "Criar Conta Grátis", href: "#planos" },
    { label: "Login", href: "https://app.controlladoria.com.br/login" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/logo-horizontal.svg"
              alt="ControlladorIA"
              width={246}
              height={80}
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Decisões Inteligentes.
              <br />
              Crescimento Real.
            </p>
            <p className="text-xs text-muted-foreground">
              Automatize sua controladoria
              <br />
              com inteligência artificial.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ControlladorIA. Todos os direitos
            reservados.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://wa.me/5511912261234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              +55 11 91226-1234
            </a>
            <a
              href="mailto:suporte@controlladoria.com.br"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              suporte@controlladoria.com.br
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
