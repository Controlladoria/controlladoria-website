"use client";

import { useState, useEffect, useRef } from "react";

// ── Mini animated bar chart ────────────────────────────────────────────────────
const MONTHS = ["J","F","M","A","M","J","J","A","S","O","N","D"];
const HEIGHTS = [38, 48, 43, 55, 50, 60, 57, 67, 62, 72, 68, 80];

function MiniChart({ trigger }: { trigger: boolean }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!trigger) return;
    const t = setTimeout(() => setReady(true), 150);
    return () => clearTimeout(t);
  }, [trigger]);

  return (
    <div className="flex items-end gap-[3px] h-20 mt-2">
      {HEIGHTS.map((h, i) => (
        <div key={i} className="flex-1 flex flex-col items-center">
          <div
            className="w-full rounded-t-sm"
            style={{
              height: ready ? `${h}%` : "2px",
              transition: `height 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 38}ms`,
              background: `linear-gradient(to top, #0d767b, #0ea5ab)`,
              opacity: 0.5 + (i / HEIGHTS.length) * 0.5,
            }}
          />
        </div>
      ))}
    </div>
  );
}

// ── Shared tiny components ─────────────────────────────────────────────────────
function KCard({ label, value, change }: { label: string; value: string; change: string }) {
  return (
    <div className="bg-white rounded-lg p-2.5 border border-gray-100 shadow-sm">
      <div className="text-[9px] font-semibold uppercase tracking-wide text-[#0d767b] mb-1">{label}</div>
      <div className="text-[12px] font-bold text-gray-900 leading-tight">{value}</div>
      <div className="text-[9px] text-green-600 mt-0.5">{change}</div>
    </div>
  );
}

// ── DASHBOARD screen ───────────────────────────────────────────────────────────
function DashboardScreen({ trigger }: { trigger: boolean }) {
  return (
    <div className="space-y-2.5">
      <div className="grid grid-cols-3 gap-2">
        <KCard label="Receita Bruta"  value="R$ 1.284.500" change="+12.3% vs ano ant." />
        <KCard label="Lucro Líquido"  value="R$ 283.603"   change="+8.7% vs ano ant." />
        <KCard label="Margem EBITDA"  value="27.0%"        change="+2.1pp vs ano ant." />
      </div>

      <div className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-semibold text-gray-700">DRE Gerencial — Últimos 12 meses</span>
          <span className="text-[9px] text-gray-400">2024</span>
        </div>
        <MiniChart trigger={trigger} />
        <div className="flex justify-between mt-1">
          {MONTHS.map((m, i) => (
            <span key={i} className="text-[8px] text-gray-400 flex-1 text-center">{m}</span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-semibold text-gray-700 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            Indicadores Gerenciais
          </span>
          <span className="text-[9px] text-[#0d767b] font-medium">Automático</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {[
            { label: "Margem EBITDA",    value: "27.0%", dot: "▲" },
            { label: "Margem Líquida",   value: "22.1%", dot: "▲" },
            { label: "ROI",              value: "8.3%",  dot: "▲" },
            { label: "Liq. Corrente",    value: "1.82",  dot: "●" },
          ].map((ind) => (
            <div key={ind.label} className="bg-gray-50 rounded-md p-2 text-center border border-gray-100">
              <div className="text-[8px] text-[#0d767b] mb-0.5 leading-tight">{ind.label}</div>
              <div className="text-[11px] font-bold text-gray-900">{ind.value}</div>
              <div className="text-[8px] text-green-600">{ind.dot} ok</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── DRE screen ─────────────────────────────────────────────────────────────────
function DRERow({
  label, value, pct, indent = false, highlight = false, green = false,
}: {
  label: string; value: string; pct: string;
  indent?: boolean; highlight?: boolean; green?: boolean;
}) {
  return (
    <div
      className={`flex items-center py-[5px] px-2 ${highlight ? "bg-[#0d767b]/5 rounded" : ""} ${indent ? "pl-5" : ""}`}
    >
      <span className={`flex-1 text-[10px] ${highlight ? "font-semibold text-gray-800" : "text-gray-500"}`}>
        {label}
      </span>
      <span className={`text-[10px] font-medium w-28 text-right ${green ? "text-green-700" : "text-gray-800"}`}>
        {value}
      </span>
      <span className="text-[9px] text-gray-400 w-10 text-right">{pct}</span>
    </div>
  );
}

function DREScreen() {
  return (
    <div>
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[11px] font-bold text-gray-800">DRE Gerencial</span>
        <span className="text-[9px] bg-white border border-gray-200 rounded-full px-2.5 py-0.5 text-gray-500 shadow-sm">
          Jan – Dez 2024
        </span>
      </div>
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex items-center py-1.5 px-2 bg-gray-50 border-b border-gray-100">
          <span className="flex-1 text-[9px] font-bold text-gray-400 uppercase">Descrição</span>
          <span className="text-[9px] font-bold text-gray-400 w-28 text-right">Valor</span>
          <span className="text-[9px] font-bold text-gray-400 w-10 text-right">%</span>
        </div>
        <DRERow label="(+) Receita Bruta"          value="R$ 1.284.500" pct="100%" highlight />
        <DRERow label="(-) Deduções e Impostos"    value="(R$ 128.450)" pct="10.0%" indent />
        <DRERow label="= Receita Líquida"          value="R$ 1.156.050" pct="90.0%" highlight />
        <DRERow label="(-) CMV / CSP"              value="(R$ 578.025)" pct="45.0%" indent />
        <DRERow label="= Lucro Bruto"              value="R$ 578.025"   pct="45.0%" highlight />
        <DRERow label="(-) Despesas Operacionais"  value="(R$ 231.210)" pct="18.0%" indent />
        <DRERow label="= EBITDA"                   value="R$ 346.815"   pct="27.0%" highlight green />
        <DRERow label="(-) Depreciação"            value="(R$ 4.715)"   pct="0.4%"  indent />
        <DRERow label="= EBIT"                     value="R$ 342.100"   pct="26.6%" highlight />
        <DRERow label="(-) Resultado Financeiro"   value="(R$ 8.450)"   pct="0.7%"  indent />
        <DRERow label="(-) IRPJ / CSLL"            value="(R$ 50.047)"  pct="3.9%"  indent />
        <DRERow label="= Lucro Líquido"            value="R$ 283.603"   pct="22.1%" highlight green />
      </div>
    </div>
  );
}

// ── BALANÇO screen ─────────────────────────────────────────────────────────────
function BRow({ label, value, sub = false, total = false }: {
  label: string; value: string; sub?: boolean; total?: boolean;
}) {
  return (
    <div
      className={`flex items-center py-[4px] ${sub ? "pl-3" : ""} ${total ? "border-t border-gray-200 mt-1 pt-1" : ""}`}
    >
      <span className={`flex-1 text-[10px] ${total ? "font-bold text-gray-900" : sub ? "text-gray-500" : "font-semibold text-gray-700"}`}>
        {label}
      </span>
      <span className={`text-[10px] ${total ? "font-bold text-gray-900" : "text-gray-600"}`}>{value}</span>
    </div>
  );
}

function BalancoScreen() {
  return (
    <div>
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[11px] font-bold text-gray-800">Balanço Gerencial</span>
        <span className="text-[9px] bg-white border border-gray-200 rounded-full px-2.5 py-0.5 text-gray-500 shadow-sm">
          Dez 2024
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-3">
          <div className="text-[10px] font-bold text-[#0d767b] mb-2 pb-1.5 border-b border-gray-100">ATIVO</div>
          <BRow label="Ativo Circulante"   value="R$ 842.300" />
          <BRow label="Caixa e Equiv."     value="R$ 412.100" sub />
          <BRow label="Contas a Receber"   value="R$ 285.400" sub />
          <BRow label="Estoques"           value="R$ 144.800" sub />
          <BRow label="Ativo Não Circ."    value="R$ 320.500" />
          <BRow label="Imobilizado líq."   value="R$ 298.200" sub />
          <BRow label="Intangível"         value="R$ 22.300"  sub />
          <BRow label="TOTAL ATIVO"        value="R$ 1.162.800" total />
        </div>
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-3">
          <div className="text-[10px] font-bold text-[#0d767b] mb-2 pb-1.5 border-b border-gray-100">PASSIVO + PL</div>
          <BRow label="Passivo Circulante"  value="R$ 284.100" />
          <BRow label="Fornecedores"        value="R$ 142.500" sub />
          <BRow label="Obrig. Fiscais"      value="R$ 87.300"  sub />
          <BRow label="Outras Obrig."       value="R$ 54.300"  sub />
          <BRow label="Passivo Não Circ."   value="R$ 195.800" />
          <BRow label="Empréstimos LP"      value="R$ 195.800" sub />
          <BRow label="Patrimônio Líquido"  value="R$ 682.900" />
          <BRow label="Cap. Social"         value="R$ 399.297" sub />
          <BRow label="Lucros Acumulados"   value="R$ 283.603" sub />
          <BRow label="TOTAL PASSIVO+PL"    value="R$ 1.162.800" total />
        </div>
      </div>
    </div>
  );
}

// ── FLUXO DE CAIXA screen ──────────────────────────────────────────────────────
function FluxoSection({
  title, items, subtotal, positive,
}: {
  title: string;
  items: { label: string; value: string }[];
  subtotal: string;
  positive: boolean;
}) {
  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-3">
      <div className="text-[10px] font-bold text-gray-700 mb-1.5">{title}</div>
      {items.map((item) => (
        <div key={item.label} className="flex justify-between py-[3px]">
          <span className="text-[10px] text-gray-500 pl-2">{item.label}</span>
          <span className="text-[10px] text-gray-700">{item.value}</span>
        </div>
      ))}
      <div className="flex justify-between items-center pt-1.5 mt-1 border-t border-gray-100">
        <span className="text-[10px] font-semibold text-gray-700">Subtotal</span>
        <span className={`text-[11px] font-bold ${positive ? "text-green-700" : "text-red-600"}`}>{subtotal}</span>
      </div>
    </div>
  );
}

function FluxoScreen() {
  return (
    <div>
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[11px] font-bold text-gray-800">Fluxo de Caixa</span>
        <span className="text-[9px] bg-white border border-gray-200 rounded-full px-2.5 py-0.5 text-gray-500 shadow-sm">
          Jan – Dez 2024
        </span>
      </div>
      <div className="space-y-2">
        <FluxoSection
          title="Atividades Operacionais"
          items={[
            { label: "Recebimentos de clientes",  value: "R$ 1.198.200"  },
            { label: "Pagamentos a fornecedores", value: "(R$ 612.400)" },
            { label: "Despesas operacionais",     value: "(R$ 218.900)" },
            { label: "Impostos e encargos",       value: "(R$ 112.300)" },
          ]}
          subtotal="+R$ 254.600"
          positive
        />
        <FluxoSection
          title="Atividades de Investimento"
          items={[
            { label: "Aquisição de imobilizado", value: "(R$ 48.500)" },
            { label: "Venda de ativos",          value: "R$ 12.200"   },
          ]}
          subtotal="(R$ 36.300)"
          positive={false}
        />
        <FluxoSection
          title="Atividades de Financiamento"
          items={[
            { label: "Amortização de empréstimos", value: "(R$ 32.800)" },
            { label: "Distribuição de lucros",     value: "(R$ 84.000)" },
          ]}
          subtotal="(R$ 116.800)"
          positive={false}
        />
        <div className="flex justify-between items-center bg-[#0d767b]/10 rounded-lg px-3 py-2.5">
          <span className="text-[10px] font-bold text-gray-800">Variação de Caixa (líquida)</span>
          <span className="text-[12px] font-bold text-green-700">+R$ 101.500</span>
        </div>
      </div>
    </div>
  );
}

// ── INDICADORES screen ─────────────────────────────────────────────────────────
const INDICATORS_FULL = [
  { label: "Margem Bruta",       value: "45.0%",  status: "ok",      trend: "▲" },
  { label: "Margem EBITDA",      value: "27.0%",  status: "ok",      trend: "▲" },
  { label: "Margem Líquida",     value: "22.1%",  status: "ok",      trend: "▲" },
  { label: "ROI",                value: "8.3%",   status: "ok",      trend: "▲" },
  { label: "Liquidez Corrente",  value: "1.82",   status: "ok",      trend: "●" },
  { label: "Liquidez Imediata",  value: "1.01",   status: "ok",      trend: "●" },
  { label: "Endividamento",      value: "41.2%",  status: "atenção", trend: "▲" },
  { label: "ROE",                value: "41.5%",  status: "ok",      trend: "▲" },
  { label: "Giro do Ativo",      value: "1.10x",  status: "ok",      trend: "▲" },
];

function IndicadoresScreen() {
  return (
    <div>
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[11px] font-bold text-gray-800">Indicadores Gerenciais</span>
        <span className="text-[9px] text-[#0d767b] font-medium">Automático — Dez 2024</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {INDICATORS_FULL.map((ind) => (
          <div key={ind.label} className="bg-white rounded-lg border border-gray-100 shadow-sm p-2.5">
            <div className="text-[9px] text-[#0d767b] font-medium mb-1 leading-tight">{ind.label}</div>
            <div className="text-[13px] font-bold text-gray-900 mb-0.5">{ind.value}</div>
            <div className={`text-[9px] font-medium ${ind.status === "ok" ? "text-green-600" : "text-yellow-600"}`}>
              {ind.trend} {ind.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Nav icons ──────────────────────────────────────────────────────────────────
const Icons: Record<string, React.ReactNode> = {
  dashboard: (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zm9.75-9.75c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v16.5c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V3.375zm-5 5.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V9z" />
    </svg>
  ),
  dre: (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  balanco: (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97z" />
    </svg>
  ),
  fluxo: (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" />
    </svg>
  ),
  indicadores: (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
    </svg>
  ),
};

const NAV = [
  { id: "dashboard",   label: "Dashboard" },
  { id: "dre",         label: "DRE Gerencial" },
  { id: "balanco",     label: "Balanço Gerencial" },
  { id: "fluxo",       label: "Fluxo de Caixa" },
  { id: "indicadores", label: "Indicadores" },
];

// ── Main component ─────────────────────────────────────────────────────────────
export default function InteractiveDemo() {
  const [active, setActive] = useState("dashboard");
  const [chartTrigger, setChartTrigger] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Trigger chart animation when demo becomes visible
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          setTimeout(() => setChartTrigger(true), 200);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Re-trigger chart when switching back to dashboard
  const handleNav = (id: string) => {
    if (id === "dashboard" && active !== "dashboard") {
      setChartTrigger(false);
      setTimeout(() => setChartTrigger(true), 80);
    }
    setActive(id);
  };

  return (
    <div
      ref={containerRef}
      className="glow-primary-strong rounded-2xl overflow-hidden border border-border bg-card shadow-2xl"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-muted border-b border-border">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <div className="flex-1 mx-3 h-5 bg-background/70 rounded flex items-center px-3">
          <span className="text-[10px] text-muted-foreground">app.controlladoria.com.br</span>
        </div>
      </div>

      {/* App shell */}
      <div className="flex" style={{ height: "430px" }}>
        {/* Sidebar */}
        <div className="w-44 bg-[#0b5e63] flex flex-col py-3 shrink-0">
          <div className="px-3 mb-4">
            <div className="text-[11px] font-bold text-white/90 tracking-tight">ControlladorIA</div>
            <div className="text-[9px] text-white/50 mt-0.5">Empresa Demo Ltda</div>
          </div>

          <nav className="flex-1 space-y-px px-1.5">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-left transition-all ${
                  active === item.id
                    ? "bg-white/20 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {Icons[item.id]}
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Demo badge */}
          <div className="px-3 pb-1">
            <div className="flex items-center gap-1.5 px-2 py-1.5 bg-white/10 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
              <span className="text-[9px] text-white/60">Modo Demo</span>
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto bg-[#f1f5f9] p-3">
          {active === "dashboard"   && <DashboardScreen trigger={chartTrigger} />}
          {active === "dre"         && <DREScreen />}
          {active === "balanco"     && <BalancoScreen />}
          {active === "fluxo"       && <FluxoScreen />}
          {active === "indicadores" && <IndicadoresScreen />}
        </div>
      </div>
    </div>
  );
}
