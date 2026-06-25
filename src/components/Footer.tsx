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
          <div className="flex items-center gap-4">
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
