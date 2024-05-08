// Utilities
import { Inter } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';

// Styles
import "./globals.css";

// Types
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ha Thanh Duy - Software Developer",
  description: "CV Ha Thanh Duy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
