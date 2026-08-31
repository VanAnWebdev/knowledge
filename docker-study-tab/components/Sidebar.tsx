"use client";

import Link from "next/link";
import { BookOpen, Code, TerminalSquare, Map } from "lucide-react";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800/50 hidden md:flex flex-col shrink-0 bg-zinc-50 dark:bg-zinc-950">
      <div className="h-16 flex items-center px-6 border-b border-zinc-200 dark:border-zinc-800/50">
        <Link href="/" className="font-medium text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          <BookOpen size={18} className="text-[#2496ED]" />
          Study Hub
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 px-2 mt-2">Home</div>
        <Link 
          href="/" 
          className={`flex items-center gap-2 px-2 py-2 rounded-md font-medium transition-colors ${pathname === '/' ? 'bg-zinc-200 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-800/50' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-900/50 hover:text-zinc-900 dark:hover:text-zinc-200'}`}
        >
          <Code size={16} className={pathname === '/' ? "text-[#2496ED]" : ""} />
          Topics
        </Link>
        <Link 
          href="/learn" 
          className={`flex items-center gap-2 px-2 py-2 rounded-md font-medium transition-colors ${pathname === '/learn' ? 'bg-zinc-200 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-800/50' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-900/50 hover:text-zinc-900 dark:hover:text-zinc-200'}`}
        >
          <Map size={16} className={pathname === '/learn' ? "text-[#2496ED]" : ""} />
          Roadmaps
        </Link>
        
        <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 px-2 mt-6">DevOps</div>
        <Link 
          href="/docker" 
          className={`flex items-center gap-2 px-2 py-2 rounded-md font-medium transition-colors ${pathname === '/docker' ? 'bg-zinc-200 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-800/50' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-900/50 hover:text-zinc-900 dark:hover:text-zinc-200'}`}
        >
          <TerminalSquare size={16} className={pathname === '/docker' ? "text-[#2496ED]" : ""} />
          Docker Quickstart
        </Link>
      </nav>
    </aside>
  );
}
