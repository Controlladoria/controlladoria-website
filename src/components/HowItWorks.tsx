"use client";

const STEPS = [
  {
    number: "01",
    title: "Envie seus documentos",
    description:
      "Mande tudo: PDFs bagunçados, prints, extratos, notas. Simples assim.",
    visual: (
      <div className="bg-card border border-border rounded-2xl p-6 animate-float">
        <div className="space-y-3">
          {["NF-e_Janeiro.xml", "Extrato_Banco.pdf", "Boletos_Fev.pdf"].map(
            (file, i) => (
              <div
                key={file}
                className="flex items-center gap-3 p-3 bg-muted rounded-lg border border-border"
              >
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm truncate">{file}</div>
                  <div className="text-xs text-muted-foreground">
                    {["245 KB", "1.2 MB", "890 KB"][i]}
                  </div>
                </div>
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
            )
          )}
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "IA processa e classifica",
    description:
      "Enquanto você toma café, nossa IA lê tudo, entende e organiza como se fosse um contador experiente.",
    visual: (
      <div className="bg-card border border-border rounded-2xl p-6 animate-float-slow">
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-muted-foreground">
              Processando com IA...
            </span>
          </div>
          {[
            { cat: "Receita Bruta", val: "R$ 85.400,00", color: "text-green-600" },
            { cat: "CMV", val: "R$ 34.200,00", color: "text-red-600" },
            { cat: "Despesas Adm.", val: "R$ 12.800,00", color: "text-yellow-600" },
          ].map((item) => (
            <div
              key={item.cat}
              className="flex justify-between items-center p-3 bg-muted rounded-lg border border-border"
            >
              <span className="text-sm">{item.cat}</span>
              <span className={`text-sm font-mono font-medium ${item.color}`}>
                {item.val}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Relatórios prontos",
    description:
      "Você recebe relatórios que fazem sentido. Pronto para Excel, pronto para apresentar, pronto para decidir. Tudo isso em uma plataforma — sem precisar de contador terceirizado (por enquanto).",
    visual: (
      <div className="bg-card border border-border rounded-2xl p-6 animate-float-delay">
        <div className="space-y-3">
          <div className="text-sm font-medium mb-3">
            Relatórios Disponíveis
          </div>
          {[
            { name: "DRE Gerencial", icon: "📊" },
            { name: "Balanço Patrimonial", icon: "⚖️" },
            { name: "Fluxo de Caixa", icon: "💰" },
          ].map((report) => (
            <div
              key={report.name}
              className="flex items-center justify-between p-3 bg-muted rounded-lg border border-border"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{report.icon}</span>
                <span className="text-sm">{report.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 bg-green-400/10 text-green-600 rounded">
                  Pronto
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 lg:py-32 overflow-clip">
      <div className="orb w-[400px] h-[400px] bg-primary/[0.03] top-1/2 -left-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Como <span className="gradient-text">funciona</span>
          </h2>
          <p className="animate-on-scroll stagger-1 text-lg text-muted-foreground max-w-2xl mx-auto">
            Em três passos simples, transforme documentos financeiros em
            relatórios gerenciais completos.
          </p>
        </div>

        {/* How it works intro */}
        <div className="animate-on-scroll text-center mb-16 max-w-2xl mx-auto">
          <div className="space-y-3 text-muted-foreground">
            <p>Você envia os documentos do seu negócio.</p>
            <p>A IA processa, interpreta e organiza as informações.</p>
            <p>Você recebe uma leitura estruturada que ajuda a enxergar o que está acontecendo com mais clareza.</p>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-24 lg:space-y-32">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`animate-on-scroll flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-20`}
            >
              {/* Text */}
              <div className="flex-1 max-w-lg">
                <div className="text-7xl lg:text-8xl font-bold text-muted/80 mb-4 select-none">
                  {step.number}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Visual */}
              <div className="flex-1 w-full max-w-md">{step.visual}</div>
            </div>
          ))}
        </div>

        {/* Benefits + CTA */}
        <div className="animate-on-scroll mt-24 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-6">Com a ControlladorIA, você tende a ganhar:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-10">
            {[
              "Deixa de adivinhar e começa a escolher",
              "Seus números você entende. Sem ajuda de especialista.",
              "Economia de 15+ horas/mês em tarefas operacionais",
              "Visualiza cenários 3 meses à frente com confiança",
              "Decisões baseadas em dados, não em intuição",
              "Você estrategiza. A IA operacionaliza.",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-muted-foreground">
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {item}
              </div>
            ))}
          </div>
          <a
            href="#planos"
            className="btn-press inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary-light transition-colors"
          >
            Experimentar Grátis
          </a>
        </div>
      </div>
    </section>
  );
}
