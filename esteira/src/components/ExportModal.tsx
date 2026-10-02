import React, { useState } from 'react';
import { FunnelPageData } from '../types/funnel';
import { X, Copy, Check, FileText, Code2 } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  pageData: FunnelPageData;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  pageData,
}) => {
  const [tab, setTab] = useState<'copy' | 'html'>('copy');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Generate plain text copy
  const generatePlainTextCopy = (): string => {
    let text = `${pageData.name}\n`;
    text += `${pageData.urgency.title}\n`;
    text += `${pageData.urgency.text}\n\n`;
    text += `${pageData.progress.stepText} - ${pageData.progress.percentage}%\n\n`;
    text += `${pageData.headline}\n\n`;

    pageData.introParagraphs.forEach((p) => {
      text += `${p}\n\n`;
    });

    if (pageData.features && pageData.features.length > 0) {
      text += `${pageData.featuresTitle || 'O que você recebe:'}\n\n`;
      pageData.features.forEach((f) => {
        text += `• ${f}\n`;
      });
      text += `\n`;
    }

    if (pageData.comboItems && pageData.comboItems.length > 0) {
      text += `O que entra no Combo Completo:\n\n`;
      pageData.comboItems.forEach((ci) => {
        text += `✅ ${ci.name} (${ci.price})\n`;
      });
      text += `\nValor separado: ${pageData.totalSeparatedValue || ''}\n\n`;
    }

    if (pageData.concludingParagraphs) {
      pageData.concludingParagraphs.forEach((cp) => {
        text += `${cp}\n\n`;
      });
    }

    if (pageData.pricing.oldPrice) {
      text += `${pageData.pricing.oldPrice}\n`;
    }
    text += `${pageData.pricing.price}\n`;
    text += `${pageData.pricing.billingText}\n\n`;
    text += `[${pageData.ctaText}]\n`;
    text += `[${pageData.declineText}]\n\n`;
    text += `${pageData.footerGuarantee}\n`;

    return text;
  };

  // Generate clean standalone HTML
  const generateStandaloneHtml = (): string => {
    const isCombo = pageData.type === 'combo';
    const bg = isCombo ? '#0D0B18' : '#F7F8FA';
    const textColor = isCombo ? '#FFFFFF' : '#1e293b';

    const headlineHtml = pageData.underlinedWord && pageData.headline.toLowerCase().includes(pageData.underlinedWord.toLowerCase())
      ? pageData.headline.replace(
          new RegExp(`(${pageData.underlinedWord})`, 'i'),
          `<span class="underline ${isCombo ? 'decoration-amber-400' : 'decoration-[#D83361]'} decoration-4 underline-offset-6 font-black">$1</span>`
        )
      : pageData.headline;

    return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageData.name}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: ${bg}; color: ${textColor}; }
  </style>
</head>
<body class="flex flex-col items-center min-h-screen">
  <main class="w-full max-w-[480px] px-5 py-8 flex flex-col text-center">
    
    <!-- Bloco de Urgência -->
    <div class="mb-6">
      <h2 class="text-2xl font-black ${isCombo ? 'text-amber-400' : 'text-[#D83361]'} mb-2 uppercase">
        ${pageData.urgency.title}
      </h2>
      <div class="p-3 rounded-xl ${isCombo ? 'bg-amber-400/10 text-amber-200 border border-amber-400/30' : 'bg-[#D83361]/10 text-[#B01A45] border border-[#D83361]/20'} text-sm font-semibold">
        ${pageData.urgency.text}
      </div>
    </div>

    <!-- Progresso -->
    <div class="mb-8">
      <div class="flex justify-between text-xs font-bold mb-2 ${isCombo ? 'text-neutral-300' : 'text-slate-600'}">
        <span>${pageData.progress.stepText}</span>
        <span>${pageData.progress.percentage}%</span>
      </div>
      <div class="w-full h-3 ${isCombo ? 'bg-neutral-800' : 'bg-slate-200'} rounded-full overflow-hidden">
        <div class="h-full ${isCombo ? 'bg-amber-400' : 'bg-[#D83361]'} rounded-full" style="width: ${pageData.progress.percentage}%"></div>
      </div>
    </div>

    <!-- Título Principal -->
    <h1 class="text-2xl font-black mb-6 leading-tight ${isCombo ? 'text-white' : 'text-slate-900'}">
      ${headlineHtml}
    </h1>

    <!-- Copywriting -->
    <div class="text-left text-lg sm:text-[20px] font-medium space-y-5 mb-8 ${isCombo ? 'text-white' : 'text-slate-950'} leading-[1.7]">
      ${pageData.introParagraphs.map((p) => `<p>${p}</p>`).join('\n      ')}
    </div>

    <!-- Preço & CTA -->
    <div class="mb-6">
      ${pageData.pricing.oldPrice ? `<div class="line-through text-slate-400 font-bold mb-1">${pageData.pricing.oldPrice}</div>` : ''}
      <div class="text-4xl font-black mb-1 ${isCombo ? 'text-amber-400' : 'text-slate-900'}">${pageData.pricing.price}</div>
      <div class="text-xs uppercase text-slate-500 font-semibold mb-5">${pageData.pricing.billingText}</div>

      <a href="#" class="block w-full py-4 px-6 rounded-2xl ${isCombo ? 'bg-amber-400 text-black' : 'bg-emerald-600 text-white'} font-black text-lg uppercase shadow-lg text-center">
        ${pageData.ctaText}
      </a>
      
      <a href="#" class="block text-xs mt-4 underline text-slate-500 hover:text-slate-800">
        [${pageData.declineText}]
      </a>
    </div>

    <!-- Rodapé -->
    <div class="text-xs text-slate-400 mt-6 pt-4 border-t ${isCombo ? 'border-neutral-800' : 'border-slate-200'}">
      ${pageData.footerGuarantee}
    </div>

  </main>
</body>
</html>`;
  };

  const currentContent = tab === 'copy' ? generatePlainTextCopy() : generateStandaloneHtml();

  const handleCopy = () => {
    navigator.clipboard.writeText(currentContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <h2 className="font-heading font-black text-slate-900 text-lg">
              Exportar Copy & Código
            </h2>
            <p className="text-xs text-slate-500">
              {pageData.name}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 flex items-center justify-center text-slate-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab selection */}
        <div className="px-5 pt-3 flex items-center gap-2 border-b border-slate-100 bg-white">
          <button
            onClick={() => setTab('copy')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
              tab === 'copy'
                ? 'border-[#D83361] text-[#D83361]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Texto Formatado (Copy)</span>
          </button>
          <button
            onClick={() => setTab('html')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
              tab === 'html'
                ? 'border-[#D83361] text-[#D83361]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>HTML Pronto para Uso</span>
          </button>
        </div>

        {/* Code / Text viewer */}
        <div className="p-5 flex-1 overflow-hidden flex flex-col bg-slate-50">
          <div className="flex-1 overflow-auto rounded-xl bg-slate-900 text-slate-200 p-4 font-mono text-xs leading-relaxed select-all">
            <pre className="whitespace-pre-wrap">{currentContent}</pre>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-slate-100 bg-white flex items-center justify-between">
          <span className="text-xs text-slate-500">
            {tab === 'copy' ? 'Texto pronto para colar no seu editor' : 'Página HTML completa com Tailwind'}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Copiado para Área de Transferência!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copiar Conteúdo</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
