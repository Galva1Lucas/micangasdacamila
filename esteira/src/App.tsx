import React, { useState, useEffect } from 'react';
import { FUNNEL_PAGES } from './data/funnelData';
import { AcceptedPurchase } from './types/funnel';
import { UpsellPage } from './components/UpsellPage';
import { ComboPage } from './components/ComboPage';
import { SuccessPage } from './components/SuccessPage';
import { FunnelToolbar } from './components/FunnelToolbar';
import { ExportModal } from './components/ExportModal';
import { CheckoutLinksModal } from './components/CheckoutLinksModal';
import { Settings } from 'lucide-react';

const CHECKOUT_URLS: Record<string, string> = {
  up4: 'https://go.perfectpay.com.br/PPU38CQGMNQ?upsell=true',
  down4: 'https://go.perfectpay.com.br/PPU38CQGMPM?upsell=true',
  up5: 'https://go.perfectpay.com.br/PPU38CQGMP8?upsell=true',
  down5: 'https://go.perfectpay.com.br/PPU38CQGMPN?upsell=true',
  up6: 'https://go.perfectpay.com.br/PPU38CQGMPA?upsell=true',
  down6: 'https://go.perfectpay.com.br/PPU38CQGMPO?upsell=true',
  up7: 'https://go.perfectpay.com.br/PPU38CQGMPC?upsell=true',
  down7: 'https://go.perfectpay.com.br/PPU38CQGMPP?upsell=true',
  up8: 'https://go.perfectpay.com.br/PPU38CQGMPE?upsell=true',
  down8: 'https://go.perfectpay.com.br/PPU38CQGMPQ?upsell=true',
  up9: 'https://go.perfectpay.com.br/PPU38CQGMPG?upsell=true',
  down9: 'https://go.perfectpay.com.br/PPU38CQGMPS?upsell=true',
  up10: 'https://go.perfectpay.com.br/PPU38CQGMPI?upsell=true',
  down10: 'https://go.perfectpay.com.br/PPU38CQGMPT?upsell=true',
  combo: 'https://go.perfectpay.com.br/PPU38CQGMPK?upsell=true',
};

export default function App() {
  // Check if running in production build (when user downloads/publishes to their server)
  const isProduction = import.meta.env.PROD;

  // Retrieve initial page from URL query param (?p=up4 or ?page=up5) or hash
  const getInitialStep = (): string => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlPage = params.get('p') || params.get('page') || window.location.hash.replace('#', '');
      if (urlPage && (FUNNEL_PAGES.some((p) => p.id === urlPage) || urlPage === 'success')) {
        return urlPage;
      }
    }
    return 'up4';
  };

  const [currentStepId, setCurrentStepId] = useState<string>(getInitialStep);
  const [showToolbar, setShowToolbar] = useState<boolean>(!isProduction);
  const [acceptedPurchases, setAcceptedPurchases] = useState<AcceptedPurchase[]>([]);
  const [checkoutUrls, setCheckoutUrls] = useState<Record<string, string>>(CHECKOUT_URLS);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [isLinksModalOpen, setIsLinksModalOpen] = useState<boolean>(false);

  // Scroll to top and sync URL when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update URL query parameter without full page reload
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('p', currentStepId);
      window.history.replaceState({}, '', url.toString());
    }
  }, [currentStepId]);

  const currentPageData = FUNNEL_PAGES.find((p) => p.id === currentStepId);

  // Flow handlers
  const handleAccept = () => {
    if (!currentPageData) return;

    // Record purchase
    const newPurchase: AcceptedPurchase = {
      id: currentPageData.id,
      name: currentPageData.name,
      price: currentPageData.pricing.price,
      numericPrice: currentPageData.pricing.numericPrice,
      timestamp: new Date().toLocaleTimeString('pt-BR'),
    };

    setAcceptedPurchases((prev) => {
      // Remove previous downsell/upsell of the same step if replacing
      const stepKey = currentPageData.id.replace('down', '').replace('up', '');
      const filtered = prev.filter((p) => !p.id.includes(stepKey));
      return [...filtered, newPurchase];
    });

    // Advance
    if (currentPageData.nextStepOnAccept) {
      setCurrentStepId(currentPageData.nextStepOnAccept);
    } else {
      setCurrentStepId('success');
    }
  };

  const handleDecline = () => {
    if (!currentPageData) return;

    if (currentPageData.nextStepOnDecline) {
      setCurrentStepId(currentPageData.nextStepOnDecline);
    } else {
      setCurrentStepId('success');
    }
  };

  const handleRestart = () => {
    setAcceptedPurchases([]);
    setCurrentStepId('up4');
  };

  const currentCheckoutUrl = currentPageData ? checkoutUrls[currentPageData.id] : undefined;
  const isCombo = currentPageData?.type === 'combo';

  return (
    <div className={`min-h-screen w-full flex flex-col font-sans antialiased ${isCombo ? 'bg-[#0D0B18]' : 'bg-[#F7F8FA]'}`}>
      
      {/* 
        Barra de Ferramentas / Atalhos do Produtor:
        - NUNCA é exibida em ambiente de produção (quando o usuário publica no próprio site)
        - Pode ser ocultada a qualquer momento no preview clicando em "Ver Site Puro"
      */}
      {!isProduction && showToolbar && (
        <FunnelToolbar
          currentStepId={currentStepId}
          onSelectStep={(stepId) => setCurrentStepId(stepId)}
          onOpenExportModal={() => setIsExportModalOpen(true)}
          onOpenLinksModal={() => setIsLinksModalOpen(true)}
          onResetFunnel={handleRestart}
          onHideToolbar={() => setShowToolbar(false)}
          totalAccepted={acceptedPurchases.length}
        />
      )}

      {/* Botão flutuante discreto para reabrir a barra de atalhos durante o preview (se estiver oculta) */}
      {!isProduction && !showToolbar && (
        <button
          type="button"
          onClick={() => setShowToolbar(true)}
          title="Reabrir barra de atalhos do produtor"
          className="fixed bottom-4 right-4 z-50 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white shadow-lg backdrop-blur-sm border border-slate-700 transition-all opacity-70 hover:opacity-100 cursor-pointer"
        >
          <Settings className="w-4 h-4" />
        </button>
      )}

      {/* 
        CONTEÚDO 100% RESPONSIVO (SEM MOLDURA DE CELULAR):
        - No celular: ocupa 100% da tela naturalmente com margens confortáveis
        - No tablet / desktop: centraliza elegantemente na largura ideal de leitura mobile-first
      */}
      <div className="w-full flex-1 flex justify-center items-start">
        {currentStepId === 'success' ? (
          <SuccessPage />
        ) : currentPageData?.type === 'combo' ? (
          <ComboPage
            data={currentPageData}
            onAccept={handleAccept}
            onDecline={handleDecline}
            checkoutUrl={currentCheckoutUrl}
          />
        ) : currentPageData ? (
          <UpsellPage
            data={currentPageData}
            onAccept={handleAccept}
            onDecline={handleDecline}
            checkoutUrl={currentCheckoutUrl}
          />
        ) : null}
      </div>

      {/* Modal de Exportação de Copy e HTML Limpo */}
      {currentPageData && (
        <ExportModal
          isOpen={isExportModalOpen}
          onClose={() => setIsExportModalOpen(false)}
          pageData={currentPageData}
        />
      )}

      {/* Modal de Configuração de Links de Checkout */}
      <CheckoutLinksModal
        isOpen={isLinksModalOpen}
        onClose={() => setIsLinksModalOpen(false)}
        checkoutUrls={checkoutUrls}
        onSaveUrls={(urls) => setCheckoutUrls(urls)}
      />

    </div>
  );
}
