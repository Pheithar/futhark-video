import "../styles/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Futhark Video Creator",
  description: "Create videos with translations of the Futhark alphabet, from any given input text.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>
        <link rel="manifest" href="site.webmanifest"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
