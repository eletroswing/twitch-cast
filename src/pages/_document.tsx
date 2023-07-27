import { Analytics } from "@vercel/analytics/react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <Analytics />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
