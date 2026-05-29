"use client";

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-clip">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="orb w-[600px] h-[600px] bg-primary/[0.05] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Pronto para descobrir como seus números podem{" "}
          <span className="gradient-text">guiar seu negócio?</span>
        </h2>
        <p className="animate-on-scroll stagger-1 text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          15 dias grátis. Sem cartão. Sem surpresa.
        </p>
        <div className="animate-on-scroll stagger-2 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://app.controlladoria.com.br/register"
            className="btn-press inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary-light transition-colors glow-primary"
          >
            Começar Grátis
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5-5 5M6 12h12"
              />
            </svg>
          </a>
          <a
            href="/contato"
            className="btn-press inline-flex items-center justify-center px-8 py-4 rounded-xl border border-border text-foreground font-semibold text-base hover:bg-muted transition-colors"
          >
            Falar com Vendas
          </a>
        </div>
      </div>
    </section>
  );
}
