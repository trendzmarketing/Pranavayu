import { Link } from "react-router";
import { MapPin, Phone, Mail, Clock, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#041E2D] text-white relative">
      {/* Subtle top gradient line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#0FACA3]/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <span className="block text-white" style={{ fontSize: "17px", fontWeight: 600 }}>
                Pranavayu
              </span>
              <span className="text-[9px] tracking-[0.15em] uppercase text-white/25">
                Cardiopulmonary Rehabilitation Center
              </span>
            </div>
            <p className="text-white/35 text-[13px] max-w-xs" style={{ lineHeight: 1.7 }}>
              Advanced Cardiopulmonary Recovery, Redefined. Technology-driven, doctor-led rehabilitation
              for cardiac, pulmonary, and neurovascular recovery.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-[#0FACA3] hover:border-[#0FACA3]/30 transition-all duration-200"
                >
                  <social.icon size={14} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-5" style={{ fontSize: "14px", fontWeight: 600 }}>Quick Links</h4>
            <div className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/#about" },
                { label: "Programs", to: "/#programs" },
                { label: "Therapies", to: "/#therapies" },
                { label: "International", to: "/international" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block text-white/35 hover:text-[#0FACA3] transition-colors text-[13px]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white mb-5" style={{ fontSize: "14px", fontWeight: 600 }}>Programs</h4>
            <div className="space-y-2.5">
              {[
                { label: "Cardiac Rehabilitation", slug: "cardiac-rehabilitation" },
                { label: "Pulmonary Rehabilitation", slug: "pulmonary-rehabilitation" },
                { label: "Neurovascular Recovery", slug: "neurovascular-recovery" },
                { label: "Post-Surgical Recovery", slug: "post-surgical-recovery" },
                { label: "Long COVID Recovery", slug: "long-covid-recovery" },
                { label: "Preventive Rehab", slug: "preventive-cardio" },
              ].map((item) => (
                <Link key={item.slug} to={`/programs/${item.slug}`} className="block text-white/35 hover:text-[#0FACA3] transition-colors text-[13px]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <h4 className="text-white mb-5" style={{ fontSize: "14px", fontWeight: 600 }}>Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#0FACA3] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-white/35 text-[13px]">
                  1st Floor, Nowroji Road, Maharanipeta, Visakhapatnam – 530002
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#0FACA3] shrink-0" strokeWidth={1.5} />
                <div>
                  <a href="tel:+917997592222" className="block text-white/35 hover:text-[#0FACA3] text-[13px]">
                    +91 79975 92222
                  </a>
                  <a href="tel:+919133685222" className="block text-white/35 hover:text-[#0FACA3] text-[13px]">
                    +91 91336 85222
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5 min-w-0">
                <Mail size={14} className="text-[#0FACA3] shrink-0" strokeWidth={1.5} />
                <a href="mailto:pranavayurehabilitation@gmail.com" className="text-white/35 hover:text-[#0FACA3] text-[13px] break-all">
                  pranavayurehabilitation@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock size={14} className="text-[#0FACA3] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-white/35 text-[13px]">
                  Mon–Sat: 9:00 AM – 7:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with slightly darker tone */}
        <div className="border-t border-white/6 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#031820]/30 -mx-5 lg:-mx-8 px-5 lg:px-8 pb-2 rounded-b-lg">
          <p className="text-white/20 text-[11px]">
            &copy; 2026 Pranavayu Cardiopulmonary Rehabilitation Center. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link to="/privacy" className="text-white/20 hover:text-white/40 text-[11px] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white/20 hover:text-white/40 text-[11px] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
