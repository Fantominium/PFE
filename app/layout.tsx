"use client"
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient(); // Create a new Query Client


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}><body className={inter.className}>{children}</body></QueryClientProvider>
    </html>
  );
}
