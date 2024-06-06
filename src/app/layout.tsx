import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";

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
      <head>
        <script
          defer
          src="https://cdn.jsdelivr.net/ghost/portal@~2.36/umd/portal.min.js"
          data-i18n="false"
          data-ghost="https://ghost.estudiopatagon.com/zento/"
          data-key="3418b12091e67d20ee9d637bf3"
          data-api="https://ghost.estudiopatagon.com/zento/ghost/api/content/"
          crossOrigin="anonymous"
        ></script>
         <link
      rel="stylesheet"
      type="text/css"
      href="../assets/js/cards.min.css"
    />
        <link
      href="../assets/dist/plugins.min.css"
      type="text/css"
      rel="preload"
      as="style"
    />
      <script defer src="../assets/js/cards.min.js"></script>

      </head>
      <body className={"home-template"}>{children}</body>
      <script defer src="../assets/dist/scripts.min.js"></script>
      <script defer src="../assets/dist/prism-plugins.min.js"></script>
      <script
        defer
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js"
      ></script>
      <script
        defer
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js"
      ></script>
      <script
        defer
        src="/zento/assets/dist/prism-plugins.min.js?v=1b89f44b98"
      ></script>
    </html>
  );
}