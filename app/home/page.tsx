import Link from "next/link";
import { MessageSquare, Database, TrendingUp, Gamepad, Rocket } from "lucide-react";

export default function LowPerryCommunityHub() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-green-400">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-green-700">
        <Link className="flex items-center justify-center" href="#">
          <Rocket className="h-6 w-6" />
          <span className="ml-2 font-mono text-lg">Low Perry Community Hub</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-mono hover:text-green-300 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-mono hover:text-green-300 transition-colors" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-mono hover:text-green-300 transition-colors" href="#pricing">
            Pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 border-b border-green-700">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter font-mono sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Low Perry Community Hub
                </h1>
                <p className="mx-auto max-w-[700px] text-green-400 md:text-xl font-mono">
                  Access all our projects in one place for a single price. Learn, experiment, and grow with our
                  collection of cutting-edge projects.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#get-started" className="bg-green-700 text-black hover:bg-green-600 px-4 py-2 rounded">
                  Get Started
                </Link>
                <Link href="#learn-more" className="border border-green-700 text-green-400 hover:bg-green-900 px-4 py-2 rounded">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 border-b border-green-700">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter font-mono sm:text-5xl text-center mb-12">
              Why Choose Us?
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="bg-green-900 border-green-700 p-4 rounded">
                <div className="flex items-center mb-2">
                  <Rocket className="h-10 w-10" />
                  <h3 className="font-mono ml-2">Cutting-Edge Tech</h3>
                </div>
                <p className="font-mono">Stay updated with the latest technologies and frameworks in the industry.</p>
              </div>
              <div className="bg-green-900 border-green-700 p-4 rounded">
                <div className="flex items-center mb-2">
                  <Database className="h-10 w-10" />
                  <h3 className="font-mono ml-2">Hands-On Learning</h3>
                </div>
                <p className="font-mono">Gain practical experience with real-world projects and applications.</p>
              </div>
              <div className="bg-green-900 border-green-700 p-4 rounded">
                <div className="flex items-center mb-2">
                  <MessageSquare className="h-10 w-10" />
                  <h3 className="font-mono ml-2">Community Support</h3>
                </div>
                <p className="font-mono">Connect with like-minded learners and get help when you need it.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 border-b border-green-700">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter font-mono sm:text-5xl text-center mb-12">
              Our Projects
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="bg-green-900 border-green-700 p-4 rounded">
                <div className="flex items-center mb-2">
                  <MessageSquare className="h-10 w-10" />
                  <h3 className="font-mono ml-2">AI Chatbot</h3>
                </div>
                <p className="font-mono">Explore the world of conversational AI with our advanced chatbot project.</p>
              </div>
              <div className="bg-green-900 border-green-700 p-4 rounded">
                <div className="flex items-center mb-2">
                  <Database className="h-10 w-10" />
                  <h3 className="font-mono ml-2">Data Engineering Learning</h3>
                </div>
                <p className="font-mono">Master the art of data engineering with our comprehensive learning path.</p>
              </div>
              <div className="bg-green-900 border-green-700 p-4 rounded">
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-10 w-10" />
                  <h3 className="font-mono ml-2">Financial App for Crypto/Stocks</h3>
                </div>
                <p className="font-mono">Track and analyze cryptocurrency and stock markets with our powerful financial tool.</p>
              </div>
              <div className="bg-green-900 border-green-700 p-4 rounded">
                <div className="flex items-center mb-2">
                  <Gamepad className="h-10 w-10" />
                  <h3 className="font-mono ml-2">Game Dashboard</h3>
                </div>
                <p className="font-mono">Manage and monitor your gaming statistics with our intuitive game dashboard.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 border-b border-green-700">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter font-mono sm:text-5xl text-center mb-12">
              Simple Pricing
            </h2>
            <div className="mx-auto max-w-sm">
              <div className="bg-green-900 border-green-700 p-4 rounded">
                <h3 className="font-mono">All-Access Pass</h3>
                <p className="font-mono text-green-400">Get access to all our projects</p>
                <div className="text-4xl font-bold mb-2 font-mono">$29.99/month</div>
                <ul className="list-disc list-inside space-y-2 font-mono">
                  <li>Access to all current projects</li>
                  <li>New projects as they're released</li>
                  <li>Community support</li>
                  <li>Regular updates and improvements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter font-mono sm:text-5xl">Ready to Start Learning?</h2>
                <p className="mx-auto max-w-[600px] text-green-400 md:text-xl font-mono">
                  Join the Low Perry Community Hub today and get access to all our projects. Start your journey towards
                  mastering cutting-edge technologies.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#get-started" className="bg-green-700 text-black hover:bg-green-600 px-4 py-2 rounded">
                  Get Started
                </Link>
                <Link href="#learn-more" className="border border-green-700 text-green-400 hover:bg-green-900 px-4 py-2 rounded">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-green-700">
        <p className="text-xs text-green-400 font-mono">© 2024 Low Perry Community Hub. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-green-300 transition-colors font-mono" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-green-300 transition-colors font-mono" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
