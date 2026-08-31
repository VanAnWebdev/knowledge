import Link from "next/link";
import { BookOpen, TerminalSquare, Code } from "lucide-react";

export default function Home() {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Welcome to Study Hub
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl leading-relaxed">
            A minimalist knowledge base for software development topics. Select a topic below to start reading.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <BookOpen size={20} className="text-[#2496ED]" /> Available Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <Link href="/docker" className="block group">
              <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 hover:border-[#2496ED]/50 transition-colors h-full">
                <TerminalSquare size={28} className="text-[#2496ED] mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-[#2496ED] transition-colors">Docker Quickstart</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Learn the core concepts of Docker: Images, Containers, and Dockerfile. Plus a cheat-sheet of essential commands.
                </p>
              </div>
            </Link>

            <div className="block opacity-60 cursor-not-allowed">
              <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 h-full">
                <Code size={28} className="text-zinc-500 mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2">Next.js & React</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Coming soon. Notes on modern frontend development with React and Next.js App Router.
                </p>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
