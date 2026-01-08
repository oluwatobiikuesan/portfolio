import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface HeaderLink {
  name: string;
  address: string;
}

const headerPageAddress: HeaderLink[] = [
  { name: "Home", address: "/" },
  { name: "Projects", address: "/project" },
  { name: "AI / Grok", address: "/ai" },
  { name: "Contact", address: "/contact" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold tracking-wider text-white hover:text-purple-400 transition-colors">
              XDOODLE
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {headerPageAddress.map((item, index) => {
              const isActive = location.pathname === item.address || (item.address !== "/" && location.pathname.startsWith(item.address));
              return (
                <Link
                  key={index}
                  to={item.address}
                  className={`text-sm uppercase tracking-widest font-medium transition-colors duration-200
                    ${isActive ? 'text-purple-400' : 'text-slate-300 hover:text-white'}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                 <span className="material-symbols-outlined text-2xl">close</span>
              ) : (
                <span className="material-symbols-outlined text-2xl">menu</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: '64px' }} // Below header
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {headerPageAddress.map((item, index) => {
             const isActive = location.pathname === item.address || (item.address !== "/" && location.pathname.startsWith(item.address));
             return (
            <Link
              key={index}
              to={item.address}
              className={`text-2xl font-light uppercase tracking-widest transition-colors ${isActive ? 'text-purple-400' : 'text-slate-300 hover:text-white'}`}
            >
              {item.name}
            </Link>
          )})}
        </nav>
      </div>
    </header>
  );
}
