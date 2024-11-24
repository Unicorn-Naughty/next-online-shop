import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/shared/top-components/header";
import { HeaderNav } from "./components/shared/middle-components/header-nav";
import { Footer } from "./components/shared/top-components/footer";
import { Montserrat } from "next/font/google";
export const metadata: Metadata = {
  title: "Online Shop",
  description: "Main title",
};
const montserrat = Montserrat({
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
      <body className="flex flex-col ">
        <Header className="h-full  sticky top-0 z-50" />
        <HeaderNav className="border-b-[1px]" />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
