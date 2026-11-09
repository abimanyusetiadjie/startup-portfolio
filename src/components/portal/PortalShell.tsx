"use client";

import { useCallback, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Frame, Navigation, TopBar } from "@shopify/polaris";
import {
  AutomationIcon,
  ExitIcon,
  HomeIcon,
  ReceiptIcon,
  WorkIcon,
} from "@shopify/polaris-icons";

interface PortalShellProps {
  children: ReactNode;
}

export function PortalShell({ children }: PortalShellProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const [userMenuActive, setUserMenuActive] = useState(false);

  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (prevMobileNavigationActive) => !prevMobileNavigationActive
      ),
    []
  );

  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((prevUserMenuActive) => !prevUserMenuActive),
    []
  );

  const handleNavigate = useCallback(
    (destination: string) => {
      setMobileNavigationActive(false);
      router.push(destination);
    },
    [router]
  );

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [
            {
              content: "Kembali ke Landing Page (/)",
              icon: HomeIcon,
              onAction: () => router.push("/"),
            },
            {
              content: "Keluar dari Portal (/login)",
              icon: ExitIcon,
              onAction: () => {
                document.cookie =
                  "triloe_portal_demo=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                router.push("/login");
              },
            },
          ],
        },
      ]}
      name="PT Logistik Nusantara"
      detail="Enterprise Client • SIAKAD Core"
      initials="YA"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

  const navigationMarkup = (
    <Navigation location={pathname}>
      <Navigation.Section
        title="ABINEST CLIENT PORTAL"
        items={[
          {
            url: "/portal",
            label: "Ringkasan Proyek & Milestone",
            icon: WorkIcon,
            selected: pathname === "/portal",
            badge: "Realtime",
            onClick: () => handleNavigate("/portal"),
          },
          {
            url: "/portal/invoices",
            label: "Tagihan & Pembayaran",
            icon: ReceiptIcon,
            selected: pathname.startsWith("/portal/invoices"),
            onClick: () => handleNavigate("/portal/invoices"),
          },
          {
            url: "/portal/automation",
            label: "Document AI & Webhook Queue",
            icon: AutomationIcon,
            selected: pathname.startsWith("/portal/automation"),
            badge: "QStash",
            onClick: () => handleNavigate("/portal/automation"),
          },
        ]}
      />
      <Navigation.Section
        separator
        title="NAVIGASI PUBLIK"
        items={[
          {
            url: "/",
            label: "Halaman Utama Studio (/)",
            icon: HomeIcon,
            selected: false,
            onClick: () => handleNavigate("/"),
          },
        ]}
      />
    </Navigation>
  );

  return (
    <Frame
      logo={{
        width: 110,
        topBarSource: "/images/abinest-horizontal-light-hd.png",
        url: "/",
        accessibilityLabel: "Abinest",
      }}
      topBar={topBarMarkup}
      navigation={navigationMarkup}
      showMobileNavigation={mobileNavigationActive}
      onNavigationDismiss={toggleMobileNavigationActive}
    >
      {children}
    </Frame>
  );
}

export default PortalShell;
