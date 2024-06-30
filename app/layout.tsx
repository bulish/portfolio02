import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/app.scss";

// components
import { Header } from "@components/shared/Header";
import { SocialsPanel } from "@components/shared/SocialsPanel";
import { NamePanel } from "@components/shared/NamePanel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="relative min-h-screen flex w-full max-width--no-padding">
            <SocialsPanel />
            <div className="flex-grow">{children}</div>
            <NamePanel />
        </div>
      </body>
    </html>
  );
}
