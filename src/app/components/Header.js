import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <nav className="border-b border-gray-200/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold shrink-0">
            Wisdom of Crowd
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link 
              href="/sparsh" 
              className="text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap"
            >
              Developer Profile
            </Link>
            <div className="ml-2 sm:ml-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
