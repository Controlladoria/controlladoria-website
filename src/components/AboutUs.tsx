"use client";

export default function AboutUs() {
  return (
    <section id="sobre-nos" className="relative py-24 lg:py-32 overflow-clip">
      <div className="orb w-[400px] h-[400px] bg-secondary/[0.03] top-0 -right-40" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Sobre <span className="gradient-text">nós</span>
          </h2>
        </div>

        <div className="animate-on-scroll space-y-8 text-muted-foreground leading-relaxed">
          <p>
            A controladoria é o coração estratégico de qualquer negócio próspero. Longe de ser apenas um departamento de números, ela é a inteligência que traduz dados complexos em informações claras, fornecendo a base sólida para cada decisão.
          </p>

          <p>
            Na ControlladorIA, compreendemos que a ausência de uma controladoria eficaz pode levar à incerteza, à perda de oportunidades e, em última instância, à estagnação. Por isso, posicionamos a controladoria como o pilar fundamental para a tomada de decisão estratégica e o crescimento sustentável da sua empresa.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Nosso Propósito</h3>
              <p className="text-sm">
                Capacitar empresas a tomarem decisões informadas, seguras e estratégicas. Acreditamos que a inteligência estratégica deve ser acessível a todos, não um privilégio de poucos.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Nossa Visão</h3>
              <p className="text-sm">
                Transformar a relação do empresário com seus números. Converter o que antes era uma fonte de ansiedade em uma ferramenta de poder e clareza.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">O que nos diferencia</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Precisão Analítica", desc: "Dados processados com rigor e tecnologia de ponta." },
                { title: "Comunicação Clara", desc: "Relatórios que fazem sentido para quem decide, não só para contadores." },
                { title: "Visão Estratégica", desc: "De relatório fiscal a bússola de negócio." },
                { title: "Parceria Ativa", desc: "Mais que um fornecedor, somos seu parceiro estratégico." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 items-start">
                  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
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
