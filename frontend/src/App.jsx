import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import PageLoader from "./components/PageLoader.jsx";
import Home from "./pages/Home.jsx";
import DownloadPage from "./pages/DownloadPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import { Dmca, PrivacyPolicy, Disclaimer, Contact } from "./pages/Legal.jsx";
import GameTicker from "./components/GameTicker";

/**
 * ScrollToTop
 * React Router doesn't reset scroll position between routes by default.
 * Every time the path changes, jump back to the top of the new page.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" in window ? "instant" : "auto",
    });
  }, [pathname]);
  return null;
}

export default function App() {
  // Brief initial loading animation for a fast, polished first paint
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <PageLoader />;

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <GameTicker />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download/:slug" element={<DownloadPage />} />
          <Route path="/dmca" element={<Dmca />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
            <GameTicker />

      <Footer />
      <BackToTop />
    </div>
  );
}
