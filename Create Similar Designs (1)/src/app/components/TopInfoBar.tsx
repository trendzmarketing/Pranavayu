import { useState, useEffect } from "react";
import { Phone, MapPin, Clock, Globe } from "lucide-react";
import { Link } from "react-router";

export function TopInfoBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHidden(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-[#041E2D] text-white/70 hidden lg:block fixed left-0 right-0 z-[60] transition-transform duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ top: 0 }}
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-9 text-[11px]">
          <div className="flex items-center gap-5">
            <a href="tel:+917997592222" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={11} />
              <span>+91 79975 92222</span>
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={11} />
              <span>Maharanipeta, Visakhapatnam</span>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Clock size={11} />
              <span>Mon–Sat: 9AM–7PM</span>
            </span>
            <Link
              to="/international"
              className="flex items-center gap-1.5 hover:text-[#5CE0D8] transition-colors"
            >
              <Globe size={11} />
              <span>International Patients</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
