import { Link, useLocation } from "react-router-dom";
import { navLinks, profile } from "../data/profile";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const location = useLocation();
  const current = location.pathname + location.hash;

  const closeMenu = () => {
    // daisyUI dropdowns stay open while focused; blur to close after a tap.
    (document.activeElement as HTMLElement | null)?.blur();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-base-300/70 bg-base-100/80 backdrop-blur-md">
      <nav className="navbar mx-auto max-w-6xl px-4 sm:px-6">
        <div className="navbar-start">
          <Link to="/" className="font-display text-lg font-semibold tracking-tight" aria-label="Home">
            {profile.firstName}
            <span className="text-base-content/40">.</span>
          </Link>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-1 px-1 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`rounded-full px-4 ${current === link.to ? "menu-active" : "text-base-content/70"}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-1">
          <ThemeToggle />
          <Link to="/#contact" className="btn btn-primary btn-sm hidden rounded-full px-5 sm:inline-flex">
            Let's talk
          </Link>

          <div className="dropdown dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm" aria-label="Open menu">
              <Icon name="menu" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-10 mt-3 w-56 rounded-box border border-base-300 bg-base-100 p-2 shadow-lg"
            >
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} onClick={closeMenu} className="py-3">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
