import Link from "next/link";
import { Rocket } from "lucide-react";

const Header = () => {
  return (
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
  );
};

export default Header;
