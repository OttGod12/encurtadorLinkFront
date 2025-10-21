import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd';

export const metadata: Metadata = {
  title: "Encurtador de Links",
  description: "Projeto DW3 - Encurtador de URLs com Fastify + Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ConfigProvider theme={{ token: { colorPrimary: '#1677ff' } }}>
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}