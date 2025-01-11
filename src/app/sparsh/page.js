import Header from '../components/Header';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Developer Profile</h1>
              <p className="text-xl opacity-60">Full Stack Developer & AI Enthusiast</p>
            </div>

            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="opacity-60">
                Passionate about creating innovative solutions using cutting-edge technologies.
                Specializing in AI-driven applications and modern web development.
              </p>
            </div>

            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-2">Frontend</h3>
                  <ul className="list-disc list-inside opacity-60">
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>TailwindCSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Backend</h3>
                  <ul className="list-disc list-inside opacity-60">
                    <li>Python</li>
                    <li>Django/FastApi</li>
                    <li>AI/ML</li>
                    <li>AI Agents</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
