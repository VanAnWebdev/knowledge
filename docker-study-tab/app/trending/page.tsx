import { TrendingUp, Flame, Star, GitMerge, ArrowRight } from "lucide-react";

export default function TrendingPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-red-100 dark:bg-red-500/20 text-red-500 rounded-xl">
            <Flame className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">Trending Now</h1>
        </div>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          What the developer community is most excited about right now. 
        </p>
      </div>

      <div className="grid gap-6">
        {/* Card 1 */}
        <div className="p-6 bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-700 rounded-xl shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] dark:shadow-[6px_6px_0px_0px_rgba(244,244,245,0.1)] transition-transform hover:-translate-y-1">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">AI & LLM Tools</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">Frameworks for building AI agents and RAG applications are dominating.</p>
            </div>
            <span className="flex items-center gap-1 text-xs font-bold bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400 px-2 py-1 rounded-full">
              <TrendingUp className="w-3 h-3" />
              HOT
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-sm font-medium rounded-lg border border-zinc-200 dark:border-zinc-700">LangChain</span>
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-sm font-medium rounded-lg border border-zinc-200 dark:border-zinc-700">LlamaIndex</span>
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-sm font-medium rounded-lg border border-zinc-200 dark:border-zinc-700">Ollama</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-700 rounded-xl shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] dark:shadow-[6px_6px_0px_0px_rgba(244,244,245,0.1)] transition-transform hover:-translate-y-1">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Modern Frontend Tooling</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">Rust-based bundlers and tools replacing Webpack/Babel.</p>
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-zinc-500 dark:text-zinc-400">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              STABLE
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-sm font-medium rounded-lg border border-zinc-200 dark:border-zinc-700">Turbopack</span>
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-sm font-medium rounded-lg border border-zinc-200 dark:border-zinc-700">Vite</span>
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-sm font-medium rounded-lg border border-zinc-200 dark:border-zinc-700">SWC</span>
          </div>
        </div>

        {/* Placeholder / Empty State */}
        <div className="mt-8 p-8 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl text-center bg-zinc-50 dark:bg-zinc-900/50">
          <GitMerge className="w-12 h-12 text-zinc-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Want real-time data?</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-md mx-auto">
            This tab is ready. Let me know what data source you want to connect to (e.g., GitHub Trending API, HackerNews, or Dev.to) and I can hook it up!
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-bold rounded-lg transition-transform hover:-translate-y-1 hover:shadow-lg">
            Configure Sources <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
