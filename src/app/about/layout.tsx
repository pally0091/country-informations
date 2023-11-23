import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About-Country Informations",
  description: "Page Created by Debashis Roy. Using a rest APIs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
