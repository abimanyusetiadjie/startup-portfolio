import type { ReactNode } from "react";
import { PolarisProvider } from "@/components/portal/PolarisProvider";
import { PortalShell } from "@/components/portal/PortalShell";

export default function PortalRouteGroupLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <PolarisProvider>
      <PortalShell>{children}</PortalShell>
    </PolarisProvider>
  );
}
