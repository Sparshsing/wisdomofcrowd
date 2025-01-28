import Image from "next/image";
import Header from "./components/Header";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Coming Soon</h2>
            <p className="text-xl opacity-60">Something amazing is in the works!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Stock Predictor Box */}
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-8 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 hover:bg-white/80 dark:hover:bg-white/10">
              <h3 className="text-2xl font-bold mb-4">Stock Predictor</h3>
              <p className="opacity-60">Advanced AI-powered stock market predictions and analysis</p>
            </div>

            {/* Debate Smart Box */}
            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-8 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 hover:bg-white/80 dark:hover:bg-white/10">
              <h3 className="text-2xl font-bold mb-4">Debate Smart</h3>
              <p className="opacity-60">Intelligent debate platform for meaningful discussions</p>
            </div>

            {/* Token Counter Box */}
            <Link
              href="/tools/tokencounter"
              className="block p-6 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <Image
                  src="/images/tools/tokencounter/icon.png"
                  alt="Token Counter"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Token Counter</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Chrome extension to count tokens in selected text
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-16 text-center">
            <a 
              href="/sparsh" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-all duration-200 text-lg font-semibold"
            >
              Meet the Developer
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
