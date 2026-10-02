import React, { useState } from 'react';
import { FUNNEL_PAGES } from '../data/funnelData';
import { 
  Smartphone, 
  Monitor, 
  Copy, 
  Link2, 
  RotateCcw, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Layers,
  Sparkles
} from 'lucide-react';

interface FunnelToolbarProps {
  currentStepId: string;
  onSelectStep: (stepId: string) => void;
  onOpenExportModal: () => void;
  onOpenLinksModal: () => void;
  onResetFunnel: () => void;
  onHideToolbar: () => void;
  totalAccepted: number;
}

export const FunnelToolbar: React.FC<FunnelToolbarProps> = ({
  currentStepId,
  onSelectStep,
  onOpenExportModal,
  onOpenLinksModal,
  onResetFunnel,
  onHideToolbar,
  totalAccepted,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const currentPage = FUNNEL_PAGES.find((p) => p.id === currentStepId);

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 shadow-md">
      {/* Barra Principal */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3 text-xs">
        
        {/* Lado Esquerdo: Identificação & Seletor de Página */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 font-heading font-black text-sm tracking-tight text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D83361] animate-pulse"></span>
            <span className="hidden sm:inline">Editor de Funil</span>
          </div>

          <div className="h-4 w-px bg-slate-700 hidden sm:block"></div>

          {/* Seletor Rápido de Etapas */}
          <div className="relative flex items-center">
            <Layers className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
            <select
              aria-label="Selecionar página do funil"
              value={currentStepId}
              onChange={(e) => onSelectStep(e.target.value)}
              className="bg-slate-800 hover:bg-slate-700/80 text-white font-medium pl-8 pr-7 py-1.5 rounded-lg border border-slate-700 focus:outline-none focus:border-[#D83361] text-xs cursor-pointer appearance-none max-w-[200px] sm:max-w-[260px] truncate"
            >
              <optgroup label="Upsells Principais">
                <option value="up4">UPSELL 4: Fornecedores (R$14,90)</option>
                <option value="up5">UPSELL 5: Linha Infantil (R$19,90)</option>
                <option value="up6">UPSELL 6: Catálogo WhatsApp (R$17,90)</option>
                <option value="up7">UPSELL 7: Coleção Sazonal (R$24,90)</option>
                <option value="up8">UPSELL 8: Embalagem Premium (R$22,90)</option>
                <option value="up9">UPSELL 9: Produção em Série (R$29,90)</option>
                <option value="up10">UPSELL 10: Linha de Luxo (R$37,00)</option>
              </optgroup>
              <optgroup label="Downsells (50% OFF)">
                <option value="down4">DOWNSELL 4: Fornecedores (R$7,50)</option>
                <option value="down5">DOWNSELL 5: Linha Infantil (R$9,90)</option>
                <option value="down6">DOWNSELL 6: Catálogo WhatsApp (R$8,90)</option>
                <option value="down7">DOWNSELL 7: Coleção Sazonal (R$12,50)</option>
                <option value="down8">DOWNSELL 8: Embalagem (R$11,50)</option>
                <option value="down9">DOWNSELL 9: Produção (R$14,90)</option>
                <option value="down10">DOWNSELL 10: Luxo (R$18,50)</option>
              </optgroup>
              <optgroup label="Etapas Finais">
                <option value="combo">🔥 COMBO FINAL (R$77,00)</option>
                <option value="success">🎉 Tela de Pedido Confirmado</option>
              </optgroup>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 pointer-events-none" />
          </div>

          {currentPage && (
            <span className="hidden md:inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-800 text-slate-300">
              {currentPage.type === 'upsell' ? '🟢 Upsell' : currentPage.type === 'downsell' ? '🟡 Downsell' : '🔥 Combo'}
            </span>
          )}
        </div>

        {/* Lado Direito: Ferramentas do Produtor */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          
          {/* Exportar Copy / HTML */}
          <button
            type="button"
            onClick={onOpenExportModal}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Copiar texto da copy ou gerar código HTML limpo para o seu site"
          >
            <Copy className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Exportar Copy</span>
          </button>

          {/* Links de Checkout */}
          <button
            type="button"
            onClick={onOpenLinksModal}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Configurar links do botão de compra"
          >
            <Link2 className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Links</span>
          </button>

          {/* Ocultar Barra para ver Site Puro */}
          <button
            type="button"
            onClick={onHideToolbar}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-semibold transition-colors cursor-pointer"
            title="Ocultar esta barra e ver o site exatamente como o cliente vê"
          >
            <span>Ver Site Puro</span>
          </button>

          {/* Reiniciar Teste */}
          <button
            type="button"
            onClick={onResetFunnel}
            className="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            title="Reiniciar teste do funil"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Recolher / Expandir Dicas */}
          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
            title={isCollapsed ? 'Mostrar barra de etapas rápidas' : 'Recolher'}
          >
            {isCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Barra de Acesso Rápido a Todas as Etapas (Expansível) */}
      {!isCollapsed && (
        <div className="bg-slate-950/80 border-t border-slate-800/80 px-3 sm:px-6 py-2 overflow-x-auto">
          <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-[11px] whitespace-nowrap min-w-max">
            <span className="text-slate-500 font-bold uppercase tracking-wider text-[10px] mr-1">
              Atalhos Rápidos:
            </span>

            {[
              { id: 'up4', label: 'UP 4 (R$14,90)' },
              { id: 'down4', label: 'DOWN 4 (R$7,50)' },
              { id: 'up5', label: 'UP 5 (R$19,90)' },
              { id: 'down5', label: 'DOWN 5 (R$9,90)' },
              { id: 'up6', label: 'UP 6 (R$17,90)' },
              { id: 'down6', label: 'DOWN 6 (R$8,90)' },
              { id: 'up7', label: 'UP 7 (R$24,90)' },
              { id: 'down7', label: 'DOWN 7 (R$12,50)' },
              { id: 'up8', label: 'UP 8 (R$22,90)' },
              { id: 'down8', label: 'DOWN 8 (R$11,50)' },
              { id: 'up9', label: 'UP 9 (R$29,90)' },
              { id: 'down9', label: 'DOWN 9 (R$14,90)' },
              { id: 'up10', label: 'UP 10 (R$37,00)' },
              { id: 'down10', label: 'DOWN 10 (R$18,50)' },
              { id: 'combo', label: '🔥 COMBO (R$77,00)' },
            ].map((step) => {
              const active = currentStepId === step.id;
              const isCombo = step.id === 'combo';
              const isDown = step.id.startsWith('down');

              return (
                <button
                  key={step.id}
                  onClick={() => onSelectStep(step.id)}
                  className={`px-2 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                    active
                      ? isCombo
                        ? 'bg-amber-400 text-neutral-950 font-bold shadow-sm'
                        : 'bg-[#D83361] text-white shadow-sm'
                      : isCombo
                      ? 'bg-amber-400/20 text-amber-300 hover:bg-amber-400/30'
                      : isDown
                      ? 'bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700'
                      : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {step.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
