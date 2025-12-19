import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechnoCast - Multi-Agentic Technology Forecasting Platform",
  description: "Revolutionary AI-powered platform for technology intelligence, forecasting, and strategic decision-making. Automate research, detect technology convergence, and gain actionable insights in minutes.",
  keywords: "technology forecasting, AI platform, multi-agentic system, technology intelligence, TRL assessment, signal analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

