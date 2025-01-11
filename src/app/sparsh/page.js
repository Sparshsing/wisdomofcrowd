import Header from '../components/Header';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa';

export default function Portfolio() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section - Full Width */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center">
              {/* <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full"></div>
                <Image
                  src="/profile.jpg"
                  alt="Sparsh Singhal"
                  width={128}
                  height={128}
                  className="rounded-full relative z-10"
                />
              </div> */}
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text">
                Sparsh Singhal
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">AI Solutions Engineer & Full Stack Developer</p>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
                Passionate about creating innovative solutions using cutting-edge technologies.
                Specializing in AI-driven applications and modern web development.
              </p>
              <div className="flex justify-center gap-4">
                <a href="https://github.com/Sparshsing" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/sparsh-singhal-b15210107/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Experience and Education */}
            <div className="lg:col-span-2 space-y-8">
              {/* Experience Section */}
              <section>
                <div className="flex items-center mb-8">
                  <FaBriefcase className="text-2xl text-blue-500 mr-4" />
                  <h2 className="text-2xl font-bold">Experience</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all hover:shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Solutions Engineer</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">TELUS International AI Data Solutions · Full-time</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">Aug 2022 - Aug 2024 · 2 years 1 month</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                      <li>Worked on computer vision tasks including 3D point clouds, SLAM, Calibration, and image segmentation</li>
                      <li>Designed and developed data labelling pipelines for major automotive industry companies</li>
                      <li>Led successful pilot projects generating over $1M in revenue</li>
                      <li>Created automation utilities for annotation user onboarding</li>
                    </ul>
                  </div>

                  <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all hover:shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Software and Data Solutions Engineer</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Freelance · Self-employed</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">Jan 2021 - Jul 2022 · 1 year 7 months</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                      <li>Developed custom applications for real estate and retail clients</li>
                      <li>Created web applications and automation tools for small businesses</li>
                      <li>Provided tailored solutions to improve operational efficiency</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education Section */}
              <section>
                <div className="flex items-center mb-8">
                  <FaGraduationCap className="text-2xl text-blue-500 mr-4" />
                  <h2 className="text-2xl font-bold">Education</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all hover:shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Great Lakes Institute of Management</h3>
                    <p className="text-gray-600 dark:text-gray-400">Postgraduate Degree, Data Science</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Nov 2021 - May 2022</p>
                  </div>

                  <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all hover:shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Bangalore Institute of Technology</h3>
                    <p className="text-gray-600 dark:text-gray-400">Bachelor of Engineering - BE, Computer Science</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Aug 2015 - Jun 2019 · Grade: 7.9</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column - Skills and Recommendations */}
            <div className="space-y-8">
              {/* Skills Section */}
              <section>
                <div className="flex items-center mb-8">
                  <FaStar className="text-2xl text-blue-500 mr-4" />
                  <h2 className="text-2xl font-bold">Skills</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all hover:shadow-lg">
                    <h3 className="font-semibold mb-4 text-blue-500">AI & ML</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">AI Agents</span>
                      <span className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">LLM</span>
                      <span className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">Computer Vision</span>
                      <span className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">Data Analysis</span>
                      <span className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">3D Point Clouds</span>
                    </div>
                  </div>

                  <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all hover:shadow-lg">
                    <h3 className="font-semibold mb-4 text-purple-500">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-sm bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">React.js</span>
                      <span className="px-3 py-1 rounded-full text-sm bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">Next.js</span>
                      <span className="px-3 py-1 rounded-full text-sm bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300">TailwindCSS</span>
                    </div>
                  </div>

                  <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all hover:shadow-lg">
                    <h3 className="font-semibold mb-4 text-green-500">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-sm bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">Python</span>
                      <span className="px-3 py-1 rounded-full text-sm bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">Django</span>
                      <span className="px-3 py-1 rounded-full text-sm bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">FastAPI</span>
                      <span className="px-3 py-1 rounded-full text-sm bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">SQL</span>
                      <span className="px-3 py-1 rounded-full text-sm bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">AWS</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Recommendations Section */}
              <section>
                <div className="flex items-center mb-8">
                  <svg className="w-6 h-6 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <h2 className="text-2xl font-bold">Recommendations</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all hover:shadow-lg">
                    <div className="mb-4">
                      <h3 className="font-semibold">Lakshya Jain</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Product | ML & Delivery | TIAI DS</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 italic text-sm">
                      "I had the pleasure of collaborating with Sparsh Singhal, in his role as a Solution Engineer at Telus International. Sparsh's deep understanding of our products, coupled with his technical expertise and excellent communication skills, made our interactions highly productive."
                    </p>
                  </div>

                  <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all hover:shadow-lg">
                    <div className="mb-4">
                      <h3 className="font-semibold">Christian Kissner</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">System Architect at Genius Brains</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 italic text-sm">
                      "Sparsh demonstrated his confidence as a django developer with good communication skills and a very methodical approach."
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
