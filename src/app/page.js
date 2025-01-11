import Image from "next/image";
import Header from "./components/Header";

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
          </div>
        </div>
      </main>
    </>
  );
}
