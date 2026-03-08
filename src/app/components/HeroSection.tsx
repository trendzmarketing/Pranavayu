import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Clock, HeartPulse, Globe, Stethoscope } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRef } from "react";

const doctorImg = "/images/doctor/dr-harivadan-hero.webp";

const stats = [
  { icon: Clock, number: "15+", label: "Years Expertise" },
  { icon: HeartPulse, number: "5000+", label: "Advanced Oxygen Therapies" },
  { icon: Globe, number: "20+", label: "International Patients" },
  { icon: Stethoscope, number: "100%", label: "Personalized Recovery" },
];

function ECGLine() {
  return (
    <svg
      className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none z-0"
      viewBox="0 0 1200 100"
      preserveAspectRatio="none"
      style={{ width: "200%", height: "140px", opacity: 0.07 }}
    >
      <defs>
        <filter id="ecgGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.path
        d="M0,50 L100,50 L120,50 L140,20 L160,80 L180,10 L200,90 L220,50 L280,50 L300,50 L320,50 L340,20 L360,80 L380,10 L400,90 L420,50 L480,50 L500,50 L520,50 L540,20 L560,80 L580,10 L600,90 L620,50 L700,50 L720,50 L740,20 L760,80 L780,10 L800,90 L820,50 L900,50 L920,50 L940,20 L960,80 L980,10 L1000,90 L1020,50 L1100,50 L1200,50"
        fill="none"
        stroke="#0FACA3"
        strokeWidth="1.2"
        filter="url(#ecgGlow)"
        initial={{ pathLength: 0, x: 0 }}
        animate={{ pathLength: 1, x: [0, -600] }}
        transition={{
          pathLength: { duration: 3, ease: "easeInOut" },
          x: { duration: 8, ease: "linear", repeat: Infinity },
        }}
      />
    </svg>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const statY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#062A3E] via-[#0a3f58] to-[#062A3E]/95 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B4D6E]/30 to-transparent z-0" />

      {/* Animated diagonal oxygen flow gradient */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, transparent 0%, rgba(15,172,163,0.04) 30%, transparent 60%, rgba(11,77,110,0.03) 80%, transparent 100%)",
          backgroundSize: "200% 200%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating ECG line */}
      <ECGLine />

      <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/5">
              <div className="w-1.5 h-1.5 bg-[#0FACA3] rounded-full animate-pulse" />
              <span className="text-white/55 text-[11px] tracking-[0.15em] uppercase">
                Technology-Driven Recovery
              </span>
            </div>

            <h1
              className="text-white mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.005em" }}
            >
              Precision-Led Cardiopulmonary Recovery
            </h1>

            <p className="text-white/50 max-w-lg mb-3" style={{ fontSize: "18px", lineHeight: 1.6 }}>
              Advanced Cardiac, Pulmonary & Neurovascular Rehabilitation
            </p>
            <p className="text-white/40 max-w-lg mb-10" style={{ fontSize: "16px", lineHeight: 1.6 }}>
              Under the Expertise of Dr. Harivadan Lukka, M.Ch — Cardiothoracic & Vascular Surgeon
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#0FACA3] text-white rounded-full hover:bg-[#0d9990] transition-all duration-300 text-[15px] hover:shadow-lg hover:shadow-[#0FACA3]/25 hover:-translate-y-[1px]"
              >
                Book Consultation
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <Link
                to="/#programs"
                className="inline-flex items-center gap-2 px-7 py-3 border border-white/20 text-white/80 rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-300 text-[15px] hover:-translate-y-[1px]"
              >
                Explore Programs
              </Link>
            </div>
          </motion.div>

          {/* Right — Doctor image with radial vignette */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Curved gradient background shape */}
              <div className="absolute -inset-5 bg-gradient-to-br from-[#0FACA3]/20 via-[#0B4D6E]/15 to-transparent rounded-[2rem] rotate-2" />
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#0FACA3]/10 to-[#0B4D6E]/10 rounded-[1.75rem] -rotate-1" />

              <div className="relative rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src={doctorImg}
                  alt="Dr. Harivadan Lukka"
                  className="relative w-[380px] h-[480px] object-cover z-10"
                />
                {/* Radial vignette fade */}
                <div className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(6,42,62,0.4)_100%)]" />
              </div>

              {/* Floating name card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -bottom-4 -left-6 bg-white/90 backdrop-blur-lg rounded-2xl px-5 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.1)] z-30"
              >
                <div className="text-[#1a3a4a] text-[14px]" style={{ fontWeight: 600 }}>Dr. Harivadan Lukka</div>
                <div className="text-gray-400 text-[12px]">M.Ch Cardiothoracic Surgery</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Glassmorphism stat cards with parallax */}
        <motion.div
          style={{ y: statY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="bg-white/[0.07] backdrop-blur-lg border border-white/[0.1] rounded-2xl px-6 py-5 hover:bg-white/[0.12] transition-all duration-300"
            >
              <stat.icon size={18} className="text-[#0FACA3] mb-2.5" strokeWidth={1.5} />
              <div className="text-white" style={{ fontSize: "24px", fontWeight: 700 }}>
                {stat.number}
              </div>
              <div className="text-white/35 text-[11px] tracking-wider uppercase mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
