import Link from "next/link";

const Footer = () => {
  return (
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
  );
};

export default Footer;
