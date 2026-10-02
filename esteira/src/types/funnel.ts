export type FunnelStepType = 'upsell' | 'downsell' | 'combo';

export interface UrgencyAlert {
  title: string;
  text: string;
}

export interface ProgressInfo {
  stepText: string;
  percentage: number;
}

export interface PricingInfo {
  oldPrice?: string;
  price: string;
  billingText: string;
  savingsText?: string;
  numericPrice: number;
}

export interface ComboItem {
  name: string;
  price: string;
}

export interface FunnelPageData {
  id: string;
  pageNumber: number;
  totalUpsells: number;
  name: string;
  shortName: string;
  type: FunnelStepType;
  urgency: UrgencyAlert;
  progress: ProgressInfo;
  headline: string;
  underlinedWord?: string;
  introParagraphs: string[];
  featuresTitle?: string;
  features: string[];
  concludingParagraphs?: string[];
  highlightBadge?: string;
  pricing: PricingInfo;
  ctaText: string;
  declineText: string;
  footerGuarantee: string;
  nextStepOnAccept: string;
  nextStepOnDecline: string;
  // Specific for combo
  comboItems?: ComboItem[];
  totalSeparatedValue?: string;
  timerDurationSeconds?: number;
}

export interface AcceptedPurchase {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  timestamp: string;
}
