import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/shared/top-components/header";
import { HeaderNav } from "./components/shared/middle-components/header-nav";

export const metadata: Metadata = {
  title: "Online Shop",
  description: "Main title",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header className="h-full  sticky top-0 z-50" />
        <HeaderNav className="border-b-[1px]" />
        {children}
      </body>
    </html>
  );
}
