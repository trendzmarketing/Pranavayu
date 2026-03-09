import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { TopInfoBar } from "./TopInfoBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";
import { MarketingStrip } from "./MarketingStrip";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Don't scroll to top if there's a hash — let the Header handle hash scrolling
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, hash]);
  return null;
}

export function Layout() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <ScrollToTop />
      <TopInfoBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MarketingStrip />
      <FloatingButtons />
    </div>
  );
}