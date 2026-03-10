import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, MapPin, Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Patients Rehabilitated" },
  { icon: Award, value: "M.Ch", label: "Cardiothoracic Expertise" },
  { icon: Clock, value: "3–6", label: "Month Programs" },
  { icon: MapPin, value: "Vizag", label: "Based in Visakhapatnam" },
];

export function TrustSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#062A3E] via-[#0a3f58] to-[#062A3E] relative overflow-hidden">
      {/* Decorative bg blur */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0FACA3]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#0B4D6E]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/10 px-4 py-1.5 rounded-full text-[12px] tracking-widest uppercase text-white/60 font-medium mb-5">
              <MapPin size={11} />
              Visakhapatnam, India
            </div>
            <h2
              className="text-white mb-5"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.2 }}
            >
              A Trusted Cardiac Rehab Center in Vizag
            </h2>
            <p className="text-white/55 text-[16px] leading-relaxed mb-6">
              Pranavayu is Visakhapatnam's dedicated cardiac rehabilitation center — founded on the belief that every patient deserves comprehensive, high-quality recovery care close to home.
            </p>
            <p className="text-white/40 text-[15px] leading-relaxed mb-8">
              Whether you have had a heart attack, bypass surgery, angioplasty, valve replacement, or are managing a chronic heart or lung condition — Pranavayu is here to guide your complete recovery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#0FACA3] text-white rounded-full text-[15px] hover:bg-[#0d9990] transition-all duration-300 hover:shadow-lg hover:shadow-[#0FACA3]/25 hover:-translate-y-[1px]"
              >
                Begin Your Journey
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3 border border-white/20 text-white/80 rounded-full text-[15px] hover:bg-white/5 hover:border-white/35 transition-all duration-300 hover:-translate-y-[1px]"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Right stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0FACA3]/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <s.icon size={18} className="text-[#0FACA3]" strokeWidth={1.5} />
                </div>
                <div className="text-white font-bold text-[2rem] leading-none mb-1">{s.value}</div>
                <div className="text-white/45 text-[13px]">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
