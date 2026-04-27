const STATS = [
  { value: "10x", label: "Mais rápido" },
  { value: "99%", label: "Precisão" },
  { value: "15", label: "Dias grátis" },
];

export default function Hero() {

  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-clip">
      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] bg-primary/[0.04] -top-40 -left-40" />
      <div className="orb w-[500px] h-[500px] bg-secondary/[0.03] top-20 -right-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="animate-on-scroll text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Decisões Inteligentes.
            <br />
            <span className="gradient-text">
              Crescimento Real.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-on-scroll stagger-1 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Seus números finalmente vão falar o que importa.
            15 dias grátis para descobrir como.
          </p>

          {/* CTAs */}
          <div className="animate-on-scroll stagger-2 flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#planos"
              className="btn-press inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary-light transition-colors glow-primary"
            >
              Começar 15 Dias Grátis
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
              href="#como-funciona"
              className="btn-press inline-flex items-center justify-center px-8 py-4 rounded-xl border border-border text-foreground font-semibold text-base hover:bg-muted transition-colors"
            >
              Como Funciona
            </a>
          </div>

          {/* Stats */}
          <div className="animate-on-scroll stagger-3 flex justify-center gap-12 sm:gap-20 mb-20">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text-accent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Product mockup */}
          <div className="animate-on-scroll stagger-4 relative mx-auto max-w-5xl">
            <div className="glow-primary-strong rounded-2xl overflow-hidden border border-border bg-card">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <div className="flex-1 ml-4 h-6 bg-background rounded-md flex items-center px-3">
                  <span className="text-xs text-muted-foreground">
                    app.controlladoria.com.br
                  </span>
                </div>
              </div>
              {/* Mock dashboard */}
              <div className="p-6 lg:p-8 bg-card">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Receita Bruta", value: "R$ 1.284.500", change: "+12.3%" },
                    { label: "Lucro Líquido", value: "R$ 342.100", change: "+8.7%" },
                    { label: "Margem EBITDA", value: "28.4%", change: "+2.1%" },
                  ].map((card) => (
                    <div
                      key={card.label}
                      className="bg-muted rounded-xl p-4 border border-border"
                    >
                      <div className="text-xs text-muted-foreground mb-1">
                        {card.label}
                      </div>
                      <div className="text-lg font-bold text-foreground">
                        {card.value}
                      </div>
                      <div className="text-xs text-green-600 mt-1">
                        {card.change}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Chart mock */}
                <div className="bg-muted rounded-xl p-4 border border-border">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium">
                      DRE — Últimos 12 meses
                    </span>
                    <span className="text-xs text-muted-foreground">2024</span>
                  </div>
                  <div className="flex items-end gap-2 h-32">
                    {[40, 55, 45, 60, 70, 65, 80, 75, 90, 85, 95, 100].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm"
                          style={{
                            height: `${h}%`,
                            background: `linear-gradient(to top, var(--primary), var(--primary-light))`,
                            opacity: 0.6 + (i / 12) * 0.4,
                          }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
