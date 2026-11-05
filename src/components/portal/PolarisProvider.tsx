"use client";

import type { ReactNode } from "react";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";

interface PolarisProviderProps {
  children: ReactNode;
}

export function PolarisProvider({ children }: PolarisProviderProps) {
  return <AppProvider i18n={enTranslations}>{children}</AppProvider>;
}

export default PolarisProvider;
