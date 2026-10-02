import React from 'react';
import { FunnelPageData } from '../types/funnel';
import { AlertTriangle, CheckCircle2, ShieldCheck, Lock, Zap } from 'lucide-react';
import { renderHeadline } from '../utils/textUtils';

interface UpsellPageProps {
  data: FunnelPageData;
  onAccept: () => void;
  onDecline: () => void;
  checkoutUrl?: string;
}

export const UpsellPage: React.FC<UpsellPageProps> = ({
  data,
  onAccept,
  onDecline,
  checkoutUrl,
}) => {
  const isDownsell = data.type === 'downsell';

  const handleCtaClick = () => {
    if (checkoutUrl && checkoutUrl.trim() !== '') {
      window.location.assign(checkoutUrl);
      return;
    }
    onAccept();
  };

  return (
    <div className="w-full min-h-screen bg-[#F7F8FA] text-slate-950 flex flex-col items-center">
      {/* Container Mobile Centralizado (Max 480px para máxima fidelidade e legibilidade) */}
      <main className="w-full max-w-[480px] px-5 py-6 sm:px-6 sm:py-8 flex flex-col">
        
        {/* ========================================================
            1. BLOCO DE URGÊNCIA (TOPO)
           ======================================================== */}
        <section aria-label="Aviso de Urgência" className="w-full text-center mb-6">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <AlertTriangle className="w-7 h-7 text-[#D83361] animate-bounce" />
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#D83361] font-heading uppercase">
              {data.urgency.title}
            </h2>
            <AlertTriangle className="w-7 h-7 text-[#D83361] animate-bounce" />
          </div>

          <div className="bg-[#D83361]/15 border-2 border-[#D83361]/35 rounded-2xl px-4 py-3.5 text-[#880A2E] font-black text-base sm:text-[17px] leading-snug">
            {data.urgency.text}
          </div>
        </section>

        {/* ========================================================
            2. INDICADOR DE PROGRESSO
           ======================================================== */}
        <section aria-label="Progresso do Pedido" className="w-full mb-8">
          <div className="flex items-center justify-between text-sm sm:text-base font-black text-slate-950 mb-2">
            <span className="uppercase tracking-wider">{data.progress.stepText}</span>
            <span className="text-[#D83361] text-base sm:text-lg">{data.progress.percentage}%</span>
          </div>

          {/* Barra de Progresso Visual */}
          <div className="w-full h-3.5 bg-slate-300 rounded-full overflow-hidden p-0.5 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-[#D83361] to-[#E95B83] rounded-full transition-all duration-700 ease-out shadow-sm"
              style={{ width: `${data.progress.percentage}%` }}
              role="progressbar"
              aria-valuenow={data.progress.percentage}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </section>

        {/* ========================================================
            3. TÍTULO PRINCIPAL
           ======================================================== */}
        <header className="w-full text-center mb-6">
          {data.highlightBadge && (
            <div className="inline-block bg-[#D83361] text-white font-black text-base sm:text-lg px-5 py-2 rounded-full mb-3 shadow-md animate-pulse uppercase tracking-wide">
              {data.highlightBadge}
            </div>
          )}

          <h1 className="text-2xl sm:text-[32px] font-black leading-tight tracking-tight text-slate-950 font-heading">
            {renderHeadline(data.headline, data.underlinedWord, 'decoration-[#D83361]')}
          </h1>
        </header>

        {/* ========================================================
            4. ÁREA DE COPYWRITING (TEXTO ESCURO, GRANDE E DE ALTA LEGIBILIDADE)
           ======================================================== */}
        <article className="w-full flex flex-col gap-5 text-slate-950 text-lg sm:text-[20px] font-medium leading-[1.7]">
          {data.introParagraphs.map((paragraph, index) => (
            <p key={index} className="text-slate-950">
              {paragraph}
            </p>
          ))}

          {/* Bloco de Recursos / O que você recebe */}
          {data.features && data.features.length > 0 && (
            <div className="my-3 p-5 sm:p-6 bg-white rounded-2xl border-2 border-slate-300 shadow-md">
              {data.featuresTitle && (
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-4 pb-2 border-b-2 border-slate-200 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D83361]"></span>
                  {data.featuresTitle}
                </h3>
              )}
              <ul className="flex flex-col gap-4">
                {data.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-950 font-bold text-base sm:text-[18px] leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Parágrafos de Conclusão da Copy */}
          {data.concludingParagraphs && data.concludingParagraphs.length > 0 && (
            <div className="flex flex-col gap-4 font-bold text-slate-950 text-lg sm:text-[20px] leading-relaxed">
              {data.concludingParagraphs.map((concl, i) => (
                <p key={i} className="text-slate-950">
                  {concl}
                </p>
              ))}
            </div>
          )}
        </article>

        {/* ========================================================
            5. BLOCO DE PREÇO & CTA PRINCIPAL
           ======================================================== */}
        <section aria-label="Preço e Ação de Compra" className="w-full mt-8 mb-4 text-center">
          {/* Card de Preço */}
          <div className="bg-white border-2 border-slate-300 rounded-3xl p-5 mb-5 shadow-md">
            {data.pricing.oldPrice && (
              <span className="block text-slate-500 line-through text-lg sm:text-xl font-extrabold mb-1">
                {data.pricing.oldPrice}
              </span>
            )}

            <div className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight my-1">
              <span className="text-emerald-600">{data.pricing.price}</span>
            </div>

            <span className="inline-block text-sm sm:text-base font-black text-slate-700 uppercase tracking-wider">
              {data.pricing.billingText}
            </span>
          </div>

          {/* Botão Principal de Ação (CTA) — Verde Vibrante, Largo, Toque Otimizado */}
          <button
            type="button"
            onClick={handleCtaClick}
            className="w-full min-h-[62px] py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-heading font-black text-xl sm:text-2xl tracking-wide uppercase transition-all duration-200 cursor-pointer animate-pulse-cta flex items-center justify-center text-center shadow-xl shadow-emerald-600/35"
          >
            {data.ctaText}
          </button>
        </section>

        {/* ========================================================
            6. RODAPÉ E LINKS SECUNDÁRIOS
           ======================================================== */}
        <footer className="w-full text-center flex flex-col items-center mt-3 pt-2">
          {/* Link Secundário de Recusa */}
          <button
            type="button"
            onClick={onDecline}
            className="min-h-[48px] py-2 px-4 text-sm sm:text-base text-slate-700 hover:text-black font-bold underline underline-offset-4 transition-colors cursor-pointer"
          >
            [{data.declineText}]
          </button>

          {/* Selos de Confiança e Garantia */}
          <div className="w-full mt-6 pt-5 border-t-2 border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-sm font-bold text-slate-800">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Compra 100% segura</span>
            </div>
            <span className="hidden sm:inline text-slate-400">·</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Garantia de 7 dias</span>
            </div>
            <span className="hidden sm:inline text-slate-400">·</span>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Acesso no mesmo e-mail</span>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
};
