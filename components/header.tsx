import "@/styles/header.css";
import Link from "next/link";

/**
 *
 * @returns Header component
 */

export default function Header() {
  return (
    <header className="header">
      <h2>Binr</h2>
      <div className="nav-container">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <a href="#">Contact</a>
      </div>
    </header>
  );
}
