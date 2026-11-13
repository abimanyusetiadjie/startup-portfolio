"use client";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Gunakan native GPU-accelerated browser scrolling agar 100% responsif & bebas lag di mobile maupun desktop
  return <>{children}</>;
}
