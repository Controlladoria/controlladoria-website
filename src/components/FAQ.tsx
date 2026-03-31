"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    q: "Como funciona o teste grátis de 15 dias?",
    a: "Você tem acesso completo a todas as funcionalidades por 15 dias, sem precisar informar cartão de crédito. Após o período de teste, você escolhe o plano que melhor se encaixa e a assinatura é renovada automaticamente. Pode cancelar a qualquer momento durante o teste sem ser cobrado.",
  },
  {
    q: "Quais tipos de documentos são aceitos?",
    a: "Aceitamos PDF, imagens (JPG, PNG), planilhas Excel, e XMLs de notas fiscais (NF-e, NFS-e). Isso inclui notas fiscais, boletos, recibos, comprovantes de pagamento e extratos bancários.",
  },
  {
    q: "A IA é realmente precisa nos relatórios?",
    a: "Sim. Utilizamos modelos de IA avançados (GPT-4o e Claude) com taxa de precisão superior a 99% na extração de dados. Todos os relatórios passam por validação automática e você pode revisar e ajustar qualquer valor antes de finalizar.",
  },
  {
    q: "Posso cancelar minha assinatura a qualquer momento?",
    a: "Sim! Não há fidelidade mínima, multas ou taxas de cancelamento. Você pode cancelar diretamente pelo painel de gerenciamento da sua conta a qualquer momento.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Aceitamos todas as principais formas de pagamento através do Stripe: cartões de crédito (Visa, Mastercard, Amex), cartões de débito, PIX e boleto bancário.",
  },
  {
    q: "Existe limite de documentos para upload?",
    a: "Não! Você pode fazer upload ilimitado de documentos em qualquer plano. Processamos todos os seus documentos sem restrições de volume.",
  },
  {
    q: "Meus dados estão seguros?",
    a: "Absolutamente. Utilizamos criptografia de ponta a ponta, servidores seguros com certificação SOC2, e seguimos todas as práticas de segurança recomendadas pela LGPD. Seus dados financeiros nunca são compartilhados com terceiros.",
  },
  {
    q: "É possível integrar com meu sistema atual?",
    a: "Sim, nos planos Equipe e Enterprise oferecemos integração via API RESTful completa. Você pode conectar a ControlladorIA ao seu ERP, sistema contábil ou qualquer outra ferramenta que sua empresa utilize.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
          <p className="animate-on-scroll stagger-1 text-lg text-muted-foreground">
            Tire suas dúvidas sobre a ControlladorIA.
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
      </div>
    </section>
  );
}
