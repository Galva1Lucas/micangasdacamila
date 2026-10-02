import React, { useState } from 'react';
import { FUNNEL_PAGES } from '../data/funnelData';
import { X, Link2, Check, ExternalLink } from 'lucide-react';

interface CheckoutLinksModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutUrls: Record<string, string>;
  onSaveUrls: (urls: Record<string, string>) => void;
}

export const CheckoutLinksModal: React.FC<CheckoutLinksModalProps> = ({
  isOpen,
  onClose,
  checkoutUrls,
  onSaveUrls,
}) => {
  const [urls, setUrls] = useState<Record<string, string>>(checkoutUrls);
  const [savedToast, setSavedToast] = useState(false);

  if (!isOpen) return null;

  const handleChange = (id: string, value: string) => {
    setUrls((prev) => ({ ...prev, [id]: value }));
  };

  const handleSave = () => {
    onSaveUrls(urls);
    setSavedToast(true);
    setTimeout(() => {
      setSavedToast(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Link2 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-heading font-black text-slate-900 text-lg">
                Links de Checkout (1-Clique)
              </h2>
              <p className="text-xs text-slate-500">
                Insira as URLs dos botões de compra (ex: Kiwify, Hotmart, Eduzz)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 flex items-center justify-center text-slate-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form List */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          <div className="p-3 bg-amber-50 border border-amber-200/80 rounded-xl text-xs text-amber-900 leading-relaxed">
            💡 <strong>Dica de Produtor:</strong> Se você deixar o campo vazio, o botão funcionará no modo de simulação (avançando para a próxima etapa do funil). Se preencher uma URL, o clique abrirá o checkout configurado.
          </div>

          {FUNNEL_PAGES.map((page) => (
            <div key={page.id} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800">
                  {page.name}
                </span>
                <span className="text-slate-500 font-mono font-semibold">
                  {page.pricing.price}
                </span>
              </div>
              <div className="relative">
                <input
                  type="url"
                  placeholder="https://pay.kiwify.com.br/seu-link-upsell"
                  value={urls[page.id] || ''}
                  onChange={(e) => handleChange(page.id, e.target.value)}
                  className="w-full text-xs font-mono px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-slate-50 text-slate-800"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800 transition-colors cursor-pointer"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors flex items-center gap-1.5 shadow-md shadow-emerald-600/20 cursor-pointer"
          >
            {savedToast ? (
              <>
                <Check className="w-4 h-4" />
                <span>Salvo com Sucesso!</span>
              </>
            ) : (
              <span>Salvar Links</span>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
