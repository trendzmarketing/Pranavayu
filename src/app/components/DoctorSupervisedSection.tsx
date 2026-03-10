import { motion } from "motion/react";
import { Stethoscope, ClipboardList, Users, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Stethoscope,
    title: "Medical Oversight",
    text: "Every rehabilitation program is designed and overseen by Dr. Harivadan Lukka, an M.Ch Cardiothoracic Surgeon with deep expertise in cardiac recovery.",
  },
  {
    icon: ClipboardList,
    title: "Personalized Protocols",
    text: "No two patients are the same. Care plans are individually tailored based on your diagnosis, surgical history, fitness baseline, and recovery goals.",
  },
  {
    icon: Users,
    title: "Multidisciplinary Team",
    text: "Rehab physiotherapists, respiratory therapists, nutritionists, and wellness coaches work together as a united care team around each patient.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Progress",
    text: "Regular assessment, monitoring, and functional testing ensure your recovery is on track — with transparent progress metrics and plan adjustments as needed.",
  },
];

export function DoctorSupervisedSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#0B4D6E]/8 text-[#0B4D6E] px-4 py-1.5 rounded-full text-[12px] tracking-widest uppercase font-medium mb-5">
              Our Approach
            </div>
            <h2
              className="text-[#1a3a4a] mb-5"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.2 }}
            >
              Doctor Supervised Rehabilitation Care
            </h2>
            <p className="text-gray-500 text-[16px] leading-relaxed mb-6">
              At Pranavayu, rehabilitation is not a passive process — it is a structured, medically supervised journey. Every step is guided by clinical expertise, advanced diagnostics, and a compassionate team committed to your full recovery.
            </p>
            <p className="text-gray-400 text-[15px] leading-relaxed">
              Our mission is to help every patient regain their strength, restore their confidence, and return to an active, fulfilling life — safely and sustainably.
            </p>

            {/* Mission callout */}
            <div className="mt-8 border-l-4 border-[#0FACA3] pl-5 bg-[#f0fbfa] rounded-r-xl py-4 pr-4">
              <p className="text-[#1a3a4a] font-semibold text-[15px] mb-1">Our Mission</p>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                To provide every patient with the highest standard of cardiac and pulmonary rehabilitation — combining advanced medical science with personalised, compassionate care — so they can reclaim their life after illness.
              </p>
            </div>
          </motion.div>

          {/* Right: Pillars grid */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gradient-to-br from-[#f8fffe] to-white border border-[#e8f5f4] rounded-2xl p-5 hover:border-[#0FACA3]/40 hover:shadow-[0_6px_24px_rgba(15,172,163,0.08)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0FACA3]/15 to-[#0B4D6E]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <p.icon size={18} className="text-[#0FACA3]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[#1a3a4a] font-semibold text-[14px] mb-2 leading-snug">{p.title}</h3>
                <p className="text-gray-400 text-[13px] leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
