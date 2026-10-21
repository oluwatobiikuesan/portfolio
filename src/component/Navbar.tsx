import { useEffect, useState, type CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, profile } from "../data/profile";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const location = useLocation();
  const current = location.pathname + location.hash;
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape, or when the screen grows past the mobile breakpoint.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 48rem)");
    const onResize = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  // Opening the menu takes the visitor to the top, where the menu sits in the page flow.
  const toggleMenu = () => {
    if (!open) window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(!open);
  };

  return (
    <header
      className={`top-0 z-50 border-b border-base-300/70 bg-base-100/80 backdrop-blur-md ${
        open ? "relative" : "sticky"
      }`}
    >
      <nav className="navbar mx-auto max-w-6xl px-4 sm:px-6">
        <div className="navbar-start">
          <Link to="/" onClick={() => setOpen(false)} className="font-display text-lg font-semibold tracking-tight" aria-label="Home">
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
                  className={`rounded-field px-4 ${current === link.to ? "menu-active" : "text-base-content/70"}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-1">
          <ThemeToggle />
          <Link to="/#contact" className="btn btn-primary btn-sm hidden px-5 md:inline-flex">
            Let's talk
          </Link>
          <button
            type="button"
            onClick={toggleMenu}
            className="btn btn-ghost btn-square btn-sm md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-base-300/70 md:hidden">
          <ul className="mx-auto max-w-6xl px-4 pt-2 pb-8 sm:px-6">
            {navLinks.map((link, i) => (
              <li
                key={link.to}
                className="rise border-b border-base-300/70"
                style={{ "--delay": `${i * 50}ms` } as CSSProperties}
              >
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-4 font-display text-3xl font-medium tracking-tight ${
                    current === link.to ? "text-base-content" : "text-base-content/60"
                  }`}
                >
                  {link.label}
                  <Icon name="arrow" className="size-5 text-base-content/30" />
                </Link>
              </li>
            ))}
            <li className="rise pt-6" style={{ "--delay": `${navLinks.length * 50}ms` } as CSSProperties}>
              <Link to="/#contact" onClick={() => setOpen(false)} className="btn btn-primary btn-block">
                Let's talk
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
