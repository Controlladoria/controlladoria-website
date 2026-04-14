"use client";

const CHECK = (
  <svg className="w-4 h-4 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const PLANS = [
  {
    name: "Starter",
    price: 99,
    perUser: 99,
    users: "1 usuário",
    highlighted: false,
    cta: "Começar Grátis",
    features: [
      "1 usuário",
      "Upload ilimitado de documentos",
      "Processamento com IA avançada",
      "DRE, Balanço e Fluxo de Caixa",
      "Relatórios e análises detalhadas",
      "Fluxo de Caixa Básico",
      "Suporte por e-mail",
    ],
  },
  {
    name: "Equipe",
    price: 399,
    perUser: 80,
    users: "Até 5 usuários",
    highlighted: true,
    badge: "Mais Popular",
    cta: "Começar Grátis",
    discount: 20,
    features: [
      "Até 5 usuários",
      "Upload ilimitado de documentos",
      "Processamento com IA avançada",
      "DRE, Balanço e Fluxo de Caixa",
      "Relatórios e análises detalhadas",
      "Fluxo de Caixa — Direto e Indireto",
      "Gestão de equipe e permissões",
      "Integração via API",
      "Suporte prioritário",
    ],
  },
  {
    name: "Enterprise",
    price: null,
    perUser: null,
    users: "Usuários ilimitados",
    highlighted: false,
    cta: "Falar com Vendas",
    features: [
      "Usuários ilimitados",
      "Upload ilimitado de documentos",
      "Processamento com IA avançada",
      "DRE, Balanço e Fluxo de Caixa",
      "Relatórios e análises detalhadas",
      "Fluxo de Caixa — Direto e Indireto",
      "Gestão de equipe e permissões",
      "Integração via API",
      "Suporte dedicado + SLA",
      "Onboarding personalizado",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="planos" className="relative py-24 lg:py-32 overflow-clip">
      <div className="orb w-[500px] h-[500px] bg-primary/[0.04] top-0 left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Planos <span className="gradient-text">simples e transparentes</span>
          </h2>
          <p className="animate-on-scroll stagger-1 text-lg text-muted-foreground max-w-2xl mx-auto">
            Comece com 15 dias grátis. Sem cartão de crédito. Cancele quando
            quiser.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-start">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`animate-on-scroll stagger-${i + 1} relative rounded-2xl border p-6 lg:p-8 transition-all ${
                plan.highlighted
                  ? "border-primary/50 bg-card glow-primary-strong scale-[1.02] lg:scale-105"
                  : "border-border bg-card hover:border-primary/20"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.users}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {plan.price !== null ? (
                  <>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-muted-foreground">R$</span>
                      <span className="text-5xl font-bold">{plan.perUser}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      por usuário / mês
                    </p>
                    {plan.discount && (
                      <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-green-400/10 rounded-lg">
                        <span className="text-sm text-muted-foreground line-through">
                          R$ {plan.perUser === 80 ? 495 : plan.price}
                        </span>
                        <span className="text-sm font-medium text-green-400">
                          R$ {plan.price}/mês total
                        </span>
                        <span className="text-xs font-bold text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">
                          -{plan.discount}%
                        </span>
                      </div>
                    )}
                    {!plan.discount && (
                      <p className="text-sm text-muted-foreground mt-1">
                        R$ {plan.price}/mês total
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <div className="text-4xl font-bold">Sob consulta</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Preço personalizado
                    </p>
                  </>
                )}
              </div>

              <p className="text-sm font-medium text-green-400 mb-6">
                15 dias grátis
              </p>

              {/* CTA */}
              <a
                href="#"
                className={`btn-press block text-center px-6 py-3 rounded-xl font-semibold text-sm transition-all mb-8 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary-light glow-primary"
                    : "bg-muted text-foreground hover:bg-muted/80 border border-border"
                }`}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    {CHECK}
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Pagamento 100% seguro e criptografado.
            Aceitamos cartão, PIX e boleto.
          </p>
        </div>
      </div>
    </section>
  );
}
