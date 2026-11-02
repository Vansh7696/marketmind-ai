import { Sparkles, ArrowRight } from 'lucide-react'

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 antialiased">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Frontend Initialized & Ready
        </div>

        {/* Heading & Descriptions */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-indigo-400" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              MarketMind AI
            </h1>
          </div>

          <p className="text-lg sm:text-xl font-medium text-indigo-400">
            AI-Powered Market Research and Startup Validation Platform
          </p>

          <p className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto">
            Validate Your Startup Idea Before You Build It.
          </p>
        </div>

        {/* Action Button */}
        <div>
          <button
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/20 transition-all duration-200 cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </main>
  )
}
