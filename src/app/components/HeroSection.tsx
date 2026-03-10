import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";

const doctorImg = "/images/doctor/dr-harivadan-hero.webp";

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
                Pranavayu
              </span>
            </div>

            <h1
              className="text-white mb-5"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.005em" }}
            >
              Advanced Cardiac Rehabilitation, Pulmonary Rehabilitation & Medical Wellness Center
            </h1>

            <p className="text-[#5CE0D8] max-w-lg mb-4" style={{ fontSize: "18px", lineHeight: 1.6, fontWeight: 500 }}>
              Rebuild Your Heart. Restore Your Health. Rediscover Your Life.
            </p>
            <p className="text-white/45 max-w-lg mb-10" style={{ fontSize: "15px", lineHeight: 1.7 }}>
              Pranavayu is a specialized center dedicated to Cardiac Rehabilitation, Pulmonary Rehabilitation, Hyperbaric Therapy, and Medical Wellness, designed to support individuals on their journey toward complete health recovery and long-term well-being.
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
                to="/programs"
                className="inline-flex items-center gap-2 px-7 py-3 border border-white/20 text-white/80 rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-300 text-[15px] hover:-translate-y-[1px]"
              >
                Start Recovery Program
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
