import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/shared/top-components/header";
import { HeaderNav } from "./components/shared/middle-components/header-nav";
import { Footer } from "./components/shared/top-components/footer";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
export const metadata: Metadata = {
  title: "Online Shop",
  description: "Main title",
};
const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["cyrillic"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(`min-h-[100vh] flex flex-col ${montserrat.variable}`)}
      >
        <Header className="h-full  sticky top-0 z-50" />
        <HeaderNav className="border-b-[1px] " />
        <main className="grow">{children}</main>
        <Footer className="" />
      </body>
    </html>
  );
}
