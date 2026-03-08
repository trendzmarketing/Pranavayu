import { motion } from "motion/react";
import { Link } from "react-router";
import { HeartPulse, Wind, Brain, Zap, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: HeartPulse,
    title: "Cardiac Conditions",
    conditions: [
      "Coronary Artery Disease",
      "Heart Failure Recovery",
      "Post Bypass Surgery",
      "Post Angioplasty / Stenting",
      "Valve Replacement Recovery",
      "Arrhythmia Management",
    ],
  },
  {
    icon: Wind,
    title: "Pulmonary Conditions",
    conditions: [
      "COPD",
      "Pulmonary Fibrosis",
      "Post-COVID Lung Damage",
      "Chronic Bronchitis",
      "Asthma Rehabilitation",
      "Post-Lung Surgery",
    ],
  },
  {
    icon: Brain,
    title: "Neurovascular Conditions",
    conditions: [
      "Stroke Recovery",
      "Diabetic Neuropathy",
      "Peripheral Nerve Injury",
      "Post-Brain Surgery Rehab",
      "Balance & Gait Disorders",
      "Cognitive Rehabilitation",
    ],
  },
  {
    icon: Zap,
    title: "Vascular Conditions",
    conditions: [
      "Peripheral Vascular Disease",
      "Deep Vein Thrombosis",
      "Post-Aortic Surgery",
      "Chronic Limb Ischemia",
      "Diabetic Foot Recovery",
      "Varicose Vein Management",
    ],
  },
];

export function ConditionsSection() {
  return (
    <section id="conditions" className="py-[60px] md:py-[80px] lg:py-[120px] bg-[#f6f9fc]">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#0FACA3] text-[11px] tracking-[0.15em] uppercase mb-4">
            Conditions We Treat
          </p>
          <h2
            className="text-[#1a3a4a] mb-3"
            style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)", fontWeight: 600 }}
          >
            Specialized Recovery for Complex Conditions
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto" style={{ fontSize: "16px", lineHeight: 1.6 }}>
            Clinically guided rehabilitation programs across four major specialties.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-gray-100/80 hover:border-[#0FACA3]/15 hover:shadow-[0_4px_24px_rgba(15,172,163,0.06)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#0FACA3]/8 flex items-center justify-center shrink-0">
                  <cat.icon size={20} className="text-[#0FACA3]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[#1a3a4a]" style={{ fontSize: "15px", fontWeight: 600 }}>
                  {cat.title}
                </h3>
              </div>
              <div className="space-y-2.5">
                {cat.conditions.map((c) => (
                  <div key={c} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 bg-[#0FACA3]/40 rounded-full shrink-0 mt-[7px]" />
                    <span className="text-gray-500 text-[13px]">{c}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Spectrum Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/conditions"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#0B4D6E]/15 text-[#0B4D6E] rounded-full text-[14px] hover:bg-[#0B4D6E]/5 hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300"
            style={{ fontWeight: 500 }}
          >
            View Complete Condition List
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
