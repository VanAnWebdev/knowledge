import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Knowledge Base",
  description: "My Personal Study Notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-300 font-sans selection:bg-[#2496ED] selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Sidebar */}
          <Sidebar />

          {/* Main content wrapper */}
          <div className="flex-1 flex flex-col min-w-0">
            
            {/* Header */}
            <Header />

            {/* Page Content */}
            <main className="flex-1">
              {children}
            </main>
            
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
