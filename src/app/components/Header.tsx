import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
const logoImg = "/images/pranavayu-logo.webp";

interface SubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: SubItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Dr. Harivadan Lukka", href: "/doctor" },
      { label: "Our Facility", href: "/facility" },
      { label: "Patient Reviews", href: "/testimonials" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Services Overview", href: "/services" },
      { label: "Programs", href: "/programs" },
      { label: "Therapies", href: "/therapies" },
      { label: "Conditions We Treat", href: "/conditions" },
      { label: "Patient Journey", href: "/patient-journey" },
    ],
  },
  { label: "International Patients", href: "/international" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [location]);

  // Handle hash scrolling after navigation to homepage
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.slice(1);
      // Delay slightly to let the page render
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    setMobileOpen(false);
    setOpenDropdown(null);

    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        // Already on homepage — just scroll
        e?.preventDefault();
        scrollToSection(id);
        // Update URL hash without full navigation
        window.history.replaceState(null, "", href);
      } else {
        // On another page — navigate to homepage with hash
        e?.preventDefault();
        navigate("/" + "#" + id);
      }
    }
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-white/92 backdrop-blur-lg shadow-[0_1px_3px_rgba(0,0,0,0.06)] top-0 border-b border-black/[0.06]"
        : "bg-transparent top-0 lg:top-9 border-b border-white/[0.08]"
        }`}
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 py-1">
            <img
              src={logoImg}
              alt="Pranavayu"
              className={`h-9 lg:h-11 w-auto transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"
                }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={() => item.children && handleMouseLeave()}
              >
                {item.href ? (
                  item.href.startsWith("/#") ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(item.href!, e)}
                      className={`px-3.5 py-2 rounded-lg text-[13px] transition-all duration-200 inline-flex items-center gap-1 ${scrolled
                        ? "text-gray-600 hover:text-[#0B4D6E] hover:bg-gray-50/80"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                        }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3.5 py-2 rounded-lg text-[13px] transition-all duration-200 inline-flex items-center gap-1 ${scrolled
                        ? "text-gray-600 hover:text-[#0B4D6E] hover:bg-gray-50/80"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                        }`}
                    >
                      {item.label}
                    </Link>
                  )
                ) : (
                  <button
                    className={`px-3.5 py-2 rounded-lg text-[13px] transition-all duration-200 inline-flex items-center gap-1 ${scrolled
                      ? "text-gray-600 hover:text-[#0B4D6E] hover:bg-gray-50/80"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={13}
                      strokeWidth={1.5}
                      className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                )}

                {/* Dropdown with slide-down animation */}
                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-2 min-w-[240px]"
                    >
                      <div className="bg-white rounded-xl shadow-[0_12px_48px_rgba(0,0,0,0.1)] border border-gray-100/80 py-2 px-1.5 overflow-hidden">
                        {item.children.map((child) =>
                          child.href.startsWith("/#") ? (
                            <a
                              key={child.label}
                              href={child.href}
                              onClick={(e) => handleNavClick(child.href, e)}
                              className="block px-4 py-2.5 text-[13px] text-gray-500 hover:text-[#0B4D6E] hover:bg-[#f0f9f8] rounded-lg transition-all duration-150"
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              key={child.label}
                              to={child.href}
                              className="block px-4 py-2.5 text-[13px] text-gray-500 hover:text-[#0B4D6E] hover:bg-[#f0f9f8] rounded-lg transition-all duration-150"
                            >
                              {child.label}
                            </Link>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link
              to="/contact"
              className="ml-4 px-5 py-2 bg-[#0B4D6E] text-white rounded-full text-[13px] hover:bg-[#093d58] transition-all duration-200 hover:shadow-lg hover:shadow-[#0B4D6E]/20 hover:-translate-y-[1px]"
            >
              Book Consultation
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors ${scrolled ? "text-[#1a3a4a]" : "text-white"
              }`}
          >
            {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
          >
            <nav className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-0.5">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    item.href.startsWith("/#") ? (
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(item.href!, e)}
                        className="px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-xl text-[14px] block"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-xl text-[14px] block"
                      >
                        {item.label}
                      </Link>
                    )
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label
                          )
                        }
                        className="w-full px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-xl text-[14px] flex items-center justify-between"
                      >
                        {item.label}
                        <ChevronDown
                          size={15}
                          strokeWidth={1.5}
                          className={`text-gray-400 transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === item.label && item.children && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-3 pl-3 border-l border-gray-100 overflow-hidden"
                          >
                            {item.children.map((child) =>
                              child.href.startsWith("/#") ? (
                                <a
                                  key={child.label}
                                  href={child.href}
                                  onClick={(e) => handleNavClick(child.href, e)}
                                  className="block px-3 py-2.5 text-[13px] text-gray-500 hover:text-[#0B4D6E] rounded-lg hover:bg-gray-50"
                                >
                                  {child.label}
                                </a>
                              ) : (
                                <Link
                                  key={child.label}
                                  to={child.href}
                                  className="block px-3 py-2.5 text-[13px] text-gray-500 hover:text-[#0B4D6E] rounded-lg hover:bg-gray-50"
                                >
                                  {child.label}
                                </Link>
                              )
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="mt-3 px-5 py-2.5 bg-[#0B4D6E] text-white rounded-full text-center text-[14px]"
              >
                Book Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
