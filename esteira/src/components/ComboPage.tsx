import React, { useState, useEffect } from 'react';
import { FunnelPageData } from '../types/funnel';
import { Clock, ShieldCheck, Lock, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { renderHeadline } from '../utils/textUtils';

interface ComboPageProps {
  data: FunnelPageData;
  onAccept: () => void;
  onDecline: () => void;
  checkoutUrl?: string;
}

export const ComboPage: React.FC<ComboPageProps> = ({
  data,
  onAccept,
  onDecline,
  checkoutUrl,
}) => {
  // 5 minutes countdown timer (300 seconds)
  const initialSeconds = data.timerDurationSeconds || 300;
  const [secondsRemaining, setSecondsRemaining] = useState<number>(initialSeconds);

  useEffect(() => {
    if (secondsRemaining <= 0) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsRemaining]);

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const handleCtaClick = () => {
    if (checkoutUrl && checkoutUrl.trim() !== '') {
      window.location.assign(checkoutUrl);
      return;
    }
    onAccept();
  };

  return (
    <div className="w-full min-h-screen bg-[#0D0B18] text-white flex flex-col items-center">
      {/* Container Mobile Centralizado */}
      <main className="w-full max-w-[480px] px-5 py-6 sm:px-6 sm:py-8 flex flex-col">
        
        {/* ========================================================
            1. BLOCO DE URGÊNCIA (TOPO - DOURADO / ROXO ESCURO)
           ======================================================== */}
        <section aria-label="Alerta de Última Oportunidade" className="w-full text-center mb-6">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-6 h-6 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-amber-400 font-heading uppercase">
              {data.urgency.title}
            </h2>
            <Sparkles className="w-6 h-6 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
          </div>

          <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl px-4 py-3 text-amber-200 font-semibold text-sm sm:text-base leading-snug">
            {data.urgency.text}
          </div>

          {/* TIMER DE CONTAGEM REGRESSIVA (5 MINUTOS) */}
          <div className="mt-4 p-3 bg-neutral-900/90 border border-amber-500/40 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-amber-500/10">
            <Clock className="w-5 h-5 text-amber-400 animate-pulse" />
            <span className="text-xs sm:text-sm uppercase tracking-wider text-neutral-300 font-bold">
              Oferta expira em:
            </span>
            <div className="font-mono text-2xl font-black text-amber-400 tracking-wider tabular-nums px-2.5 py-0.5 bg-neutral-950 rounded-lg border border-amber-500/30">
              {formattedTime}
            </div>
          </div>
        </section>

        {/* ========================================================
            2. INDICADOR DE PROGRESSO DOURADO (100%)
           ======================================================== */}
        <section aria-label="Progresso Final" className="w-full mb-8">
          <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-neutral-300 mb-2">
            <span className="text-amber-300">{data.progress.stepText}</span>
            <span className="text-amber-400 font-black">{data.progress.percentage}%</span>
          </div>

          {/* Barra de Progresso Dourada 100% */}
          <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden p-0.5 shadow-inner border border-amber-500/20">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 rounded-full w-full shadow-sm shadow-amber-400/50"
              role="progressbar"
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </section>

        {/* ========================================================
            3. TÍTULO PRINCIPAL
           ======================================================== */}
        <header className="w-full text-center mb-6">
          <h1 className="text-2xl sm:text-[30px] font-black leading-tight tracking-tight text-white font-heading">
            {renderHeadline(data.headline, data.underlinedWord, 'decoration-amber-400')}
          </h1>
        </header>

        {/* ========================================================
            4. ÁREA DE COPYWRITING DO COMBO
           ======================================================== */}
        <article className="w-full flex flex-col gap-5 text-white text-lg sm:text-[20px] font-medium leading-[1.7]">
          <p className="text-white">
            Você acabou de recusar todos os complementos. E eu entendo. Você não queria gastar mais do que planejou. Faz total sentido.
          </p>

          <p className="text-amber-400 font-extrabold text-xl">
            Mas agora eu preciso ser honesta com você.
          </p>

          <p className="text-white">
            Os 100 projetos que você comprou são incríveis. Mas sozinhos, eles são só o começo.
          </p>

          {/* Lista de perdas sem os complementos */}
          <div className="my-2 p-5 bg-neutral-900 rounded-3xl border-2 border-red-500/40 flex flex-col gap-3.5 text-base sm:text-lg text-white font-semibold">
            <p className="flex items-start gap-2.5">
              <span className="text-red-400 font-black text-xl leading-none">✕</span>
              <span>Sem os fornecedores certos, você vai pagar o triplo em material.</span>
            </p>
            <p className="flex items-start gap-2.5">
              <span className="text-red-400 font-black text-xl leading-none">✕</span>
              <span>Sem a coleção infantil, você vai perder o nicho que mais vende.</span>
            </p>
            <p className="flex items-start gap-2.5">
              <span className="text-red-400 font-black text-xl leading-none">✕</span>
              <span>Sem o catálogo de vendas, você vai continuar mandando foto solta no WhatsApp.</span>
            </p>
            <p className="flex items-start gap-2.5">
              <span className="text-red-400 font-black text-xl leading-none">✕</span>
              <span>Sem a embalagem certa, seu brinco vai parecer caseiro e não de loja.</span>
            </p>
            <p className="flex items-start gap-2.5">
              <span className="text-red-400 font-black text-xl leading-none">✕</span>
              <span>Sem a produção em série, você vai fazer 1 par por dia em vez de 10.</span>
            </p>
            <p className="flex items-start gap-2.5">
              <span className="text-red-400 font-black text-xl leading-none">✕</span>
              <span>Sem a linha de luxo, você vai ficar presa no brinco de R$50 pra sempre.</span>
            </p>
          </div>

          <p className="text-white">
            Cada um desses complementos resolve uma parte do caminho. E juntos, eles são o que separa a artesã que faz brinco de hobby da que vive de brinco.
          </p>

          <p className="text-white">
            Eu não quero que você descubra isso daqui a 3 meses, depois de gastar dinheiro à toa com material caro e brinco encalhado.
          </p>

          <p className="text-amber-400 font-extrabold text-xl">
            Por isso eu fiz algo que eu nunca fiz antes.
          </p>

          <p className="text-white font-black text-xl sm:text-2xl leading-snug">
            Eu peguei todos os 7 complementos — os mesmos que você acabou de recusar individualmente — e juntei tudo num único pacote.
          </p>

          {/* O QUE ENTRA NO COMBO COMPLETO */}
          <div className="my-3 p-5 sm:p-6 bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-3xl border-2 border-amber-400 shadow-2xl shadow-amber-500/20">
            <h3 className="text-xl sm:text-2xl font-black text-amber-400 mb-4 pb-2 border-b-2 border-amber-500/30 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-amber-400" />
              {data.featuresTitle}
            </h3>

            <ul className="flex flex-col gap-3.5">
              {data.comboItems?.map((item, idx) => (
                <li key={idx} className="flex items-center justify-between text-base sm:text-lg border-b border-neutral-800 pb-3 last:border-none">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                    <span className="text-white font-bold">{item.name}</span>
                  </div>
                  <span className="text-amber-300 font-mono text-sm sm:text-base font-bold shrink-0">
                    ({item.price})
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-4 border-t-2 border-amber-500/40 flex items-center justify-between text-base sm:text-lg font-bold">
              <span className="text-neutral-300">Valor separado:</span>
              <span className="text-neutral-300 line-through font-mono text-lg sm:text-xl">
                {data.totalSeparatedValue}
              </span>
            </div>
          </div>

          <p className="text-white">
            Mas como você é minha aluna e eu prefiro que você tenha o pacote completo do que ficar travada no meio do caminho, eu vou fazer uma oferta única.
          </p>

          <p className="text-amber-400 font-black text-2xl text-center">
            Nesta página. Agora. Depois ela some.
          </p>
        </article>

        {/* ========================================================
            5. BLOCO DE PREÇO & CTA PRINCIPAL (DOURADO PULSANTE)
           ======================================================== */}
        <section aria-label="Preço do Combo" className="w-full mt-8 mb-4 text-center">
          <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 border-2 border-amber-400 rounded-3xl p-6 mb-5 shadow-2xl shadow-amber-500/20">
            <span className="inline-block bg-amber-400 text-neutral-950 font-black text-sm sm:text-base px-4 py-1.5 rounded-full uppercase tracking-wider mb-2">
              COMBO COMPLETO — TUDO JUNTO
            </span>

            <span className="block text-neutral-400 line-through text-lg sm:text-xl font-bold">
              {data.pricing.oldPrice}
            </span>

            <div className="text-5xl sm:text-6xl font-black text-amber-400 tracking-tight my-2">
              {data.pricing.price}
            </div>

            <span className="block text-sm sm:text-base font-black text-neutral-200 uppercase tracking-wider mb-3">
              {data.pricing.billingText}
            </span>

            {data.pricing.savingsText && (
              <div className="bg-amber-400/25 border-2 border-amber-400/50 rounded-2xl px-4 py-2 text-amber-300 font-black text-base sm:text-lg">
                {data.pricing.savingsText}
              </div>
            )}
          </div>

          {/* Botão Dourado Pulsante de Alta Conversão */}
          <button
            type="button"
            onClick={handleCtaClick}
            className="w-full min-h-[66px] py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 active:scale-[0.98] text-neutral-950 font-heading font-black text-xl sm:text-2xl tracking-wide uppercase transition-all duration-200 cursor-pointer animate-pulse-gold flex items-center justify-center text-center shadow-2xl shadow-amber-500/40"
          >
            {data.ctaText}
          </button>
        </section>

        {/* ========================================================
            6. RODAPÉ E LINKS SECUNDÁRIOS DO COMBO
           ======================================================== */}
        <footer className="w-full text-center flex flex-col items-center mt-3 pt-2">
          {/* Link Secundário de Recusa */}
          <button
            type="button"
            onClick={onDecline}
            className="min-h-[48px] py-2 px-4 text-sm sm:text-base text-neutral-300 hover:text-white font-bold underline underline-offset-4 transition-colors cursor-pointer"
          >
            [{data.declineText}]
          </button>

          <p className="text-sm text-amber-300 font-bold mt-4 leading-relaxed">
            ⏱ Esta oferta expira quando o timer zerar. Depois disso, o preço volta ao normal e essa página não aparece mais.
          </p>

          {/* Selos de Confiança e Garantia */}
          <div className="w-full mt-6 pt-5 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-sm font-bold text-neutral-200">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Compra segura</span>
            </div>
            <span className="hidden sm:inline text-neutral-600">·</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Garantia de 7 dias</span>
            </div>
            <span className="hidden sm:inline text-neutral-600">·</span>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Acesso imediato no mesmo e-mail</span>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
};
