import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    emoji: "❤️",
    title: "Cardiac Rehabilitation",
    tagline: "Structured Heart Recovery",
    description:
      "A medically supervised program designed to help patients recover after heart attacks, bypass surgery, angioplasty, valve repair, and heart failure.",
    href: "/cardiac-rehabilitation",
    color: "from-rose-500/10 to-red-400/5",
    accent: "#e85d6a",
  },
  {
    emoji: "💨",
    title: "Pulmonary Rehabilitation",
    tagline: "Improving Lung Health",
    description:
      "Comprehensive care for patients with COPD, asthma, post-COVID lung conditions, and other chronic respiratory diseases.",
    href: "/pulmonary-rehabilitation",
    color: "from-sky-500/10 to-blue-400/5",
    accent: "#0ea5e9",
  },
  {
    emoji: "🫧",
    title: "Hyperbaric Oxygen Therapy",
    tagline: "Supporting Healing",
    description:
      "HBOT delivers 100% pure oxygen in a pressurised chamber, accelerating tissue repair, reducing inflammation, and supporting complex wound healing.",
    href: "/hyperbaric-oxygen-therapy",
    color: "from-teal-500/10 to-cyan-400/5",
    accent: "#0FACA3",
  },
  {
    emoji: "🏥",
    title: "Medical Rehabilitation",
    tagline: "Comprehensive Rehabilitation Care",
    description:
      "For patients recovering from stroke, neurological conditions, major surgery, or prolonged illness requiring structured medical support.",
    href: "/medical-rehabilitation",
    color: "from-emerald-500/10 to-green-400/5",
    accent: "#10b981",
  },
  {
    emoji: "🛡️",
    title: "Preventive Cardiology",
    tagline: "Protecting the Heart",
    description:
      "Early detection, risk assessment, and preventive strategies to protect your heart before a cardiac event occurs.",
    href: "/preventive-cardiology",
    color: "from-violet-500/10 to-purple-400/5",
    accent: "#8b5cf6",
  },
  {
    emoji: "✨",
    title: "Lifestyle Medicine",
    tagline: "Holistic Health Approach",
    description:
      "Evidence-based lifestyle interventions including nutrition, stress management, sleep optimization, and behavioural health counselling.",
    href: "/lifestyle-medicine",
    color: "from-amber-500/10 to-yellow-400/5",
    accent: "#f59e0b",
  },
  {
    emoji: "🧘",
    title: "Yoga, Nutrition & Fitness",
    tagline: "Supporting Recovery Naturally",
    description:
      "Therapeutic yoga, clinical nutrition planning, and supervised exercise therapy to complement and enhance medical rehabilitation.",
    href: "/yoga-nutrition-therapy",
    color: "from-lime-500/10 to-green-400/5",
    accent: "#84cc16",
  },
  {
    emoji: "🏢",
    title: "Corporate Wellness",
    tagline: "Promoting Workplace Health",
    description:
      "Tailored corporate health programs including cardiac screening, stress management, and preventive wellness for organisations and their employees.",
    href: "/corporate-wellness",
    color: "from-orange-500/10 to-amber-400/5",
    accent: "#f97316",
  },
];

export function CoreProgramsGrid() {
  return (
    <section className="py-24 bg-[#f9fefe]">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#0FACA3]/10 text-[#0FACA3] px-4 py-1.5 rounded-full text-[12px] tracking-widest uppercase font-medium mb-5">
            Core Programs
          </div>
          <h2
            className="text-[#1a3a4a] mb-4"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Comprehensive Rehabilitation Care Under One Roof
          </h2>
          <p className="text-gray-500 text-[16px] leading-relaxed">
            Pranavayu brings together eight specialised programs to address every dimension of cardiac, pulmonary, and medical recovery.
          </p>
        </motion.div>

        {/* 8-card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p, i) => (
            <motion.div
              key={p.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link
                to={p.href}
                className={`flex flex-col h-full bg-white border border-[#e8f5f4] rounded-2xl p-6 hover:border-[#0FACA3]/40 hover:shadow-[0_8px_32px_rgba(15,172,163,0.1)] transition-all duration-300 group`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {p.emoji}
                </div>
                <p className="text-[11px] uppercase tracking-widest font-medium mb-1" style={{ color: p.accent }}>
                  {p.tagline}
                </p>
                <h3 className="text-[#1a3a4a] font-semibold text-[15px] mb-2 leading-snug">{p.title}</h3>
                <p className="text-gray-400 text-[13px] leading-relaxed flex-1">{p.description}</p>
                <div className="mt-4 flex items-center gap-1 text-[13px] font-medium" style={{ color: p.accent }}>
                  Learn more
                  <ArrowRight size={13} strokeWidth={2} className="group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
