"use client";

const CHECK = (
  <svg className="w-4 h-4 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const PLANS = [
  {
    name: "Visão",
    subtitle: "Para começar a enxergar seu negócio com clareza.",
    originalPrice: 149,
    price: 99,
    users: "1 usuário",
    saving: 50,
    highlighted: false,
    cta: "Começar Grátis",
    features: [
      "Upload ilimitado de imagens, PDFs e XMLs",
      "IA avançada para extração de dados",
      "DRE, Balanço e Fluxo de Caixa",
      "Suporte por e-mail",
    ],
  },
  {
    name: "Direção",
    subtitle: "Para crescer com direção estratégica segura.",
    originalPrice: 499,
    price: 399,
    users: "Até 5 usuários",
    saving: 100,
    highlighted: true,
    badge: "Mais Popular",
    cta: "Começar Grátis",
    features: [
      "Tudo do Visão +",
      "Gestão de equipe e permissões",
      "Suporte prioritário",
    ],
  },
  {
    name: "Expansão",
    subtitle: "Para empresas que crescem sem limites.",
    originalPrice: null,
    price: null,
    users: "Usuários ilimitados",
    saving: null,
    highlighted: false,
    cta: "Falar com Vendas",
    features: [
      "Tudo do Direção +",
      "Suporte dedicado",
      "SLA garantido",
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
            Comece agora e conheça a{" "}
            <span className="gradient-text">ControlladorIA na prática</span>
          </h2>
          <p className="animate-on-scroll stagger-1 text-lg text-muted-foreground max-w-2xl mx-auto">
            Se você quer tomar decisões com mais clareza, o próximo passo é simples:
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
                <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {plan.price !== null ? (
                  <>
                    {plan.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through mb-1">
                        R$ {plan.originalPrice},00
                      </div>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-muted-foreground">R$</span>
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <span className="text-sm text-muted-foreground">/mês</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {plan.users}
                    </p>
                    {plan.saving && (
                      <div className="mt-2 inline-flex items-center px-3 py-1 bg-green-400/10 rounded-lg">
                        <span className="text-sm font-medium text-green-400">
                          Economize R$ {plan.saving},00
                        </span>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="text-4xl font-bold">Sob consulta</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {plan.users}
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
          <p className="text-base text-muted-foreground mt-6 max-w-2xl mx-auto">
            Entre, explore a proposta e veja como a sua rotina de controladoria pode ganhar mais estrutura, mais inteligência e mais direção.
          </p>
        </div>
      </div>
    </section>
  );
}
