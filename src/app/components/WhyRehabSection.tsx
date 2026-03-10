import { motion } from "motion/react";
import { Heart, Clock, Activity, Shield } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Cardiac Vulnerabilities Persist",
    text: "After a heart attack, surgery, or cardiac event, the heart remains in a vulnerable state. Structured rehabilitation significantly reduces the risk of repeat events and complications.",
  },
  {
    icon: Activity,
    title: "Functional Recovery Takes Time",
    text: "Rebuilding cardiovascular strength, lung capacity, and physical endurance requires a supervised, progressive program — not just rest at home.",
  },
  {
    icon: Clock,
    title: "The Critical Recovery Window",
    text: "The weeks and months following a cardiac event represent a critical window where guided rehabilitation has the greatest impact on long-term outcomes.",
  },
  {
    icon: Shield,
    title: "Prevention of Future Events",
    text: "Rehab addresses risk factors proactively — through lifestyle modification, medication management, and monitored exercise — dramatically lowering the chance of recurrence.",
  },
];

export function WhyRehabSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f8fffe] to-[#edf8f7]">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#0FACA3]/10 text-[#0FACA3] px-4 py-1.5 rounded-full text-[12px] tracking-widest uppercase font-medium mb-5">
            Why Rehabilitation
          </div>
          <h2
            className="text-[#1a3a4a] mb-5"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Recovery Does Not End in the Hospital
          </h2>
          <p className="text-gray-500 text-[16px] leading-relaxed max-w-2xl">
            Discharge is only the beginning. The real journey to full recovery — physical, functional, and emotional — happens after you leave the hospital. Pranavayu bridges this critical gap with structured, medically supervised rehabilitation care.
          </p>
        </motion.div>

        {/* Reason cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-[#e8f5f4] hover:border-[#0FACA3]/40 hover:shadow-[0_8px_32px_rgba(15,172,163,0.08)] transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0FACA3]/15 to-[#0B4D6E]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <r.icon size={20} className="text-[#0FACA3]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#1a3a4a] font-semibold text-[15px] mb-2 leading-snug">{r.title}</h3>
              <p className="text-gray-500 text-[13.5px] leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 bg-gradient-to-r from-[#062A3E] to-[#0B4D6E] rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="flex-1">
            <p className="text-white font-semibold text-[17px] leading-snug mb-1">
              Studies show that cardiac rehab reduces hospital readmission by up to 30%
            </p>
            <p className="text-white/55 text-[13.5px]">
              — and improves quality of life, exercise capacity, and psychological well-being.
            </p>
          </div>
          <div className="shrink-0 text-[#5CE0D8] font-bold text-[2.25rem] leading-none">30%</div>
        </motion.div>
      </div>
    </section>
  );
}
