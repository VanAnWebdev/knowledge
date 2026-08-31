import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BookOpen, Code, TerminalSquare, Search, Menu } from "lucide-react";
import Link from "next/link";

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
    >
      <body className="min-h-full flex bg-zinc-950 text-zinc-300 font-sans selection:bg-[#2496ED] selection:text-white">
        
        {/* Sidebar */}
        <aside className="w-64 border-r border-zinc-800/50 hidden md:flex flex-col shrink-0">
          <div className="h-16 flex items-center px-6 border-b border-zinc-800/50">
            <span className="font-medium text-zinc-100 flex items-center gap-2">
              <BookOpen size={18} className="text-[#2496ED]" />
              Study Hub
            </span>
          </div>
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 px-2 mt-2">DevOps</div>
            <Link href="/" className="flex items-center gap-2 px-2 py-2 rounded-md bg-zinc-900/80 text-zinc-100 font-medium border border-zinc-800/50">
              <TerminalSquare size={16} className="text-[#2496ED]" />
              Docker Quickstart
            </Link>
            <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 px-2 mt-6">Frontend</div>
            <Link href="#" className="flex items-center gap-2 px-2 py-2 rounded-md text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200 transition-colors">
              <Code size={16} />
              Next.js & React
            </Link>
          </nav>
        </aside>

        {/* Main content wrapper */}
        <div className="flex-1 flex flex-col min-w-0">
          
          {/* Header */}
          <header className="h-16 flex items-center justify-between px-4 md:px-8 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <button className="md:hidden text-zinc-400 hover:text-zinc-100">
                <Menu size={20} />
              </button>
              <div className="hidden sm:flex items-center gap-2 text-sm text-zinc-400 bg-zinc-900/50 px-3 py-1.5 rounded-full border border-zinc-800/50">
                <Search size={14} />
                <span>Search notes...</span>
                <span className="ml-4 border border-zinc-700 rounded px-1.5 text-[10px] uppercase">Ctrl K</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#2496ED] to-purple-500"></div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1">
            {children}
          </main>
          
        </div>
      </body>
    </html>
  );
}
