"use client";

import { useState } from "react";

const TABS = [
  {
    id: "contabilidade",
    label: "Escritórios Contábeis",
    title: "Automatize a controladoria dos seus clientes",
    description:
      "Gerencie múltiplas empresas em uma única plataforma. Processe centenas de documentos por mês e entregue relatórios gerenciais completos para seus clientes sem esforço manual.",
    preview: [
      { role: "user", text: "Upload: 47 notas fiscais de Janeiro — Cliente ABC Ltda." },
      { role: "ai", text: "47 documentos processados. DRE, Balanço e Fluxo de Caixa de Janeiro gerados com sucesso. Receita Bruta: R$ 284.500. Lucro Líquido: R$ 42.300." },
      { role: "user", text: "Exportar DRE em formato gerencial" },
      { role: "ai", text: "DRE Gerencial exportado para Excel. Inclui comparativo com mês anterior e variação percentual." },
    ],
  },
  {
    id: "pme",
    label: "PMEs",
    title: "Controle financeiro sem complexidade",
    description:
      "Pequenas e médias empresas podem ter visão completa de suas finanças sem precisar de um departamento contábil dedicado. Envie seus documentos e receba seus relatórios.",
    preview: [
      { role: "user", text: "Preciso do fluxo de caixa do último trimestre" },
      { role: "ai", text: "Fluxo de Caixa Q4/2024 gerado. Entradas: R$ 156.200. Saídas: R$ 128.400. Saldo: R$ 27.800. Destaque: despesas operacionais subiram 8% vs Q3." },
      { role: "user", text: "Quais as maiores despesas?" },
      { role: "ai", text: "Top 3 despesas: 1) Folha de pagamento: R$ 45.600 (35.5%) 2) Aluguel e condomínio: R$ 18.200 (14.2%) 3) Fornecedores: R$ 32.100 (25%)" },
    ],
  },
  {
    id: "gestores",
    label: "Gestores Financeiros",
    title: "Decisões rápidas baseadas em dados reais",
    description:
      "Tenha acesso imediato a DRE, Balanço e Fluxo de Caixa atualizados. Compare períodos, identifique tendências e tome decisões informadas com relatórios gerados em minutos.",
    preview: [
      { role: "user", text: "Comparar DRE deste mês com mesmo período ano passado" },
      { role: "ai", text: "Comparativo pronto. Receita cresceu 23.4% (R$ 312K → R$ 385K). Margem líquida melhorou de 8.2% para 11.7%. Destaque positivo: redução de 15% em despesas administrativas." },
      { role: "user", text: "Gerar relatório para reunião de diretoria" },
      { role: "ai", text: "Relatório executivo gerado com gráficos e indicadores-chave. Inclui: DRE resumido, evolução de receita, análise de margens e projeção para próximo trimestre." },
    ],
  },
  {
    id: "startups",
    label: "Startups",
    title: "Controle financeiro desde o dia um",
    description:
      "Mantenha seus investidores informados com relatórios profissionais. Acompanhe burn rate, runway e métricas financeiras essenciais para o crescimento da sua startup.",
    preview: [
      { role: "user", text: "Qual meu burn rate atual e runway?" },
      { role: "ai", text: "Burn rate mensal: R$ 85.400. Caixa disponível: R$ 1.2M. Runway estimado: 14 meses. Recomendação: otimizar custos com infraestrutura (subiu 22% no último trimestre)." },
      { role: "user", text: "Preparar financeiro para rodada Series A" },
      { role: "ai", text: "Pacote investor-ready gerado: DRE últimos 12 meses, Balanço atual, Fluxo de Caixa projetado, unit economics e métricas SaaS (MRR, churn, LTV/CAC)." },
    ],
  },
];

export default function UseCases() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const active = TABS.find((t) => t.id === activeTab)!;

  return (
    <section id="casos-de-uso" className="relative py-24 lg:py-32 overflow-clip">
      <div className="orb w-[500px] h-[500px] bg-secondary/[0.03] -top-20 -right-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Feito para <span className="gradient-text">seu negócio</span>
          </h2>
          <p className="animate-on-scroll stagger-1 text-lg text-muted-foreground max-w-2xl mx-auto">
            Independente do tamanho ou segmento da sua empresa, a ControlladorIA
            se adapta às suas necessidades.
          </p>
        </div>

        {/* Tabs */}
        <div className="animate-on-scroll stagger-2 flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`btn-press px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="animate-on-scroll stagger-3 grid lg:grid-cols-2 gap-12 items-start">
          {/* Description */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              {active.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {active.description}
            </p>
            <a
              href="https://app.controlladoria.com.br/register"
              className="btn-press inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary-light transition-colors"
            >
              Experimentar Grátis
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </a>
          </div>

          {/* Chat preview */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs text-muted-foreground">
                ControlladorIA — Assistente
              </span>
            </div>
            <div className="p-4 space-y-4 max-h-[400px] overflow-y-auto">
              {active.preview.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary/20 text-foreground rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md border border-border"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
