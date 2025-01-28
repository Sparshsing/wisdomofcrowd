import Header from '@/app/components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function TokenCounter() {
  return (
    <>
    <Header />
    <main className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Token Counter Extension
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Instantly count tokens in your selected text across any website
        </p>
        <Link
          href="https://chrome.google.com/webstore/detail/macfkbmckhomamgmhjcjmgkbghlfgbji?utm_source=website"
          target="_blank"
          className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          Add to Chrome
        </Link>
      </div>

      {/* Main Features */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">How It Works</h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">1.</span>
              Select any text on any website
            </li>
            <li className="flex items-start">
              <span className="mr-2">2.</span>
              Right-click on the selected text
            </li>
            <li className="flex items-start">
              <span className="mr-2">3.</span>
              Click &quot;Get Token Count&quot;
            </li>
            <li className="flex items-start">
              <span className="mr-2">4.</span>
              See token and word count instantly
            </li>
          </ul>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-center">
            <Image
              src="/images/tools/tokencounter/icon.png"
              alt="Token Counter in action"
              width={300}
              height={300}
              className="w-auto h-auto max-w-[300px]"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
      <div className="bg-gray-100/50 dark:bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">GPT-4 Compatible</h3>
            <p className="text-gray-600 dark:text-gray-400">
            Accurate token counting based on ChatGPT-4 models using tiktoken-cl100
          </p>
        </div>
        <div className="bg-gray-100/50 dark:bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Quick Access</h3>
            <p className="text-gray-600 dark:text-gray-400">
            Right-click context menu integration for seamless usage
          </p>
        </div>
        {/* <div className="bg-gray-100/50 dark:bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Multi-Model Support</h3>
            <p className="text-gray-600 dark:text-gray-400">
            Future support for Gemini, Llama, Claude, and more
          </p>
        </div> */}
      </div>

      {/* Screenshots Gallery */}
      <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Screenshots</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Image
            src="/images/tools/tokencounter/promo.jpg"
            alt="Token Counter Promo"
            width={300}
            height={200}
            className="rounded-lg w-full h-auto"
          />
          <Image
            src="/images/tools/tokencounter/token_counter_1.jpg"
            alt="Token Counter Screenshot 1"
            width={300}
            height={200}
            className="rounded-lg w-full h-auto"
          />
          <Image
            src="/images/tools/tokencounter/token_counter_2.jpg"
            alt="Token Counter Screenshot 2"
            width={300}
            height={200}
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="text-center bg-gray-100/50 dark:bg-gray-800/50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Coming Soon</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
          The count is reasonable for all models, but we're working on adding support for more AI models.:
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {['Gemini', 'Claude', 'Llama', 'Mistral'].map((model) => (
            <span
              key={model}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
              >
              {model}
            </span>
          ))}
        </div>
      </div>
    </main>
    </>
  );
} 