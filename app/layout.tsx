import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/providers/modal-provider";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "VybeHub - Admin Dashboard",
  description: "VybeHub - Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
