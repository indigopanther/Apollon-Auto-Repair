import { useEffect, useState } from "react";
import Marquee from "./components/Marquee.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Gallery from "./pages/Gallery.jsx";
import Reviews from "./pages/Reviews.jsx";
import Contact from "./pages/Contact.jsx";

const ROUTES = {
  "/": Home,
  "/about": About,
  "/services": Services,
  "/gallery": Gallery,
  "/reviews": Reviews,
  "/contact": Contact,
};

function currentPath() {
  const h = window.location.hash.replace(/^#/, "");
  return h && ROUTES[h] ? h : "/";
}

export default function App() {
  const [path, setPath] = useState(currentPath());

  // hash-based routing — no dependency, deploys anywhere as static files
  useEffect(() => {
    const onHash = () => {
      setPath(currentPath());
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    };
    window.addEventListener("hashchange", onHash);
    if (!window.location.hash) window.location.hash = "#/";
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // reveal-on-scroll, re-run when the page changes
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);

  const Page = ROUTES[path] || Home;

  return (
    <>
      <Marquee />
      <Navbar path={path} />
      <main>
        <Page />
      </main>
      <Footer />
    </>
  );
}
