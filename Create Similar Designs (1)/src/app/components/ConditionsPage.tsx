import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  Wind,
  Brain,
  Droplets,
  Dna,
  ChevronDown,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface ConditionCategory {
  id: string;
  icon: typeof Heart;
  title: string;
  accent: string;
  conditions: string[];
}

const categories: ConditionCategory[] = [
  {
    id: "cardiac",
    icon: Heart,
    title: "Cardiac Conditions",
    accent: "#E74C6F",
    conditions: [
      "Coronary Artery Disease",
      "Post Angioplasty Recovery",
      "Post Bypass Surgery",
      "Heart Failure Recovery",
      "Valve Repair / Replacement Recovery",
      "Cardiomyopathy",
      "Hypertension with Cardiac Risk",
      "Arrhythmia Rehabilitation",
      "Post Heart Attack Recovery",
    ],
  },
  {
    id: "pulmonary",
    icon: Wind,
    title: "Pulmonary Conditions",
    accent: "#0FACA3",
    conditions: [
      "COPD",
      "Chronic Bronchitis",
      "Pulmonary Fibrosis",
      "Asthma (Moderate to Severe)",
      "Post-COVID Lung Damage",
      "Interstitial Lung Disease",
      "Breathlessness of Unknown Origin",
      "Recurrent Respiratory Infections",
    ],
  },
  {
    id: "neurovascular",
    icon: Brain,
    title: "Neurovascular & Neurological",
    accent: "#6366F1",
    conditions: [
      "Stroke Recovery",
      "Transient Ischemic Attack (TIA)",
      "Peripheral Neuropathy",
      "Diabetic Neuropathy",
      "Post-Neurosurgical Recovery",
      "Balance & Gait Disorders",
      "Vascular Cognitive Impairment",
      "Nerve Compression Syndromes",
    ],
  },
  {
    id: "vascular",
    icon: Droplets,
    title: "Vascular & Circulatory",
    accent: "#0B4D6E",
    conditions: [
      "Peripheral Vascular Disease",
      "Chronic Venous Insufficiency",
      "Post Vascular Surgery Recovery",
      "Leg Ulcers (Circulatory Cause)",
      "Edema Related to Vascular Dysfunction",
    ],
  },
  {
    id: "metabolic",
    icon: Dna,
    title: "Metabolic & Systemic",
    accent: "#D97706",
    conditions: [
      "Diabetes with Complications",
      "Obesity-Related Cardiovascular Risk",
      "Post Long COVID Syndrome",
      "Chronic Fatigue Syndrome",
      "Age-Related Functional Decline",
    ],
  },
];

export function ConditionsPage() {
  const [expanded, setExpanded] = useState<string | null>("cardiac");

  const toggle = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 lg:pt-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[#041E2D] via-[#0B4D6E] to-[#0a3c55]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(15,172,163,0.12),transparent_55%)]" />
        {/* Subtle animated pulse circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-[#0FACA3]/8"
              style={{
                width: 200 + i * 80,
                height: 200 + i * 80,
                right: `${-5 + i * 6}%`,
                top: `${10 + i * 10}%`,
              }}
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-5 lg:px-8 py-20 lg:py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[#0FACA3] text-[11px] tracking-[0.2em] uppercase mb-5">Conditions We Treat</p>
            <h1 className="text-white mb-5" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 600 }}>
              Specialized Recovery for
              <br />
              <span className="text-white/70">Complex Conditions</span>
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto text-[15px]" style={{ lineHeight: 1.8 }}>
              At Pranavayu, we provide structured recovery programs for a wide spectrum of cardiopulmonary
              and neurovascular conditions, guided by clinical precision and advanced oxygen-based therapies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Count Strip */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setExpanded(cat.id);
                  document.getElementById("conditions-list")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-[12.5px] transition-all duration-300 cursor-pointer ${
                  expanded === cat.id
                    ? "bg-[#0B4D6E]/8 border-[#0B4D6E]/15 text-[#1a3a4a]"
                    : "bg-white border-gray-150 text-gray-400 hover:border-gray-200 hover:text-gray-500"
                }`}
                style={{ fontWeight: 500 }}
              >
                <cat.icon size={14} strokeWidth={1.5} style={{ color: cat.accent }} />
                {cat.title}
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor: expanded === cat.id ? `${cat.accent}15` : "#f1f5f9",
                    color: expanded === cat.id ? cat.accent : "#94a3b8",
                    fontWeight: 600,
                  }}
                >
                  {cat.conditions.length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Expandable Conditions List */}
      <section id="conditions-list" className="py-16 lg:py-24 bg-[#f6f9fc]">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="space-y-3">
            {categories.map((cat, catIdx) => {
              const isOpen = expanded === cat.id;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.05 }}
                  className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "bg-white border-[#0B4D6E]/10 shadow-[0_4px_24px_rgba(11,77,110,0.06)]"
                      : "bg-white/70 border-gray-100 hover:border-gray-200"
                  }`}
                >
                  {/* Category Header */}
                  <button
                    onClick={() => toggle(cat.id)}
                    className="w-full flex items-center justify-between px-6 py-5 cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300"
                        style={{ backgroundColor: `${cat.accent}10` }}
                      >
                        <cat.icon
                          size={19}
                          strokeWidth={1.5}
                          style={{ color: cat.accent }}
                        />
                      </div>
                      <div className="text-left">
                        <h3 className="text-[#1a3a4a]" style={{ fontSize: "15.5px", fontWeight: 600 }}>
                          {cat.title}
                        </h3>
                        <p className="text-gray-400 text-[12px] mt-0.5">
                          {cat.conditions.length} conditions
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-colors duration-200 ${
                          isOpen ? "text-[#0FACA3]" : "text-gray-300 group-hover:text-gray-400"
                        }`}
                        strokeWidth={1.5}
                      />
                    </motion.div>
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="border-t border-gray-100 pt-5">
                            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                              {cat.conditions.map((condition, i) => (
                                <motion.div
                                  key={condition}
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.03 }}
                                  className="flex items-center gap-3 py-1.5 group/item"
                                >
                                  <CheckCircle2
                                    size={15}
                                    strokeWidth={1.5}
                                    style={{ color: cat.accent }}
                                    className="shrink-0 opacity-60"
                                  />
                                  <span className="text-gray-600 text-[13.5px] group-hover/item:text-[#1a3a4a] transition-colors duration-200">
                                    {condition}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Supporting Copy */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <div className="inline-flex items-start gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-5 border border-[#0FACA3]/10">
              <div className="w-8 h-8 rounded-full bg-[#0FACA3]/8 flex items-center justify-center shrink-0 mt-0.5">
                <ArrowRight size={14} className="text-[#0FACA3]" strokeWidth={1.5} />
              </div>
              <p className="text-gray-500 text-[13.5px] text-left" style={{ lineHeight: 1.7 }}>
                If your condition is not listed, our team will evaluate and design a structured
                recovery protocol tailored to your diagnosis.{" "}
                <Link to="/contact" className="text-[#0B4D6E] underline underline-offset-2" style={{ fontWeight: 500 }}>
                  Contact us
                </Link>{" "}
                to learn more.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#041E2D] to-[#0B4D6E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(15,172,163,0.12),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.4rem, 2.8vw, 2rem)", fontWeight: 600 }}>
              Get a Personalized Recovery Plan
            </h2>
            <p className="text-white/50 text-[14.5px] mb-8 max-w-lg mx-auto" style={{ lineHeight: 1.75 }}>
              Every recovery begins with a thorough evaluation. Let our specialists assess your
              condition and build a structured plan just for you.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="px-7 py-3.5 bg-[#0FACA3] text-white rounded-full text-[14px] hover:bg-[#0d9a92] transition-all hover:shadow-lg hover:shadow-[#0FACA3]/25"
                style={{ fontWeight: 500 }}
              >
                Book Consultation
              </Link>
              <a
                href="tel:+917997592222"
                className="px-7 py-3.5 border border-white/20 text-white rounded-full text-[14px] hover:bg-white/10 transition-all inline-flex items-center gap-2"
              >
                <Phone size={15} strokeWidth={1.5} /> Speak to Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}