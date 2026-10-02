import React from 'react';
import { CheckCircle, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export const SuccessPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#F7F8FA] text-slate-950 flex flex-col items-center">
      <main className="w-full max-w-[480px] px-5 py-8 flex flex-col items-center text-center">
        
        {/* Ícone de Sucesso */}
        <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-5 shadow-inner">
          <CheckCircle className="w-12 h-12" />
        </div>

        <span className="inline-block text-sm font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-4 py-1.5 rounded-full mb-3">
          Pedido Confirmado
        </span>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading mb-3 leading-tight">
          Parabéns! Seu acesso foi liberado com sucesso!
        </h1>

        <p className="text-slate-900 text-base sm:text-lg mb-6 leading-relaxed font-semibold">
          Enviamos os dados de acesso e seus materiais diretamente para o seu e-mail cadastrado.
        </p>

        {/* Instruções de Acesso */}
        <div className="w-full bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 text-left mb-6 flex items-start gap-3">
          <Mail className="w-6 h-6 text-blue-700 shrink-0 mt-0.5" />
          <div className="text-sm sm:text-base text-blue-950 leading-relaxed font-medium">
            <strong className="block font-black text-blue-950 mb-0.5">Verifique sua caixa de entrada:</strong>
            Procure pelo e-mail com o assunto <em>"Seu Acesso aos Brincos de Miçanga"</em>. Não se esqueça de checar a caixa de spam ou aba promoções.
          </div>
        </div>

        {/* Botão para Acessar Conteúdo */}
        <a
          href="https://clubedacah.vercel.app/"
          className="w-full min-h-[58px] py-4 px-6 rounded-2xl bg-slate-950 hover:bg-slate-800 text-white font-heading font-black text-lg sm:text-xl tracking-wide uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-xl shadow-slate-900/20 mb-3"
        >
          <span>Acessar Área de Membros</span>
          <ArrowRight className="w-6 h-6" />
        </a>

        <div className="mt-8 pt-4 border-t-2 border-slate-200 w-full flex items-center justify-center gap-2 text-sm font-bold text-slate-700">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span>Ambiente de alta conversão verificado</span>
        </div>

      </main>
    </div>
  );
};
