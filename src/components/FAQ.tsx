"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    q: "Isso é para quem?",
    a: "Para qualquer negócio que sinta que seus números não estão falando o que realmente importa. Pode ser você começando a organizar finanças, uma empresa em crescimento que precisa de decisões mais rápidas, ou um contador que quer entregar mais valor aos clientes. O ponto em comum: clareza financeira como base para crescimento.",
  },
  {
    q: "Preciso entender muito de finanças para usar?",
    a: "Não. Mas aqui está o ponto: se você entende finanças, vai usar a ControlladorIA para ir mais fundo e mais rápido. Se não entende, vai finalmente entender. A ferramenta traduz números em linguagem que faz sentido para quem precisa decidir.",
  },
  {
    q: "A solução substitui o olhar estratégico humano?",
    a: "Não. Ela faz o oposto: libera seu tempo de tarefas operacionais para você focar em decisões estratégicas. A IA organiza os dados; você interpreta o significado. Quanto melhor sua liderança, melhor você usa a ControlladorIA.",
  },
  {
    q: "O que eu ganho com isso, na prática?",
    a: "Depende de onde você está. Se está começando: finalmente sabe onde está seu dinheiro. Se está crescendo: toma decisões 10x mais rápido. Se é contador: entrega relatórios que seus clientes realmente entendem e usam. O ganho comum: você para de adivinhar e começa a escolher.",
  },
  {
    q: "E se eu ainda estiver em dúvida?",
    a: "Teste grátis por 15 dias. A melhor forma de resolver dúvida é ver funcionando. Se depois de testar ainda tiver perguntas, aí sim a gente conversa com mais contexto.",
  },
  {
    q: "Por que essa solução é diferente?",
    a: "Porque não é só software. É uma forma diferente de pensar controladoria: não como obrigação fiscal, mas como bússola estratégica. Enquanto outros vendem relatórios, a gente vende direção. E isso muda tudo.",
  },
  {
    q: "Como funciona o teste grátis de 15 dias?",
    a: "Você tem acesso completo a todas as funcionalidades. Pode fazer upload, gerar relatórios, testar com seus dados reais. Sem surpresas no final: se não quiser continuar, cancela direto no painel. Nenhuma ligação, nenhuma pergunta.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-muted/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Tá com dúvida? <span className="gradient-text">A gente explica.</span>
          </h2>
          <p className="animate-on-scroll stagger-1 text-lg text-muted-foreground">
            As 7 perguntas mais feitas por quem quer finalmente entender seus números.
          </p>
        </div>

        {/* Accordion */}
        <div className="animate-on-scroll stagger-2 space-y-3">
          {QUESTIONS.map((item, i) => (
            <div
              key={i}
              className="border border-border rounded-xl overflow-hidden bg-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="text-sm font-medium pr-4">{item.q}</span>
                <svg
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div
                className={`accordion-content ${openIndex === i ? "open" : ""}`}
              >
                <div className="px-6 pb-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="animate-on-scroll stagger-3 text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Ainda tem dúvida que não está aqui?{" "}
            <a href="/contato" className="text-primary hover:text-primary-light underline underline-offset-4 transition-colors">
              Fale com a gente
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
