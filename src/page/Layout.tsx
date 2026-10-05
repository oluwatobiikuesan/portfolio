import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

// Scrolls to the section named in the URL hash (e.g. /#work), or to the top on page change.
function useScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const target = document.getElementById(hash.slice(1));
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [pathname, hash, key]);
}

export default function Layout() {
  useScrollToHash();

  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
